import NavBar from "./NavBar"

function Footer(){
    return(
        <footer>
            <p>Copyright &copy; - Darío Castillo</p>
            <NavBar isHeader={false}/>
        </footer>
    )
}

export default Footer