import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as authApi from "../utils/authApi";

function Register() {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState('')
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
                navigate('/sign-in')
            })
            .catch(err => {
                setErrorMessage(err)
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
            <div className="authentication__tip">Уже зарегистрированы? Войти</div>
        </form>
    )
}

export default Register;