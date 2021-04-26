const USER_URL = 'http://localhost:8080/api/users'

// retrieve all users from the server
async function findAllUsers() {
    console.log("reached finallusers");
    try {
        const response = await fetch(USER_URL);
        console.log("findAllUsers: " + response);
        return response.json();
    } catch(err) {
        console.log(err);
        console.log(err.message);
    }
}
// const findAllUsers = () => {
//     return fetch(USER_URL)
//         .then((response) => {
//             return response.json()
//         })
// }

// retrieve a single user by id
const findUserById = (userId) => {
    return fetch(`${USER_URL}/${userId}`)
        .then((response) => {
            return response.json()
        })
}

// update the name of a user
async function updateUserName(userId, newUserName) {
    const response = await fetch(`${USER_URL}/${userId}/name/${newUserName}`);

    return response.json();
}

// // update the name of a user
// const updateUserName = (userId, newUserName) => {
//     return fetch(`${TEAM_URL}/${userId}/name/${newUserName}`)
//         .then((response) => {
//           return response.json()
//         })
// }

// delete a user by id
async function deleteUser(userId) {
    console.log("userId service: " + userId);
    await fetch(`${USER_URL}/${userId}`, {
        method: "DELETE"
    })
}

// // delete a user by id
// const deleteUser = (userId) => {
//   fetch(`${TEAM_URL}/${userId}`, {
//     method: "DELETE"
//   })
// }

// create a new user
async function createUser(user) {
    console.log("user info: ")
    console.log(user.name)
    console.log(user.lastName)
    const response = await fetch(USER_URL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
    response.json();
}

// // create a new user
// const createUser = (user) => {
//   fetch(TEAM_URL, {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {'content-type': 'application/json'}
//   })
//   .then(response => response.json())
// }

// update a user by id
async function updateUser(userId, newUser) {
    const response = await fetch(`${USER_URL}/${userId}`, {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: {'content-type': 'application/json'}
    });
    response.json();
}

// const updateUser = (userId, newUser) => {
//   fetch(`${TEAM_URL}/${userId}`, {
//     method: "PUT",
//     body: JSON.stringify(user),
//     headers: {'content-type': 'application/json'}
//   })
//   .then(response => response.json())
// }

export default {
    findAllUsers,
    findUserById,
    updateUserName,
    deleteUser,
    createUser,
    updateUser
}