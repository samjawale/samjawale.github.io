import React from "react";
import ReactDOM from "react-dom/client";
import { pdfjs } from "react-pdf";
import "antd/dist/reset.css";
import "@/index.css";
import App from "@/App";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
