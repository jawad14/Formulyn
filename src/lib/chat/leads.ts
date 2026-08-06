import type { Lead } from "./types";

/**
 * THE SWAP POINT FOR LEADS.
 *
 * Set LEADS_WEBHOOK_URL and captured leads are POSTed there as JSON (works
 * with Zapier, Make, a CRM endpoint, or your own handler). With nothing set,
 * the lead is logged server-side so the flow is testable end to end — logs
 * are not durable storage, so wire a real destination before launch.
 *
 * The brief form on /contact and the newsletter signup on /journal should
 * eventually post here too, so there is one destination to maintain.
 */
export async function deliverLead(lead: Lead): Promise<void> {
  const url = process.env.LEADS_WEBHOOK_URL;

  if (!url) {
    console.info("[lead] captured (no LEADS_WEBHOOK_URL configured)", {
      name: lead.name,
      email: lead.email,
      brief: lead.brief,
      messages: lead.transcript.length,
    });
    return;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.LEADS_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.LEADS_WEBHOOK_SECRET}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ source: "chat", ...lead }),
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) {
    throw new Error(`Lead webhook responded ${response.status}`);
  }
}
