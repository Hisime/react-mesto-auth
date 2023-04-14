import {Link, Route, Routes} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <Routes>
                <Route path="sign-in"
                       element={
                           <Link className="header__link" to="/sign-up">Регистрация</Link>
                       }
                />
                <Route path="sign-up"
                       className="header__link"
                       element={
                           <Link className="header__link" to="/sign-in">Войти</Link>
                       }
                />

            </Routes>
        </header>
    )
}

export default Header;
