import "@rasenganjs/image/lib/styles/index.css";
import "@/styles/index.css";
import { type AppProps } from "rasengan";
import AppRouter from "@/app/app.router";
// Supports weights 100-900
import '@fontsource-variable/outfit';

export default function App({ Component, children }: AppProps) {
  return <Component router={AppRouter}>{children}</Component>;
}
