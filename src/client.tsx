import { QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} context={{ queryClient }} />,
);
