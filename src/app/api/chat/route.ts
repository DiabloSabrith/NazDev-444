import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch('http://localhost:8080/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.reply });
  } catch (err) {
    console.error('Ошибка на сервере:', err);
    return NextResponse.json(
      { reply: 'Ошибка при обращении к AI-серверу' },
      { status: 500 }
    );
  }
}
