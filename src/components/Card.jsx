import React, { useState } from "react";
import Cat from '../images/Photo.jpg'

const Card = ({ item, setSelected }) => {
    const [approve, setAprove] = useState(false)

    const handleMouseLeave = () => {
        if (item.isSelected === true) {
            setAprove(true)
        }
    }

    const handleClick = () => {
        setAprove(false)
        setSelected(item.id)
    }


    return (
        <div className="app__column"
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
        >
            <div className={item.disabled ? "app__item card disabled" : "app__item card"} >
                <div className={item.disabled ? "card__body disabled" : "card__body"} >
                    <div className="card__header">
                        <div className={item.isSelected ? "card__corner selected" : item.disabled ? "card__corner disabled" : "card__corner"}></div>
                        <div className={item.isSelected ? "card__rectangle selected" : item.disabled ? 'card__rectangle disabled' : "card__rectangle"}>
                            <span className={approve ? "card__desc approve " : "card__desc"}>
                                {approve ? 'Котэ не одобряет?' : item.desc}
                            </span>
                        </div>
                    </div>
                    <div className={item.isSelected ? "card__main selected" : item.disabled ? "card__main disabled" : "card__main"}>
                        <h2 className={item.disabled ? "card__title disabled" : "card__title"}>{item.title}
                            <span className="card__feature">{item.feature}</span>
                        </h2>
                        <ul className="card__list">
                            {item.list.map((li, index) => <li key={li + index} className="card__list-item">{li}</li>)}
                        </ul>
                        <img className="card__img" src={Cat} alt="Котэ" />
                        <div className={item.isSelected ? "card__circle selected" : item.disabled ? "card__circle disabled" : "card__circle"}>
                            <div className="card__weight">
                                <span className="card__amount">{item.amount}</span>
                                <div className="card__measure">{item.measure}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={item.disabled ? "card__footer disabled" : "card__footer"}   >
                    {
                        item.disabled
                            ? <div className="card__buy disabled">Печалька, {item.feature} закончился.</div>
                            : <>
                                {

                                    item.isSelected
                                        ? <h3>{item.declaration}</h3>
                                        : <span>Чего сидишь? Порадуй котэ,
                                            <span className="card__buy">
                                                <span className="card__link" >купи</span>.
                                            </span>
                                        </span>
                                }
                            </>
                    }

                </div>
            </div>
        </div >

    );
}

export default Card;
