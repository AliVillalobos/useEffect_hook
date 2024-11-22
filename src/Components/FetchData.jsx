import React from 'react'
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchData = () => {
     const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
     console.log(data);


  return (
    <>
     <ol className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {data && data.map((e)=>(
            <>
            <li className='list_data'>
                <h3>{e.name}</h3>
                {/*  
                <div className='data_imagen'>
                <img src={e.image} alt="Imagen referente" />
                </div>
                */}
                <p><strong>Importance:</strong> {e.importance} </p>
                <p><strong>Benefits:</strong> {e.benefits} </p>
                <p><strong>Time:</strong> {e.best_time_to_intake} </p>

            </li>
            </>
        ))}
     </ol>
    </>
  )
}

export default FetchData