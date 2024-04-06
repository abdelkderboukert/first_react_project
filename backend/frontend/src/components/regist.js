import React, { useState } from 'react';
import axios from 'axios';

const Regist = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/createtodo/', {
            title,
            description,
        })
            .then(res => {
                console.log(res.data);
                // handle successful response
            })
            .catch(err => {
                console.error(err.response.data);
                // handle error response
            });
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-row' ><label className='form-label'>
                title:
                <input className='form-input' type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
                <label className='form-label'>
                    description:
                    <input className='form-input' type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </label>
                <button type="submit" className='btn btn-block'>Submit</button></div>
        </form>
    );
}

export default Regist;