import "./style.css";

const PremiereTable = (props) => {

    return (
        <ul className="premiere__list">
            <li className="premiere__item premiere__item_header">
                <p className="item__command">Комманда</p>
                <div className="item__stats">
                    <p>И</p>
                    <p>П</p>
                    <p>Пр</p>
                    <p>Н</p>
                    <p>О</p>
                </div>
            </li>
            {props.table.map((item, index) => {
                return(
                <li key={index} className="premiere__item">
                    <p className="premiere__position">{item.position}</p>
                    <img src={item.team.crestUrl} alt="command logo" className="team__logo"/>
                    <p className="item__command">{item.team.name}</p>
                    <div className="item__stats">
                        <p>{item.playedGames}</p>
                        <p>{item.won}</p>
                        <p>{item.lost}</p>
                        <p>{item.draw}</p>
                        <p>{item.points}</p>
                    </div>
                </li>
                ) 
            })}
        </ul>
    )
}

export default PremiereTable;