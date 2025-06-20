"use client";

import { useState, useCallback } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email.trim()) return;

      setStatus("submitting");

      try {
        const res = await fetch("/api/contato", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: "Newsletter",
            email,
            tipo: "Newsletter",
            mensagem: "Inscrição na newsletter",
          }),
        });

        if (!res.ok) {
          throw new Error("Falha ao inscrever");
        }

        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [email]
  );

  if (status === "success") {
    return (
      <p className="font-mono text-xs text-[var(--font-color)] opacity-80">
        Inscrito! Você receberá atualizações.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="Seu email para atualizações"
        className="bg-transparent border border-[var(--border-color-light)] rounded-[2px] px-3 py-2 text-sm font-mono placeholder:opacity-50 focus:outline-none focus:border-[var(--font-color)]"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="nav-pill whitespace-nowrap disabled:opacity-50"
      >
        {status === "submitting" ? "Enviando..." : "Assinar"}
      </button>
      {status === "error" && (
        <p className="font-mono text-xs text-red-500">
          Erro ao inscrever. Tente novamente.
        </p>
      )}
    </form>
  );
}
