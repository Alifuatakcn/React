import React from 'react'
import countries from "./countries.json"

const Jsx6 = () => {
  return (
    <table border={1}>
         <thead>
            <tr>
                <th>No</th>
                <th>Country Name</th>
                <th>Country Code</th>
            </tr>
        </thead>
        <tbody>
            {countries.map( (country,index) => (

                <tr key={index}>
                <th>{index+1}</th>
                <th>{country.name}</th>
                <th>{country.code}</th>
            </tr>
            ))}
        </tbody> 
    </table>


  )
}

export default Jsx6