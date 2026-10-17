import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "not configured" }, { status: 500 });
  }

  let body: { name?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !message || name.length > 60 || message.length > 400) {
    return NextResponse.json({ error: "invalid input" }, { status: 400 });
  }

  const text = `💌 تهنئة جديدة\n\n👤 ${name}\n\n${message}`;

  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!tg.ok) {
    return NextResponse.json({ error: "telegram failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}