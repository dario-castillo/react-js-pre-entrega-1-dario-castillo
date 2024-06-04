import CartWidget from "./CartWidget"

function NavBar(props){
    if (props.isHeader == true) {
    return(
        <nav>
            <a href="#">About me</a>
            <a href="#">Portfolio</a>
            <a href="#">Shop</a>
            <CartWidget/>
            <a href="#">5</a>
        </nav>
    )
} else {
    return(
        <nav>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
        </nav>
    )
}
}

export default NavBar