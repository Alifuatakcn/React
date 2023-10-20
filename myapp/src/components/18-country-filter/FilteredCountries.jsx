import React from 'react'
import countries from "../../assets/data/countries.json"
import {Table} from "react-bootstrap"


const FilteredCountries = () => {
  return (
    <div>
<Table striped bordered hover variant='dark'

style={{textAlign:"center",cursor:"pointer",width:"50rem",margin:"3rem auto"}}
>
    <thead>
        <tr>
            <th>Ulke No</th>
            <th>Ulke Adi</th>
            <th>Ulke Kodu</th>
        </tr>
    </thead>
<tbody>
    {
         countries.map((item,index)=>(

            <tr key={item.code}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.code}</td>
              


            </tr>
         ))

    }

</tbody>

</Table>

    </div>
  )
}

export default FilteredCountries