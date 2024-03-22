
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';



const Posts = () => {
    const postData = useLoaderData();
    return (
        <div>
            <h2>Posts: {postData.length}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                postData.map((post) => <Post key={post.id} post={post}/>)
            }
            </div>
        </div>
    );
};

export default Posts;