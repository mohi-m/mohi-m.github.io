// Google Analytics tracking utility

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

// Pre-defined tracking functions for common events
export const trackNavClick = (section: string) => {
  trackEvent("nav_click", { section });
};

export const trackSocialClick = (platform: string) => {
  trackEvent("social_click", { platform });
};

export const trackProjectClick = (projectName: string, action: "view_code" | "view_image") => {
  trackEvent("project_click", { project_name: projectName, action });
};

export const trackContactClick = (contactType: string) => {
  trackEvent("contact_click", { contact_type: contactType });
};

export const trackCTAClick = (ctaName: string) => {
  trackEvent("cta_click", { cta_name: ctaName });
};
