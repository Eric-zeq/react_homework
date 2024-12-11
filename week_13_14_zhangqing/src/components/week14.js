import React from "react";
import "./week14.css";
import { useState } from "react";

function Pizzacard(){


    const [count, setCount] = useState(1);

    const [pizza_price, setPizzaPrice] = useState(500);

    const [selected_size, setSelectedSize] = useState('');

    function increase(){
        setCount(count + 1);
    }

    function decrease(){
        setCount(count - 1);
    }

    const SelectPizzaSize = () => {
        const handleChange = (event) => {
            setSelectedSize(event.target.value);
            if(event.target.value === "150*150")
                 return setPizzaPrice(pizza_price * 1.2);
            else if(event.target.value === "200*200")
                return setPizzaPrice(pizza_price * 1.5);
            else
                 return setPizzaPrice(500);
        };

        return (
            <div>
                <select value={selected_size} onChange={handleChange}>
                    <option value="">Диаметр</option>
                    <option value="150*150">150*150</option>
                    <option value="200*200">200*200</option>    
                </select>
                <p>Размер: {selected_size}</p>
            </div>
            
        );
    }



    return (
        <div className="pizza-card">
            <img src="https://via.placeholder.com/150" alt="pizza" />
            <div id="pizza-info">
                <h2>Пепперони</h2>
                <p>Нечего лишнего, нужно только пепперони!</p>
                <SelectPizzaSize />
  
                <h3>oт <span>{pizza_price * count} руб.</span></h3>
                 <div id="pizza-buttons">
                    <div id="number-of-pizza">
                        <button onClick={decrease}>-</button>
                        <span>{count}</span>
                        <button onClick={increase}>+</button>
                    </div>
                    <button id="add-to-cart">🛒</button>
                 </div>
            </div>
            
        </div>
    )
}

export default Pizzacard;