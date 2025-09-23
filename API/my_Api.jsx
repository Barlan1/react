import {useState,useEffect} from 'react';
import {createRoot} from 'react-dom/client';
function App(){
    const  [posts,setPosts]= useState([]);


    const myData=[
        {id:1,title:"Post one Vikas"},
        {id:2,title:"Post two Savik"},
        {id:3,title:"Post three Iytek"},
        {id:4,title:"Post four Manoj"},
        {id:5,title:"Post five prakas"}
    ];

    useEffect(()=>{
      const myfetch= new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(myData),500);
      });

      myfetch
      .then(data=>setPosts(data))
      .catch(err=>console.log(err));
    },[]);

  return(<div>
    <h1>This is mydata</h1>
    {
        posts.map(post=><p key={post.id}>{post.title}</p>)
    }
  </div>)
}

createRoot(document.getElementById("root")).render(<App />);
