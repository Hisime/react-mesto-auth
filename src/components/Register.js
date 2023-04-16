import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import * as authApi from "../utils/authApi";

function Register({setTooltipShow, setIsTooltipSuccess}) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formValue

        authApi.register(email, password)
            .then(data => {
                setIsTooltipSuccess(true);
                setTooltipShow(true)
                navigate('/sign-in')
            })
            .catch(err => {
                setIsTooltipSuccess(false);
                setTooltipShow(true)
                console.log(err);
            })
    }

    return(
        <form className="authentication" onSubmit={handleSubmit}>
            <h1 className="authentication__title">Регистрация</h1>
            <input
                className="authentication__input"
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                className="authentication__input"
                name="password"
                id="password"
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
            />
            <button className="authentication__button" type="submit">Зарегистрироваться</button>
            <p className="authentication__tip">
                Уже зарегистрированы?
                <Link className="authentication__link" to="/sign-in">Войти</Link>
            </p>
        </form>
    )
}

export default Register;