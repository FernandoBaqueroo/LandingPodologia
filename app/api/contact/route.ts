import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/utils/rate-limiter";
import {
  sanitizeText,
  isValidEmail,
  isValidPhone,
  validateLengths,
} from "@/lib/utils/sanitize";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
  _honeypot?: string;
  _timestamp?: number;
}

const MIN_SUBMIT_TIME_MS = 3000; // 3 segundos mínimo para un humano

export const POST = async (request: Request) => {
  try {
    /* ── 1. Verificar configuración ────────────────────────── */
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    /* ── 2. Validar headers ────────────────────────────────── */
    const contentType = request.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type inválido." },
        { status: 400 }
      );
    }

    /* ── 3. Rate limiting por IP ───────────────────────────── */
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headersList.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Has enviado demasiados mensajes. Inténtalo en 15 minutos." },
        { status: 429 }
      );
    }

    /* ── 4. Parsear body ───────────────────────────────────── */
    const body = (await request.json()) as ContactBody;

    /* ── 5. Honeypot check (server-side) ───────────────────── */
    if (body._honeypot) {
      // Los bots rellenan este campo; simulamos éxito sin enviar nada
      return NextResponse.json(
        { success: true, message: "Mensaje enviado correctamente." },
        { status: 200 }
      );
    }

    /* ── 6. Timestamp anti-bot ─────────────────────────────── */
    if (body._timestamp) {
      const elapsed = Date.now() - body._timestamp;
      if (elapsed < MIN_SUBMIT_TIME_MS) {
        return NextResponse.json(
          { success: true, message: "Mensaje enviado correctamente." },
          { status: 200 }
        );
      }
    }

    /* ── 7. Campos obligatorios ─────────────────────────────── */
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    /* ── 8. Sanitizar inputs ───────────────────────────────── */
    const name = sanitizeText(body.name);
    const email = sanitizeText(body.email).toLowerCase();
    const phone = sanitizeText(body.phone ?? "");
    const message = sanitizeText(body.message);

    /* ── 9. Validaciones de formato y longitud ─────────────── */
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "El formato del email no es válido." },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "El formato del teléfono no es válido." },
        { status: 400 }
      );
    }

    if (!validateLengths({ name, email, phone, message })) {
      return NextResponse.json(
        { error: "Uno o más campos exceden la longitud máxima permitida." },
        { status: 400 }
      );
    }

    /* ── 10. Enviar email ──────────────────────────────────── */
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Formulario Web <info@podologiarubenbaquero.com>`,
      to: ["podologocarabanchel@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #333; margin-bottom: 24px; font-size: 22px;">
            📩 Nuevo mensaje de contacto
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #555; width: 120px; vertical-align: top;">Nombre</td>
              <td style="padding: 12px 16px; color: #222;">${name}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 12px 16px; font-weight: 600; color: #555; vertical-align: top;">Email</td>
              <td style="padding: 12px 16px; color: #222;">
                <a href="mailto:${email}" style="color: #6b5b4a;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #555; vertical-align: top;">Teléfono</td>
              <td style="padding: 12px 16px; color: #222;">${phone || "No proporcionado"}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 12px 16px; font-weight: 600; color: #555; vertical-align: top;">Mensaje</td>
              <td style="padding: 12px 16px; color: #222; line-height: 1.6; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            Enviado desde el formulario de contacto — podologiarubenbaquero.com
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
};
