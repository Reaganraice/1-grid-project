import React from 'react'

const  RepoDetails = ({details, loading}) => {
   if(loading){
       return <li>Loading...</li>
   }

    console.log(details);
    return <ul>
        {/* {details.map(item =>(
            <li key={item.id}>
                {item.description}
            </li>
        ))} */}
    </ul>;

    
}
        // <div>
        //     <div>
        //     <label>Description: </label>
        //     <span></span>
        //   </div>
        //   <div>
        //     <label>Priorty: </label>
        //     <span></span>
        //   </div>
        //   <div>
        //     <label>Client: </label>
        //     <span></span>
        //   </div>
        //   <div>
        //     <label>Type: </label>
        //     <span></span>
        //   </div>
        // </div>
export default RepoDetails;