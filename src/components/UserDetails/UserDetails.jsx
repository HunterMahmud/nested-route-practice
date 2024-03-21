import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    return (
        <div className="bg-green-600 rounded-xl p-5">
            <h1>this is user details</h1>
            <p>{userDetails.name}</p>
            <p>UserName: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
            <p>Phone: {userDetails.phone}</p>
            <p>Address: {`${userDetails.address.street} ${userDetails.address.suite} ${userDetails.address.city}`}</p>
            <p>Website: {userDetails.website}</p>
            <p>Company: {`${userDetails.company.name} ${userDetails.company.chatchPhrase} ${userDetails.company.bs}`}</p>
        </div>
    );
};

export default UserDetails;