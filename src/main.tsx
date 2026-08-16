import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//import App from "./App";
import "./index.css";

import { ThemeProvider } from "./theme/ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <ThemeProvider>
//     <QueryClientProvider client={queryClient}>
//       <App />
//       <ReactQueryDevtools />
//     </QueryClientProvider>
//   </ThemeProvider>,
// );

//here we use reactRouter..

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <ReactQueryDevtools />
    </QueryClientProvider>
  </ThemeProvider>,
);
