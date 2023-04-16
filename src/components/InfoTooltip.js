import React from "react";
import Error from '../../src/images/cancel.svg';
import Accept from '../../src/images/accept.svg';

function InfoTooltip(isSuccess) {
    return (
        <div className="popup">
            <div className="popup__container popup__container_info">
                {isSuccess ?
                <img className="popup__info-icon" src={Accept} alt=""/>
                :
                <img className="popup__info-icon" src={Error} alt=""/>}
                <p className="popup__info-message">
                    {`${isSuccess ?
                        'Вы успешно зарегистрировались!'
                        :
                        'Что-то пошло не так! Попробуйте ещё раз.'
                        }`}
                        </p>
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
            </div>
        </div>
    )
}

export default InfoTooltip;