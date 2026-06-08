import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@halort/themes";
import { MarketingLandingPage } from "@halort/web";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <MarketingLandingPage />
    </ThemeProvider>
  </StrictMode>,
);
