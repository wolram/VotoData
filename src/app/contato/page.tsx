"use client";

import { useState, type FormEvent } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const tipoOptions = [
  "Contato Comercial",
  "Suporte Técnico",
  "Parceria",
  "Imprensa",
  "Outro",
] as const;

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      tipo: (form.elements.namedItem("tipo") as HTMLSelectElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json: { success?: boolean; error?: string } = await res.json();
      if (json.success) {
        setResult({ success: true, message: "Mensagem enviada com sucesso. Entraremos em contato em breve." });
        form.reset();
      } else {
        setResult({ success: false, message: json.error ?? "Erro ao enviar mensagem." });
      }
    } catch {
      setResult({ success: false, message: "Erro de conexão. Tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    "font-sans border border-[var(--border-color-light)] bg-transparent rounded-[2px] p-3 focus:outline-2 focus:outline-[var(--focus-ring)] w-full";

  return (
    <main className="page-grid">
      <Nav />
      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        <div className="section-label mb-6">
          <span className="section-label-slash">/</span>
          Contato
        </div>

        <h1 className="text-section-heading">Contato</h1>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
          <div>
            <label htmlFor="nome" className="text-mono-sm uppercase block mb-2">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-mono-sm uppercase block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="tipo" className="text-mono-sm uppercase block mb-2">
              Tipo
            </label>
            <select
              id="tipo"
              name="tipo"
              required
              className={inputClasses}
            >
              <option value="" disabled>
                Selecione...
              </option>
              {tipoOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mensagem" className="text-mono-sm uppercase block mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={6}
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="nav-pill py-3 px-6 self-start disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>

          {result && (
            <p
              className={`text-mono-sm mt-2 ${
                result.success ? "text-green-700" : "text-red-700"
              }`}
            >
              {result.message}
            </p>
          )}
        </form>
      </article>
      <Footer />
    </main>
  );
}
