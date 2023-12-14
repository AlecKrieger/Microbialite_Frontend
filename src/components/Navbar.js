const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Microbialite Database</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/Data/Waypoints">Data</a>
                <a href="/analysts">Analysts</a>
                <a href="/tickets">Tickets</a>
                <a href="/login" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8p"
                }} >Login</a>
            </div>
        </nav>
     );
}
 
export default Navbar