import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";
import { LoaderProvider } from "./contexts/LoaderContext.jsx";
import { AlertProvider } from "./contexts/AlertContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoaderProvider>
          <AlertProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </AlertProvider>
        </LoaderProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
