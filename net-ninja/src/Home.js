const Home = () => {
    const handleClick = () => {
        console.log('Hello Ninjas');
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }
    return (
        <div className="home">
            <h1>HOME</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button>
        </div>
    );
}

export default Home;