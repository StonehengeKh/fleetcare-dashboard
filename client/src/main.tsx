import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "@app/providers/i18n";
import { store } from "@app/providers/store";
import AppLayout from "@app/layout/AppLayout";
import { AppRoutes } from "@app/router/routes";
import { ThemeProvider } from "@app/providers/theme";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ThemeProvider>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
