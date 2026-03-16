import { NextResponse } from "next/server";

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

    // TODO: Integrar con servicio de email (Resend, Nodemailer, etc.)
    // Por ahora solo logueamos en consola del servidor
    console.log("📩 Nuevo mensaje de contacto:", {
      name: body.name,
      email: body.email,
      phone: body.phone ?? "No proporcionado",
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Mensaje recibido correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
};
