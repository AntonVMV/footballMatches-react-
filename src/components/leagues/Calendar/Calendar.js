import { useEffect, useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import "./style.css"

const menuItems = ['FINISHED', 'SCHEDULED'];

function Calendar(props) {

    const [ games, setGames ] = useState([]);
    const [ value, setValue] = useState(menuItems[0]);

    useEffect(() => {
        const groups = fetch(`https://api.football-data.org/v2/competitions/${props.league}/matches`, {
            headers: { 'X-Auth-Token': 'adc2243d44374657aa9f4bc482556c5f' },
        })
            .then(response => response.json())
            .then(result => setGames(result.matches))
    }, [])

    function itemSelect(text) {
        setValue(text);
    }
    
    return (
        <ul className="calendar__list">
            <li className="calendar__item calendar__item_header">
                <div className="calendar__items">
                    <p>Группа</p>
                    <p>Тур</p>
                    <p>Дата</p>
                    <p>Команды</p>
                    <p>Счёт</p>
                </div>
                <Dropdown items={menuItems} onClick={itemSelect} value={value} />
            </li>
            {games.filter( item => item.status === value)
                .map( item => {
                    return(
                        <li key={item.id} className="calendar__item">
                            <div className="calendar__items">
                                <p>{item.group ? item.group[item.group.length -1] : "-"}</p>
                                <p>{item.matchday ? item.matchday : '-'}</p>
                                <p>{converDate(item.utcDate)}</p>
                                <p>{`${item.homeTeam.name} : ${item.awayTeam.name}`}</p>
                                <p>{item.status === 'FINISHED' ? 
                                    `${item.score.fullTime.homeTeam} : ${item.score.fullTime.awayTeam}` :
                                    'Запланирован'}</p>
                            </div> 
                        </li>
                    )
                })}
        </ul>
    )
}

function converDate(date){
    const result = date.replace(/[^:-\d]/g, ' ').trim()
    return result;
}

export default Calendar;