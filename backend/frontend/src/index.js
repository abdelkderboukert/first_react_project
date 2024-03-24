// import App from './components/App'
import React from "react";
import ReactDOM from "react-dom/client";
import '../static/css/index.css';
import { dates } from "./dates"
import Book from "./date"
//import { BrowserRouter } from 'react-router-dom';




function BookList(props) {
    console.log(props)

    return (
        <section className='hh'>
            {dates.map((date) => {
                return <Book  {...date} key={date.index} />;
            })}
        </section>
    );
}







// function Login() {
//     return React.createElement('h2', {}, 'hello world');
// }
const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<BookList />);


