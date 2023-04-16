import {useState} from "react";
import {authorize} from "../utils/authApi";
import {useNavigate} from "react-router-dom";

function Login({handleLogin, setTooltipShow, setIsTooltipSuccess}) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }

        authorize(formValue.email, formValue.password)
            .then(data => {
                if (data.token) {
                    handleLogin(data.token)
                    navigate('/')
                }
            })
            .catch(() => {
                setIsTooltipSuccess(false);
                setTooltipShow(true)
            })
    }
    return (
        <>
        <form className="authentication" onSubmit={handleSubmit}>
            <h1 className="authentication__title">Вход</h1>
            <input
                className="authentication__input"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                id="email"
                name="email"
            />
            <input
                className="authentication__input"
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
                id="password"
                name="password"
            />
            <button className="authentication__button" type="submit">Войти</button>
        </form>
        </>

)
}

export default Login;