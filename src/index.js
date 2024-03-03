import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const rt = createRoot(document.getElementById("root"));

rt.render(<App/>);