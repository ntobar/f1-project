import TeamList from "./teams/team-list";
import TeamEditor from "./teams/team-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <h1>F1 Database</h1>
            <HashRouter>
                <Route path={["/teams", "/"]} exact={true}>
                    <TeamList/>
                </Route>

                <Route path="/teams/:teamId" exact={true}>
                    <TeamEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
