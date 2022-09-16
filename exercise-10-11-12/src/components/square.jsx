import React, {useState} from 'react';

const Square = () => {
    const [showMsg, setMsg] = useState(false);
    const [color, setColor] = useState('rgb(0, 0, 0)')
    const [time, setTime] = useState();

    const getNumber = () => Math.floor(Math.random() * 256);
    const getColor = () => setColor(`rgb(${getNumber()}, ${getNumber()}, ${getNumber()})`)

    const mouseOver = () => {
        setMsg(false)
        setTime(setInterval(getColor, 1000))
    }
    const mouseLeave = () => clearInterval(time)
    const doubleClick = () => {
        setMsg(true)
        clearInterval(time)   
    }
    const click = () => clearInterval(time) 

    return (
        <div>  
            <div id="square" 
                onMouseOver={ mouseOver }
                onMouseLeave={ mouseLeave }
                onDoubleClick={ doubleClick }
                onClick={ click }
                style={ {backgroundColor: color} }>
            </div>
            { showMsg && <h4>Color: {color}</h4> } 
        </div>
    )
}

export default Square;