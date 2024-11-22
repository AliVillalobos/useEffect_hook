import React from "react";
import UseFetch from "./UseFetch";
import './FetchData.css'

const FetchYogaData = () => {
    
    const [data2]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
     console.log(data2);


return(
    <>
        <ol className="yoga_data_main">
         <h1 className="yoga_heading">Yoga</h1>
            {data2 && data2.map((e)=>(
            <>
                <li className="list_data">
                    <h2> {e.nombre} </h2>
                    <p><strong>Benefits:</strong> {e.benefits} </p>
                    <p><strong>Time:</strong> {e.time_duration} </p>
                </li>
            </>
            ))}
        </ol>
    </>
 )
}
export default FetchYogaData 