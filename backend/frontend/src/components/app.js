import React from "react";
import ReactDOM from "react-dom/client";
// import "../../static/css/index.css";
import Homepage from "./homePage"

function App() {
    return <Homepage />;
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App />);

