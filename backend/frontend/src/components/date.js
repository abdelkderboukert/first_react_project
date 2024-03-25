import React from "react";
const Book = (props) => {
    const { year, monthe, day, hour, i, index } = props;
    console.log(props);
    const Image = () => <h1>image path</h1>;
    const Title = () => <h3>title book</h3>;
    const Author = () => <p style={{ color: '#ffff' }}>author</p>;
    return (
        <>
            <p>{i}/{index}</p>
            <Image />
            <Title />
            <Author />
            <p>{year}/{monthe}/{day}/{hour}</p>
            <button onClick={() => console.log('hi')}>hi</button>
            <br />
        </>
    );
};


export default Book;