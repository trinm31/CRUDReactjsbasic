import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TableRow from './TableRow'

const IndexComponent = () => {

    const [person, setPerson] = useState([]);

    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };

    useEffect(() =>{
        axios.get('http://localhost:4000/persons',config)
            .then(response => {
                console.log(response.data);
                setPerson(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[]);

    return (
        <div>
            <h3 align="center">Persons List</h3>
            <table className="table table-striped" style={{marginTop: 20}}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Age</th>
                    <th colSpan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                    {person.map((object) => (
                        <TableRow obj={object}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IndexComponent;

