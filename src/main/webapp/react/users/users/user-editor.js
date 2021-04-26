import service from "./user-service"

const {useEffect, useState} = React
const {useParams, useHistory} = ReactRouterDOM

const UserEditor = () => {
    const history = useHistory()
    const [user, setUser] = useState([])
    const {userId} = useParams()
    useEffect(() => {
        if(userId !== "new") {
            findUserById(userId)
        }
    }, []);

    const findUserById = (userId) =>
        service.findUserById(userId)
            .then(user => setUser(user))

    const createUser = (user) => {
        service.createUser(user)
            .then(() => history.push("/"))
    }


    const updateUser = (userId, newUser) => {
        service.updateUser(userId, newUser)
            .then(() => history.push("/"))
    }

    //
    // async function deleteuser(userId) {
    //     const response = await service.deleteuser(userId);
    //     history.push("/")
    //
    //   }


    const deleteUser = (userId) => {
        console.log("userid in editor: " + userId);
        service.deleteUser(userId)
            .then(() => history.push("/"));

    }

    return (
        <div>
            <h2>User Editor {userId}</h2>
            <label>ID</label>
            <input value={user.id} className="form-control"/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                     setUser(user => ({...user, firstName: e.target.value}))

                }
                value={user.firstName} className="form-control"/>

            <label>Last Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, lastName: e.target.value}))}
                   value={user.lastName} className="form-control"/>

            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user => ({...user, username: e.target.value}))

                }
                value={user.username} className="form-control"/>

            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user => ({...user, password: e.target.value}))

                }
                value={user.password} className="form-control"/>


            <label>Email</label>
            <input
                onChange={(e) =>
                    setUser(user => ({...user, email: e.target.value}))

                }
                value={user.email} className="form-control"/>

            <label>Date of Birth</label>
            <input type="date" value={user.dateOfBirth} className="form-control"/>

            <label>Headquarters</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, headquarters: e.target.value}))}
                   value={user.headquarters} className="form-control"/>

            <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
            {/*<button onClick={() => console.log("onclick userid: " + user.id)} className="btn btn-danger">Delete</button>*/}
            <button onClick={() => updateUser(user.id, user)} className="btn btn-primary">Save</button>
            <button onClick={() => createUser(user)} className="btn btn-success">Create</button>
            <button onClick={() => { history.goBack() }} className="btn btn-warning">Cancel</button>
        </div>
    )
}

export default UserEditor;