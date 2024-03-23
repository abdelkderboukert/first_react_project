// import App from './components/App'
import React from "react";
import ReactDOM from "react-dom/client";
import '../static/css/index.css';

const addFun = (num1, num2) => {
    console.log(num1 + num2);
};

addFun(1, 2);
const dates = [
    {
        year: '2024',
        monthe: 'mars',
        day: '22',
        hour: '12',
        index: 1,
    },
    {
        year: '2014',
        monthe: 'mars',
        day: '52',
        hour: '12',
        index: 2,
    },
    {
        year: '2000',
        monthe: 'avril',
        day: '15',
        hour: '12',
        index: 3,
    }
];


// const newdate = dates.map((date) => {
//     return <Book year={date.year} monthe={date.monthe} day={date.day} key={date.id} />;
// });

function BookList(props) {
    console.log(props)
    return (
        <section className='hh'>
            {/* <Book year={date1.year} monthe='mars' day={22} />
            <Book><p>hi ther</p></Book>
            <Book />
            <Book />
            <Book /> */}
            <EventExamples />
            {dates.map((date) => {
                return <Book  {...date} key={date.index} />;
            })}
        </section>
    );
}



const Book = (props) => {
    console.log(props);
    const { year, monthe, day, hour } = props;
    return (
        <>
            <Image />
            <Title />
            <Author />
            <p>{year}/{monthe}/{day}/{hour}</p>
            <br />
        </>
    );
};

const EventExamples = () => {
    const addBook = (e) => {
        name: e.target.value
        console.log(e.target.value);
    };
    const changeValeu = (e) => {
        console.log("changeValeu");
    };
    return (
        <>
            <form action="">
                <input type="text"
                    name="example"
                    id=""
                    onChange={changeValeu}
                />
                <button type="button" onClick={addBook}>click me</button>
            </form>
        </>
    );
};

const Image = () => <h1>image path</h1>;
const Title = () => <h3>title book</h3>;
const Author = () => <p style={{ color: '#ffff' }}>author</p>;

// function Login() {
//     return React.createElement('h2', {}, 'hello world');
// }
const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<BookList />);


