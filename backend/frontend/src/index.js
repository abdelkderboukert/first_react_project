// import App from './components/App'
import React from "react";
import ReactDOM from "react-dom/client";
import '../static/css/index.css';

function BookList() {
    return (
        <section className='hh'>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />

        </section>
    );
}

const Book = () => {
    return (
        <>
            <Image />
            <Title />
            <Author />
            <br />
        </>
    );
};

const Image = () => <h1>image path</h1>;
const Title = () => <h3>title book</h3>;
const Author = () => <p>author</p>;

// function Login() {
//     return React.createElement('h2', {}, 'hello world');
// }
const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<BookList />);


