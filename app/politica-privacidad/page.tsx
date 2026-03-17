import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Rubén Baquero",
  description: "Política de Privacidad de la clínica de podología Rubén Baquero.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-light text-foreground/60 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Volver a Inicio
        </Link>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">Política de Privacidad</h1>
      </div>

      <div className="flex flex-col gap-10 text-base font-light leading-relaxed text-foreground/80">
        <p>
          En esta web se respetan y cuidan los datos personales de los usuarios. Como usuario
          debes saber que tus derechos están garantizados.
        </p>
        <p className="text-sm text-foreground/60">Última actualización: marzo de 2026</p>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">1. Responsable del tratamiento de tus datos personales</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li><strong className="font-semibold text-foreground">Identidad del Responsable:</strong> Ruben Baquero Zamora</li>
            <li><strong className="font-semibold text-foreground">NIF:</strong> </li>
            <li><strong className="font-semibold text-foreground">Dirección:</strong> Calle Tucán 7. Locales D-1, D-2, Carabanchel, Madrid 28025</li>
            <li><strong className="font-semibold text-foreground">Correo electrónico:</strong> podologocarabanchel@gmail.com</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">2. ¿Con qué finalidad tratamos tus datos personales?</h2>
          <p>
            Los datos que nos facilitas a través del formulario de contacto son recogidos con la
            única finalidad de gestionar tu solicitud, responder a tus consultas y agendar citas
            para la consulta de podología. Al ser un servicio de salud, tu información es
            tratada con la máxima confidencialidad.
          </p>
          <p>
            No se utilizarán tus datos para enviarte publicidad o newsletters, salvo que
            nos des tu consentimiento explícito.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">2b. Tratamiento de datos de salud</h2>
          <p>
            En el contexto de este servicio de podología, los datos que nos comuniques pueden incluir
            información relativa a tu salud (p. ej. dolencias, historial podológico, etc.), que
            constituyen una <strong className="font-semibold text-foreground">categoría especial de datos personales</strong> según
            el artículo 9 del RGPD (UE) 2016/679.
          </p>
          <p>
            Dicha información será tratada con las medidas de seguridad reforzadas que exige la
            normativa, únicamente para prestar la asistencia podológica solicitada, y nunca será
            cedida a terceros sin tu consentimiento o sin amparo legal.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">3. Tiempo de conservación de los datos</h2>
          <p>
            Los datos personales proporcionados se conservarán durante el tiempo necesario
            para cumplir con la finalidad para la que se recaban y para determinar las
            posibles responsabilidades que se pudieran derivar de dicha finalidad.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">4. Legitimación para el tratamiento de tus datos</h2>
          <p>
            La base legal para el tratamiento de tus datos es tu <strong className="font-semibold text-foreground">consentimiento
              explícito</strong> al marcar la casilla de aceptación en nuestro formulario de contacto
            antes de enviarnos tu consulta.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">5. Destinatarios de los datos</h2>
          <p>
            Los datos que nos proporcionas no se cederán a terceros bajo ningún concepto,
            salvo obligación legal, y se tratarán internamente en la consulta para
            darte el mejor servicio podológico posible.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">6. Tus derechos cuando nos facilitas tus datos</h2>
          <p>
            Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando
            datos personales que le conciernan, o no.
          </p>
          <p>
            Las personas interesadas tienen derecho a:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Solicitar el acceso a los datos personales relativos al interesado.</li>
            <li>Solicitar su rectificación o supresión.</li>
            <li>Solicitar la limitación de su tratamiento.</li>
            <li>Oponerse al tratamiento.</li>
            <li>Solicitar la portabilidad de los datos.</li>
          </ul>
          <p>
            Podrás ejercer tus derechos enviando un correo electrónico a <strong className="font-semibold text-foreground">podologocarabanchel@gmail.com</strong>,
            adjuntando copia de un documento de identidad válido.
          </p>
          <p>
            Asimismo, si consideras que el tratamiento de tus datos no se ajusta a la normativa
            vigente, tienes derecho a presentar una reclamación ante la{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
