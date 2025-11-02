import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "@app/providers/i18n";
import { store } from "@app/providers/store";
import AppLayout from "@app/layout/AppLayout";
import { AppRoutes } from "@app/router/routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
