import "./style.css";
import { useState } from "react";

const Dropdown = (props) => {
    const [ value, setValue] = useState(props.items[0]);
    const [ isActive, toggleActive ] = useState(false);

    return(
        <div className="dropdown">
            <div className={isActive ? 'dropdown__head active' : 'dropdown__head'} onClick={() => toggleActive(!isActive)}>
                <p>{props.value}</p>
                <img src="/images/Vector1.png" alt="arrow" className={isActive ? "dropdown__arrow_open" : "dropdown__arrow_closed"}/>
            </div>
            {isActive ? 
                <div className="dropdown__menu">
                    {props.items.map( (item, index) => {
                        return(
                            <div key={index} className="dropdown__menu_item" onClick={ e => {
                                props.onClick(e.target.innerText);
                                toggleActive(false)}}>{item}
                            </div>
                        )
                    })}
                </div> :
                null
            }
            
        </div>
    )
}

export default Dropdown;