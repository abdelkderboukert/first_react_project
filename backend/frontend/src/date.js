
const Book = (props) => {
    const { year, monthe, day, hour } = props;
    console.log(props);
    const Image = () => <h1>image path</h1>;
    const Title = () => <h3>title book</h3>;
    const Author = () => <p style={{ color: '#ffff' }}>author</p>;
    return (
        <>
            <Image />
            <Title />
            <Author />
            <p>{year}/{monthe}/{day}/{hour}</p>
            <button >hi</button>
            <br />
        </>
    );
};


export default Book;