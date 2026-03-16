import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const POST = async (request: Request) => {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: `Formulario Web <${process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
      to: [process.env.CONTACT_EMAIL ?? "clinica@rubenbaquero.es"],
      replyTo: body.email,
      subject: `Nuevo mensaje de contacto — ${body.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #333; margin-bottom: 24px; font-size: 22px;">
            📩 Nuevo mensaje de contacto
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #555; width: 120px; vertical-align: top;">Nombre</td>
              <td style="padding: 12px 16px; color: #222;">${body.name}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 12px 16px; font-weight: 600; color: #555; vertical-align: top;">Email</td>
              <td style="padding: 12px 16px; color: #222;">
                <a href="mailto:${body.email}" style="color: #6b5b4a;">${body.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #555; vertical-align: top;">Teléfono</td>
              <td style="padding: 12px 16px; color: #222;">${body.phone || "No proporcionado"}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 12px 16px; font-weight: 600; color: #555; vertical-align: top;">Mensaje</td>
              <td style="padding: 12px 16px; color: #222; line-height: 1.6; white-space: pre-wrap;">${body.message}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            Enviado desde el formulario de contacto — rubenbaquero.es
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Error de Resend:", error);
      return NextResponse.json(
        { error: "Error al enviar el email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Error en /api/contact:", err);
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
};
