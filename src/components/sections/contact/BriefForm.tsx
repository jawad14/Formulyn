"use client";

import { useState } from "react";
import { briefForm } from "@/data/contact";
import styles from "./ContactSection.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Brief intake. Posts to /api/leads — the same destination as the chat
 * widget's capture flow, so there is one place to maintain.
 *
 * Markup and class names are unchanged from the original presentational
 * form; only submission behaviour is added. Without the handler the form
 * GET-submits to the current URL, which loses the lead and writes the
 * enquiry into the address bar and server logs.
 */
export function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const category = String(data.get("category") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          brief: category ? `[${category}] ${message}` : message,
          source: "contact-form",
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "Could not send that through.");
      }

      form.reset();
      setStatus("sent");
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Could not send that through.",
      );
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.formEyebrow}>{briefForm.eyebrow}</p>

      {/* Labelled via aria-label so each control stays a direct flex
          child and keeps the design's even 18px rhythm. */}
      {briefForm.fields.map((field) => (
        <input
          key={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          aria-label={field.placeholder}
          className={styles.field}
          required={field.name !== "category"}
          disabled={status === "sending"}
        />
      ))}

      <textarea
        name={briefForm.message.name}
        rows={briefForm.message.rows}
        placeholder={briefForm.message.placeholder}
        aria-label={briefForm.message.placeholder}
        className={styles.textarea}
        required
        disabled={status === "sending"}
      />

      <button
        type="submit"
        className={styles.submit}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : briefForm.submitLabel}
      </button>

      <p className={styles.formStatus} role="status" aria-live="polite">
        {status === "sent"
          ? "Thank you — we'll be in touch within one business day."
          : status === "error"
            ? `${error} Email ${"info@formulyn.com.au"} and it'll reach the same place.`
            : ""}
      </p>
    </form>
  );
}
