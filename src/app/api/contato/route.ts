import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, number>();

const RATE_LIMIT_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateLimitMap.get(ip);
  if (last && now - last < RATE_LIMIT_MS) {
    return true;
  }
  rateLimitMap.set(ip, now);
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas requisições. Aguarde um minuto e tente novamente." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const { nome, email, tipo, mensagem } = body as {
    nome?: string;
    email?: string;
    tipo?: string;
    mensagem?: string;
  };

  if (!nome || !email || !tipo || !mensagem) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 },
    );
  }

  if (typeof nome !== "string" || typeof email !== "string" || typeof tipo !== "string" || typeof mensagem !== "string") {
    return NextResponse.json(
      { error: "Formato de dados inválido." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Formato de email inválido." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (resendApiKey && contactEmail) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "VotoData <noreply@votodata.com.br>",
          to: [contactEmail],
          subject: `[VotoData Contato] ${tipo} — ${nome}`,
          text: `Nome: ${nome}\nEmail: ${email}\nTipo: ${tipo}\n\nMensagem:\n${mensagem}`,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Resend API error:", errorText);
        return NextResponse.json(
          { error: "Falha ao enviar email. Tente novamente mais tarde." },
          { status: 500 },
        );
      }
    } catch (err) {
      console.error("Resend fetch error:", err);
      return NextResponse.json(
        { error: "Falha ao enviar email. Tente novamente mais tarde." },
        { status: 500 },
      );
    }
  } else {
    console.log("--- Contato Form Submission (dev mode) ---");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Tipo:", tipo);
    console.log("Mensagem:", mensagem);
    console.log("-------------------------------------------");
  }

  return NextResponse.json({ success: true });
}
