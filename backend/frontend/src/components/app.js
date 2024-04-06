import React from "react";
import ReactDOM from "react-dom/client";
// import "../../static/css/index.css";
import Homepage from "./homePage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const query = new QueryClient({})
function App() {
    return (
        <QueryClientProvider client={query} >
            <Homepage />
        </QueryClientProvider>
    );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App />);

