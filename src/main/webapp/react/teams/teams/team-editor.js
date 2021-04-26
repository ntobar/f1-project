import service from "./team-service"

const {useEffect, useState} = React
const {useParams, useHistory} = window.ReactRouterDOM

const TeamEditor = () => {
  const history = useHistory()
  const [team, setTeam] = useState([])
  const {teamId} = useParams()
  useEffect(() => {
    if(teamId !== "new") {
      findTeamById(teamId)
    }
  }, []);

  const findTeamById = (teamId) =>
    service.findTeamById(teamId)
    .then(team => setTeam(team))

  const createTeam = (team) => {
     service.createTeam(team)
          .then(() => history.push("/"))
  }


  const updateTeam = (teamId, newTeam) => {
    service.updateTeam(teamId, newTeam)
      .then(() => history.push("/"))
  }

  //
  // async function deleteTeam(teamId) {
  //     const response = await service.deleteTeam(teamId);
  //     history.push("/")
  //
  //   }


  const deleteTeam = (teamId) => {
      service.deleteTeam(teamId)
      .then(() => history.push("/"));

  }

  return (
    <div>
      <h2>Team Editor {teamId}</h2>
      <label>ID</label>
      <input value={team.id} className="form-control"/>
      <label>Name</label>
      <input
        onChange={(e) =>
          setTeam(team => ({...team, name: e.target.value}))
        }
        value={team.name} className="form-control"/>

      <label>Abbreviation</label>
      <input onChange={(e) =>
        setTeam(team =>
          ({...team, abbreviation: e.target.value}))}
        value={team.abbreviation} className="form-control"/>

      <label>Founding Date</label>
      <input type="date" value={team.foundingDate} className="form-control"/>

      <label>Headquarters</label>
      <input onChange={(e) =>
        setTeam(team =>
          ({...team, headquarters: e.target.value}))}
        value={team.headquarters} className="form-control"/>

      <button onClick={() => deleteTeam(team.id)} className="btn btn-danger">Delete</button>
      <button onClick={() => updateTeam(team.id, team)} className="btn btn-primary">Save</button>
      <button onClick={() => createTeam(team)} className="btn btn-success">Create</button>
      <button onClick={() => { history.goBack() }} className="btn btn-warning">Cancel</button>
    </div>
  )
}

export default TeamEditor;