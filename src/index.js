import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavLinkContext from "./components/navLinkContext.js";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <NavLinkContext>
    <App />
  </NavLinkContext>
);
