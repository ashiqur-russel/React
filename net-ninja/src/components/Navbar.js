
const Navbar = () => {
    return (
        <section>
            <nav className="navbar">
                <div className="logo"><h1>The Dojo Blog</h1></div>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New Blog</a>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;