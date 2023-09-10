import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function FormRegister(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        
      
    
    };
    return (
        <div className="h-[80%] flex flex-col justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-center pb-12 font-login text-black text-4xl font-bold">Register an Account</h2>
                <form className="flex flex-col pb-2 items-center" onSubmit={() => {console.log('clicou')}}>
                    <input type="text" value={username} className="mb-10 bg-gradient-to-br from-gray-200 to-red-300 to-blue-400 w-[20%] rounded text-center" placeholder="Username"></input>
                    <input type="email" value={email} className="mb-10 bg-gradient-to-br from-blue-300 to-red-300 to-gray-200 w-[20%] rounded text-center" placeholder="Email"></input>
                    <input type="password" value={password} className="mb-10 bg-gradient-to-br from-gray-200 to-red-300 to-blue-400 w-[20%] rounded text-center" placeholder="Password"></input>
                    <button type="submit" className="font-login text-2xl font-bold hover:scale-110 duration-300">Register</button>
                    
                </form>
                <Link to={'/'} className='text-[10px] pb-2 w-[20%] m-auto'>Login?</Link>
            </div>
        </div>
    )
}

export default FormRegister

