import service from "./team-service"

const {useEffect, useState} = React
const {Link, useHistory} = ReactRouterDOM

const TeamList = () => {
  const history = useHistory()
  const [teams, setTeams] = useState([])
    useEffect(() => {
      service.findAllTeams()
        .then((teams) => {
          setTeams(teams)
        })
    }, [])
  return (
    <div>
      <h2>Team List</h2>
      <button onClick={() => history.push("/teams/new")} className="btn btn-primary">
        Add Team
      </button>
      <ul class="list-group">
        {
          teams.map((team) => {
            return (
              <li class="list-group-item">
                <Link to={`/teams/${team.id}`}>
                  {team.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TeamList