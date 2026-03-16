"use client";

import { useState } from "react";
import { Button, Spinner } from "@heroui/react";
import { Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  honeypot: "",
};

const inputStyles =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200";

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check — if filled, silently "succeed" without sending
    if (form.honeypot) {
      setStatus("success");
      setForm(initialState);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot — hidden from humans, visible to bots */}
      <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => handleChange("honeypot", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-normal text-foreground">
          Nombre <span className="text-danger">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Tu nombre"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-normal text-foreground">
          Email <span className="text-danger">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-phone" className="text-sm font-normal text-foreground">
          Teléfono
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="+34 600 000 000"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-normal text-foreground">
          Mensaje <span className="text-danger">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`${inputStyles} resize-none`}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        fullWidth
        isPending={isLoading}
        className="mt-1 font-normal"
      >
        {({ isPending }) => (
          <>
            {isPending ? <Spinner color="current" size="sm" /> : <Send size={16} />}
            {isPending ? "Enviando..." : "Enviar Mensaje"}
          </>
        )}
      </Button>

      {status === "success" && (
        <p className="text-sm text-success text-center">
          ¡Mensaje enviado correctamente! Te contactaremos pronto.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-danger text-center">
          Error al enviar el mensaje. Inténtalo de nuevo.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
