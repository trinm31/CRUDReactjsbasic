import React, { useState, useEffect } from "react";
import axios from "axios";

const initial = {
    name: '',
    company: '',
    age: ''
}

const CreateComponent = () => {

    const [values,setValues] = useState(initial);

    useEffect(()=>{console.log(values);},[values]);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const submit = e => {
        e.preventDefault();
        //console.log(values);
        axios.post('http://localhost:4000/persons/add', values,{
            headers: {
                'Access-Control-Allow-Origin': '*', 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(res => console.log(res.data));

        setValues(initial);
        
    }

    return (
        <div style={{marginTop:10}}>
            <h3>Add New Business</h3>
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

export default CreateComponent
