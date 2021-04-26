import service from "./user-service"

const {useEffect, useState} = React
const {Link, useHistory} = ReactRouterDOM

const UserList = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        service.findAllUsers()
            .then((users) => {
                console.log("in find all users userlist");
                console.log("users[0]: " + users[0].firstName);
                setUsers(users);
            })
    }, [])
    return (
        <div>
            <h2>User List</h2>
            <button onClick={() => history.push("/users/new")} className="btn btn-primary">
                Add User
            </button>
            <ul class="list-group">
                {
                    users.map((user) => {
                        return (
                            <li class="list-group-item">
                                <Link to={`/users/${user.id}`}>
                                    {user.firstName}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default UserList