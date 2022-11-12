import axios from "axios";

const getUser =  (user_Id)=>{
    return new Promise(async(resolve, reject)=>{

        const user = await axios("https://jsonplaceholder.typicode.com/users/"+user_Id);
         
         resolve(user.data);
         //console.log(user.data)
        
   })
}
const getPost =  (user_Id)=>{
    return new Promise(async(resolve, reject)=>{

        const post =await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_Id);
         resolve(post.data);
         
   })
}


export default async  function getData(user_Id){

    var user= await getUser(user_Id);
    var post = await getPost(user_Id);

   
    

    const  userPost ={user,posts:post};
    // userPost.push(user)
    // userPost.push(post);
    
    return await  userPost;
 
}


