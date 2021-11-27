import { 
    NavLink, 
    useRouteMatch, 
    Switch,
    Route,
    Redirect, 
    useParams
} from "react-router-dom";
import Table from "../Table/Table";
import Calendar from "../Calendar/Calendar";
import "./style.css"

function League() {
    let { league } = useParams();
    let { path, url } = useRouteMatch();

    return (
        <>
            <ul className="league__nav">
                <li>
                    <NavLink to={`${url}/table`} className="league__nav_link" activeClassName="league__nav_link_active">Таблица</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/calendar`} className="league__nav_link" activeClassName="league__nav_link_active">Календарь</NavLink>
                </li>
            </ul>

            <Switch>
                <Redirect exact from={path} to={`${path}/table`} />
                <Route path={`${path}/table`}><Table league={league} /></Route>       
                <Route path={`${path}/calendar`}><Calendar league={league}/></Route>
            </Switch>
        </>
    )
}

export default League;