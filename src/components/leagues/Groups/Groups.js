import "./style.css";

const Groups = (props) => {

    return (
        <ul className="group__list">
            <li className="group__list_item group__list_header">
                <p className="group__item_title">Группа {props.group[props.group.length - 1]}</p>
                <div className="group__item_text">
                    <p>И</p>
                    <p>О</p>
                </div>    
            </li>
            {props.groupTeams.map( (item, index) => {
                return(
                    <li key={index} className="group__list_item">
                        <p className="group__item_position">{item.position}</p>
                        <p className="group__item_title">{item.team.name}</p>
                        <div className="group__item_text">
                            <p>{item.playedGames}</p>
                            <p>{item.points}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Groups;