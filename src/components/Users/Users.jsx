import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const userData = useLoaderData();
    console.log(userData);
    return (
        <div>
            <h3>Users: {userData.length}</h3>
            <p>You are my fantastic users.</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    userData.map((user) =>{
                        // console.log(user);
                        return <User key={user.id} user={user}/>;
                    })
                }
            </div>
        </div>
    );
};

export default Users;