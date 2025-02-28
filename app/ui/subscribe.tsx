"use client"

import { useState } from "react"

export default function Subscribe() {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [status, setStatus] = useState<"success" | "error" | "">("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMessage("")
    setStatus("")

    const response = await fetch("/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    // const data = await response.json()

    if (response.ok) {
      setMessage("Thanks for subscribing!")
      setStatus("success")
      setEmail("")
    } else {
      setMessage("Subscription failed. Please try again.")
      setStatus("error")
    }
  }
  return (
    <div className=" my-4 flex flex-col items-center justify-center">
      <h3 className="text-xl font-normal">
        Stay Updated!
      </h3>
      <p className="mt-2 my-2 text-grey-600">Subscribe for more updates & new features</p>
      <form
        name="join"
        className="flex w-full max-w-md border rounded-lg overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 outline-none text-[#faf9f6] bg-transparent"
          size={30}
          required
        />
        <button type="submit" className="bg-[#faf9f6] text-[#171717] px-4 py-2">
          Subscribe
        </button>
      </form>
      {message && (
        <p style={{ color: status === "success" ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  )
}
