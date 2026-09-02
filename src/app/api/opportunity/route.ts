import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { website, industry, market, objective, name, email, notes } = body;

    // Server-side validation
    if (!website || typeof website !== "string" || !website.trim()) {
      return NextResponse.json(
        { error: "Website URL is required and must be valid." },
        { status: 400 }
      );
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "A valid business email address is required." },
        { status: 400 }
      );
    }

    // Prepare response confirmation
    return NextResponse.json({
      success: true,
      message: "Growth diagnostic brief received successfully.",
      data: {
        domain: website.trim(),
        industry,
        market,
        objective,
        contactName: name.trim(),
        contactEmail: email.trim(),
        notes: notes ? notes.trim() : "",
        submittedAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload or internal server error." },
      { status: 500 }
    );
  }
}
