import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviso Legal | Rubén Baquero",
  description: "Aviso Legal de la web de la clínica de podología Rubén Baquero.",
};

export default function AvisoLegalPage() {
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
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">Aviso Legal</h1>
      </div>

      <div className="flex flex-col gap-10 text-base font-light leading-relaxed text-foreground/80">
        <p>
          En cumplimiento con el deber de información recogido en artículo 10 de
          la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico (LSSICE), el titular de la web
          le informa de lo siguiente:
        </p>
        <p className="text-sm text-foreground/60">Última actualización: marzo de 2026</p>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">1. Datos identificativos</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li><strong className="font-semibold text-foreground">Denominación / Titular:</strong> Ruben Baquero Zamora</li>
            <li><strong className="font-semibold text-foreground">NIF:</strong> 80227903Q</li>
            <li><strong className="font-semibold text-foreground">Domicilio:</strong> Calle Tucán 7. Locales D-1, D-2, Carabanchel, Madrid 28025</li>
            <li><strong className="font-semibold text-foreground">Colegio Profesional:</strong> COPOMA (Colegio Oficial de Podólogos de Madrid)</li>
            <li><strong className="font-semibold text-foreground">Número de Colegiado:</strong> 838282854</li>
            <li><strong className="font-semibold text-foreground">Email de contacto:</strong> podologocarabanchel@gmail.com</li>
            <li><strong className="font-semibold text-foreground">Teléfono de contacto:</strong> 914 65 19 11</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">2. Uso del portal</h2>
          <p>
            El acceso y/o uso de este portal atribuye la condición de USUARIO,
            que acepta, desde dicho acceso y/o uso, las Condiciones Generales de
            Uso aquí reflejadas.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los derechos de propiedad intelectual e industrial del sitio web,
            así como de los elementos contenidos en el mismo, pertenecen al titular
            de la web o a terceros. Queda expresamente prohibida la reproducción,
            distribución y comunicación pública, incluida su modalidad de puesta a
            disposición, de la totalidad o parte de los contenidos de esta página web,
            en cualquier soporte y por cualquier medio técnico, sin la autorización del titular.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">4. Exclusión de garantías y responsabilidad</h2>
          <p>
            El titular no se hace responsable, en ningún caso, de los daños y perjuicios de
            cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en
            los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos
            o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas
            necesarias para evitarlo.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">5. Modificaciones</h2>
          <p>
            El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que
            considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos
            y servicios que se presten a través de la misma como la forma en la que éstos
            aparezcan presentados o localizados en su portal.
          </p>
        </section>
      </div>
    </main>
  );
}
