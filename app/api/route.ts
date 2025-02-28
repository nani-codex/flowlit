import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      )
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const DATACENTER = process.env.MAILCHIMP_DATACENTER

    if (!API_KEY || !LIST_ID || !DATACENTER) {
      return NextResponse.json(
        { message: "Missing Mailchimp API credentials" },
        { status: 500 }
      )
    }

    const mailchimpUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

    const response = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { message: errorData.detail || "Subscription failed" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
