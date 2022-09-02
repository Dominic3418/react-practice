import './post.css';

const Post = () => {
    return ( 
        <div className='post'>
            <img className='postImg' src={require('./Images/iceland.jpg')} />
            <div className="postInfo">
                <div className="postCats">
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>
                    Blog Title
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
                <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla reprehenderit nihil omnis 
                   quam hic et totam corrupti, amet autem quaerat veritatis dolores ipsa eligendi commodi eaque. Saepe,
                   reprehenderit mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, neque molestiae in architecto 
                   aliquam repellat totam quia deleniti, accusamus facilis rem minima facere ipsa earum officia possimus?
                   Deserunt, in labore!</p>
            </div>
        </div>
     );
}
 
export default Post;