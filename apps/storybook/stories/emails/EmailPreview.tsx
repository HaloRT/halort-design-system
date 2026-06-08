"use client";

import { cloneElement, useEffect, useState, type ReactElement } from "react";
import { render } from "@react-email/render";

const STORYBOOK_LOGO_URL = "/halort-logo.png";

export function EmailPreview({ children }: { children: React.ReactElement }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const previewChild = cloneElement(children, {
      logoUrl: STORYBOOK_LOGO_URL,
    } as Record<string, string>);
    void render(previewChild).then(setHtml);
  }, [children]);

  if (!html) return <p className="text-muted">Loading email preview...</p>;

  return (
    <iframe
      title="Email preview"
      srcDoc={html}
      className="h-[600px] w-full max-w-2xl rounded-xl border border-border bg-white"
    />
  );
}
