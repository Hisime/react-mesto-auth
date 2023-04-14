function Authentication({title, buttonText}) {
    return (
        <section className="authentication">
            <h1 className="authentication__title">{title}</h1>
            <input className="authentication__input" type="email" placeholder="Email"/>
            <input className="authentication__input" type="password" placeholder="Пароль"/>
            <button className="authentication__button" type="submit">{buttonText}</button>
            <div className="authentication__tip">Уже зарегистрированы? Войти</div>
        </section>
    )
}

export default Authentication;