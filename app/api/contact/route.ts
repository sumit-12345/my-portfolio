import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Contact form submission:", body);
  // In production, connect to email service (SendGrid, Mailgun, etc.).
  return NextResponse.json({ success: true });
}
