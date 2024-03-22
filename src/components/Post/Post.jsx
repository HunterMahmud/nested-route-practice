import { Link } from "react-router-dom";



const Post = ({ post }) => {
  const { title, body, id } = post;
 
  return (
    <div
      className="flex flex-col bg-green-500 border-4 shadow-lg shadow-black rounded-lg"
      key={id}
    >
      <h3 className="font-bold">{title}</h3>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
    
    </div>
  );
};

export default Post;
