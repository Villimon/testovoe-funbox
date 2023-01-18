import React, { useEffect, useState } from "react";
import './styles/style.scss'
import Card from "./components/Card";

const data = [
  {
    id: 1,
    desc: 'Сказочное заморское яство',
    title: 'Нямушка',
    feature: 'с фуа-гра',
    list: ['10 порций', 'мышь в подарок'],
    amount: '0,5',
    measure: 'кг',
    isSelected: false,
    declaration: 'Печень утки разварная с артишоками.',
    disabled: false
  },
  {
    id: 2,
    desc: 'Сказочное заморское яство',
    title: 'Нямушка',
    feature: 'с рыбой',
    list: ['40 порций', '2 мыши в подарок'],
    amount: '2',
    measure: 'кг',
    isSelected: false,
    declaration: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabled: false
  },
  {
    id: 3,
    desc: 'Сказочное заморское яство',
    title: 'Нямушка',
    feature: 'с курой',
    list: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    amount: '5',
    measure: 'кг',
    isSelected: false,
    declaration: 'Филе из цыплят с трюфелями в бульоне.',
    disabled: true
  },
]





function App() {
  const [items, setItems] = useState(data)


  const setSelected = (id) => {
    const copy = [...items]
    let currentCard = copy.find(i => i.id === id)
    if (!currentCard.disabled) {
      currentCard.isSelected = !currentCard.isSelected
    }
    setItems(copy)
  }



  return (
    <div className="app">
      <h1 className="app__title">Ты сегодня покормил кота?</h1>
      <div className="app__cards">
        {items.map((item) => <Card
          key={item.id}
          item={item}
          setSelected={setSelected}
        />)}
      </div>
    </div>
  );
}

export default App;
