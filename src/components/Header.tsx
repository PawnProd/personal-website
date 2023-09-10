import Button from "./Button";

const Header = () => {

return <header className="site-header">
    <div className="container">
        <div className="site-header__inner">
            <img src="/images/logo" alt="Logo" />
            <nav className="nav">
                <ul className="nav | flex-group my-auto">
                    <li className="nav__item"><a href="">A Propos</a></li>
                    <li className="nav__item"><a href="">Mes Services</a></li>
                    <li className="nav__item"><a href="">Technologies</a></li>
                    <li className="nav__item"><a href="">Projets</a></li>
                    <li className="nav__item"><a href="">Témoignages</a></li>
                    <li><Button className="uppercase" variant="outlined">Contactez moi</Button></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
}

export default Header;