import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const TableRow = (props) => {
    const {obj}=props;
    //const {name, company,age}= obj;
    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };

    const Delete = () => {
        axios.get('http://localhost:4000/persons/delete/'+ obj._id,config)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    return (
       
             <tr>
                <td>
                    {obj.name}
                </td>
                <td>
                    {obj.company}
                </td>
                <td>
                    {obj.age}
                </td>
                <td>
                    <Link to={"/edit/"+obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={Delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
       
    )
}

export default TableRow
