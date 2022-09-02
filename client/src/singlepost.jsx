import './singlepost.css';

const Singlepost = () => {
    return ( 
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img className='singlePostImg' src={require('./Images/iceland.jpg')} />
                <h1 className='singlePostTitle'>
                    A trip to Iceland
                    <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>    
                </h1>
                
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author: <b>Mario</b>
                    </span>
                    <span className='singlePostDate'>  2 weeks ago</span>
                    </div>
                    <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus veniam illo adipisci sed maiores voluptatum error unde dolor repudiandae aliquam beatae expedita temporibus amet autem, quasi sapiente at quas!
                    Nesciunt quis vero porro id rem quas, in, consectetur beatae, sunt nisi necessitatibus molestias magnam voluptas pariatur a itaque incidunt optio eum? Quod rem ut similique
                    architecto velit dignissimos blanditiis.
                    Non modi facilis cum quisquam quasi, 
                    veniam iste nihil magni! Earum consectetur, eius quibusdam, hic perspiciatis
                    assumenda consequuntur
                    tenetur et autem, neque numquam quae eos sapiente enim itaque incidunt dolorem.
                    Fugit adipisci non ducimus hic velit iusto deserunt, fugiat placeat laborum ipsa expedita debitis beatae earum culpa minima
                    voluptas aut ratione commodi. Hic labore iure ab maxime dignissimos veritatis incidunt?
                    Aliquam exercitationem quibusdam voluptas accusantium odit, repellendus in molestiae 
                    obcaecati minima alias perferendis reprehenderit veritatis cum maxime quia, beatae possimus! Eaque fuga tempore et ipsa! Hic quaerat numquam laudantium optio?
                    Mollitia, earum obcaecati architecto veniam quo placeat odit fugit unde ipsa. Id corporis nesciunt iste quasi numquam deserunt,
                    voluptates fugit libero aut quisquam aliquid culpa ducimus provident doloremque repudiandae eum.
                    Nesciunt earum ipsa quisquam commodi numquam vero tenetur nihil? Dicta facilis neque necessitatibus,
                     iusto ut magnam magni similique ipsam ipsum possimus sequi, labore hic earum! Non, iure. Voluptas, quod rerum.
                    Dolorem architecto mollitia possimus voluptates ipsa ad officiis consequuntur, sit eos natus voluptatem dicta, illo esse exercitationem molestias. Repellat commodi quia asperiores similique praesentium rem eos magnam iste fugit minus.
                    </p>
                
            </div>
        </div>
     );
}
 
export default Singlepost;