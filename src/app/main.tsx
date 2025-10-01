import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";

import {store} from "@app/state/store";

import App from "./App.tsx";
import "normalize.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
);
