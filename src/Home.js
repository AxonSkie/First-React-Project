import { useState } from 'react';
import Bloglist from '../Bloglist';




const Home = () => {
   const [blogs, setName] = useState([

      { title : "My Website" ,body: "IM the best programmer in the world" , author: "axon", id:1},
      { title : "Welcome to my Website" ,body: "IM the best programmer in the world" , author: "frost", id:2},
      { title : "Enjoy!" ,body: "IM the best programmer in the world" , author: "jacksie", id:3},





  ]);

  

  
   
    return (

        

         <div className="Home">
         <Bloglist blogs={blogs}/>
         </div>


      );
}
 
export default Home;