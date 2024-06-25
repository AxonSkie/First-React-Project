import { useState } from 'react';




const Home = () => {
   const [blogs, setName] = useState([

      { title : "My Website" ,body: "IM the best programmer in the world" , author: "axon", id:1},
      { title : "Welcome to my Website" ,body: "IM the best programmer in the world" , author: "frost", id:2},
      { title : "Enjoy!" ,body: "IM the best programmer in the world" , author: "jacksie", id:3},





  ]);

  

  
   
    return (

       

         <div className="Home">
           {blogs.map((blog)=>(

                      <div className="preview-list" key={blog.id}>

                               <h2> {blog.title}</h2>
                               <p> Written by {blog.author}</p>

                               



                      </div>




           ))}
            
         </div>


      );
}
 
export default Home;