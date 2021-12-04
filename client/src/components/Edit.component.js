import React, { useState, useEffect } from "react";
import axios from "axios";

const initial = {
    name: '',
    company: '',
    age: ''
}

const EditComponent = (props) => {

    const [values,setValues] = useState(initial);

    useEffect(()=>{
        axios.get('http://localhost:4000/persons/edit/'+ props.match.params.id)
            .then(response => {
                setValues(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        
        console.log(values);
    },[]);

    useEffect(()=>{
        console.log(values);
    },[values]);

    const handleInputChange = e => {
        const { name, value } = e.target
        console.log(e);
        setValues({
            ...values,
            [name]: value
        })
    }

    const submit = e => {
        e.preventDefault();
        
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        axios.post('http://localhost:4000/persons/update/'+ props.match.params.id, values,config)
            .then(res => console.log(res.data));

        setValues(initial);
    }

    return (
        <div style={{marginTop:10}}>
            <h3>Update Business</h3>
            <form onSubmit={submit} >
                <div className="form-group">
                    <label>Add Person Name:  </label>
                    <input name="name" onChange={handleInputChange} value={values.name} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Business Name: </label>
                    <input name="company" onChange={handleInputChange} value={values.company} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add GST Number: </label>
                    <input name="age" onChange={handleInputChange} value={values.age} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default EditComponent
