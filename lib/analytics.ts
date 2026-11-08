declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TRWB9C5D";

export function trackWaClick(location: string, label?: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "wa_click",
    wa_location: location,
    wa_label: label ?? "",
  });
}
