import { useState, useEffect } from "react";
import "./style.css";
import Groups from "../Groups/Groups";
import PremiereTable from "../PremiereTable/PremiereTable";

function Table(props) {
    const [ groups, setGroups ] = useState([]);

    useEffect(() => {
        const groups = fetch(`https://api.football-data.org/v2/competitions/${props.league}/standings`, {
            headers: { 'X-Auth-Token': 'adc2243d44374657aa9f4bc482556c5f' },
            
        })
            .then(response => response.json())
            .then(result => setGroups(result.standings))
            
    }, [])
   
    return (
        <div className="groups__wrap">
            {props.league === 'CL' ? 
                groups.filter(item => item.group.includes('GROUP'))
                    .map((item, index) => {
                        return(
                            <Groups key={index} 
                                groupTeams={item.table}
                                group={item.group}
                                />
                        )
                }) :
                groups.map( (item, index) => {
                    return (
                        <PremiereTable key={index} table={item.table}/>
                    ) 
                })
                
            }
        </div>
    )
}

export default Table;