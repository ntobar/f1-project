const TEAM_URL = 'http://localhost:8080/api/teams'

// retrieve all teams from the server
const findAllTeams = () => {
  return fetch(TEAM_URL)
    .then((response) => {
      return response.json()
    })
}

// retrieve a single team by id
const findTeamById = (teamId) => {
  return fetch(`${TEAM_URL}/${teamId}`)
      .then((response) => {
        return response.json()
      })
}

// update the name of a team
async function updateTeamName(teamId, newTeamName) {
    const response = await fetch(`${TEAM_URL}/${teamId}/name/${newTeamName}`);

            return response.json();
}

// // update the name of a team
// const updateTeamName = (teamId, newTeamName) => {
//     return fetch(`${TEAM_URL}/${teamId}/name/${newTeamName}`)
//         .then((response) => {
//           return response.json()
//         })
// }

// delete a team by id
async function deleteTeam(teamId) {
    await fetch(`${TEAM_URL}/${teamId}`, {
        method: "DELETE"
    })
}

// // delete a team by id
// const deleteTeam = (teamId) => {
//   fetch(`${TEAM_URL}/${teamId}`, {
//     method: "DELETE"
//   })
// }

// create a new team
async function createTeam(team) {
    const response = await fetch(TEAM_URL, {
        method: "POST",
        body: JSON.stringify(team),
        headers: {'content-type': 'application/json'}
    })
        response.json();
}

// // create a new team
// const createTeam = (team) => {
//   fetch(TEAM_URL, {
//     method: "POST",
//     body: JSON.stringify(team),
//     headers: {'content-type': 'application/json'}
//   })
//   .then(response => response.json())
// }

// update a team by id
async function updateTeam(teamId, newTeam) {
  const response = await fetch(`${TEAM_URL}/${teamId}`, {
    method: "PUT",
    body: JSON.stringify(newTeam),
    headers: {'content-type': 'application/json'}
  });
  response.json();
}

// const updateTeam = (teamId, newTeam) => {
//   fetch(`${TEAM_URL}/${teamId}`, {
//     method: "PUT",
//     body: JSON.stringify(team),
//     headers: {'content-type': 'application/json'}
//   })
//   .then(response => response.json())
// }

export default {
  findAllTeams,
  findTeamById,
  updateTeamName,
  deleteTeam,
  createTeam,
  updateTeam
}