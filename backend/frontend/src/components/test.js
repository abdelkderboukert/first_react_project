import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [user, setUser] = useState({
        title: '',
        description: '', 
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/createtodo/', user)
            .then(res => {
                console.log(res.data);
                // handle successful response
            })
            .catch(err => {
                console.error(err.response.data);
                // handle error response
            });
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-row' >
                <label className='form-label'>
                    title:
                    <input className='form-input' type="text" value={user.title} onChange={handleChange} name='title' />
                </label>
                <label className='form-label'>
                    description:
                    <input className='form-input' type="text" value={user.description} onChange={handleChange} name='description' />
                </label>
                <button type="submit" className='btn btn-block'>Submit</button>
            </div>
        </form>
    );
}

export default Test;


