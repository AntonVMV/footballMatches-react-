import { 
    NavLink, 
    useRouteMatch, 
    Switch,
    Route,
} from "react-router-dom";
import "./style.css";
import League from "../leagues/League/League";

// const navLinks = ['champion league', 'premier league', 'bundesliga'];
const navLinks = [{
    name: 'champion league',
    id: 'CL',
    ru: 'лига чемпионов',
},
{
    name: 'premier league',
    id: 'PL',
    ru: 'премьер лига',
},
{
    name: 'bundesliga',
    id: 'BL1',
    ru: 'бундеслига',
}];

const Matches = () => {
    let match = useRouteMatch();

    return (
        <>
            <ul className="leagues__nav">
                {navLinks.map( (item, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={`${match.url}/${item.id}`}
                                className="leagues__nav_link"
                                activeClassName="leagues__nav_link_active">{item.ru}
                            </NavLink>
                        </li>
                    )
            })}
            </ul>

            <Switch>
                <Route path={`${match.path}/:league`}>
                    <League />
                </Route>
                <Route path={match.path}>
                    <h3 className="select">Please select a league.</h3>
                </Route>
            </Switch>
        </>
    )
}

export default Matches;