import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Cookies | Rubén Baquero",
  description: "Política de Cookies de la clínica de podología Rubén Baquero.",
};

export default function PoliticaCookiesPage() {
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
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">Política de Cookies</h1>
      </div>
      
      <div className="flex flex-col gap-10 text-base font-light leading-relaxed text-foreground/80">
        <p>
          En esta web apostamos por la privacidad de nuestros usuarios. A diferencia de otras páginas, 
          hemos diseñado este sitio web para ser lo menos intrusivo posible.
        </p>
        <p className="text-sm text-foreground/60">Última actualización: marzo de 2026</p>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">¿Esta web utiliza cookies?</h2>
          <p>
            Prácticamente <strong>ninguna</strong>. Unicamente utilizamos tecnologías estrictamente 
            necesarias de carácter técnico para asegurar el correcto funcionamiento del servidor y 
            la página (como seguridad básica de los formularios enviados). 
          </p>
          <p>
            Al tratarse de cookies estrictamente técnicas y esenciales para que puedas navegar, 
            la normativa europea (RGPD) y española (LSSI-CE) <strong>no exige recabar el 
            consentimiento del usuario</strong>, por eso no te molestamos con un "banner" de 
            aceptación de cookies al entrar.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">¿Cómo analizamos el tráfico web?</h2>
          <p>
            Para poder saber cuántas personas visitan la clínica digitalmente, utilizamos el servicio 
            oficial de nuestro proveedor de alojamiento web (<strong>Vercel Web Analytics</strong>).
          </p>
          <p>
            Esta herramienta está diseñada desde cero enfocada en la privacidad: <strong>no utiliza 
            cookies de rastreo, no guarda direcciones IP, ni rastrea tu comportamiento</strong> a través 
            de internet. Simplemente cuenta visitas anónimas agregadas para tener una estadística 
            básica de uso. De nuevo, al no almacenar cookies invasivas en tu ordenador ni identificar 
            quién eres, no requiere un banner de consentimiento previo.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">¿Se pueden bloquear las funcionalidades del navegador?</h2>
          <p>
            Aunque nuestra web sea respetuosa con tu privacidad, recuerda que siempre tienes el 
            control total sobre tu navegador y puedes bloquear o eliminar cualquier rastro si lo 
            deseas desde los ajustes de seguridad del mismo:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Configuración de seguridad en Google Chrome</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Configuración de seguridad en Apple Safari</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Configuración de seguridad en Mozilla Firefox</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
