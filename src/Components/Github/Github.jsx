import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData();
  // const [data,setdata] = useState([]);

  //    useEffect(()=>{
  //     fetch('https://api.github.com/users/shivamkanchole').then((res)=>res.json()).then((data)=>{
  //         console.log(data);
  //         setdata(data);
  //     })
  //    },[])
  return (
    <>
      <div className="flex justify-center">
        <img src={data.avatar_url} alt="git img" width={300} />
        <div className="flex flex-col bg-slate-100 p-3">
          <h1>Username : {data.name}</h1>
          <h1>UserID : {data.id}</h1>
          <h1>Repositorys : {data.public_repos}</h1>
          <h1 className="text-xl"> Followers : {data.followers}</h1>
          <h1>Email : {data.email ? data.email : "Email Not Found"}</h1>
        </div>
      </div>
    </>
  );
};

export const gitinfoloader = async() =>{
    const response = await fetch(`https://api.github.com/users/shivamkanchole`);

    return response.json();
}

