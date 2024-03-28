import React from "react";
import { useParams } from "react-router-dom";

export const New = () =>{
    const {userid} = useParams();
    return (
        <>
        <h2 className="flex justify-center text-2xl bg-orange-600 text-white">User Id = {userid}</h2>
        </>
    )
}