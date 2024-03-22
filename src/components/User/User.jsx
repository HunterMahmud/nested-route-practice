
import { Link } from 'react-router-dom';
const User = ({user}) => {
    // console.log(user);
    return (
        <div className="flex flex-col bg-green-500 border-4 shadow-lg shadow-black rounded-lg">
            <h1>{user.name}</h1>
         <div className="flex-grow">
         <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
           <p>Website: {user.website}</p>
         </div>
           <Link to={`/users/${user.id}`}>Show Details</Link>
           <Link to={`/users/${user.id}`}><button>Show Details</button></Link>
           
        </div>
    );
};

export default User;