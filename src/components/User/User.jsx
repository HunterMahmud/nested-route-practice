
const User = ({user}) => {
    // console.log(user);
    return (
        <div className="bg-green-500 border-4 shadow-lg shadow-black rounded-lg">
            <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
           <p>Website: {user.website}</p>
           
        </div>
    );
};

export default User;