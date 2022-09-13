import React from 'react'


const  Results = (props) => {
    const {repos} = props

   let listRepo = repos.lenth !== 0 ? 
      repos.map((item) =>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.client }</td>
            <td>{item.priorrity }</td>
            <td>{item.type }</td>
            <td>{item.user.login }</td>
            <td>{item.state}</td>
        </tr>
        ): (
         <>no repos!</>
        );
  return (
    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Number</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description Body</th>
                    <th scope="col">Client</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Type</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {listRepo}
            </tbody>
        </table>
    </div>
  )
}

export default Results;