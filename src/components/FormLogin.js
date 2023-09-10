import {Link} from 'react-router-dom';
import { useState } from 'react';

function FormLogin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()
        
      
    
    };

    return (
        <div className="h-[80%] flex flex-col justify-between py-16">
            <h1 className="text-center text-black  font-bold font-login text-6xl">LET'S PLAY SOME MATCHING GAMES!!</h1>
            <div className="flex flex-col w-full">
                <h2 className="text-center pb-12 font-login text-black text-4xl font-bold">Login to Your Account</h2>
                <form className="flex flex-col pb-2 items-center" onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-10 bg-gradient-to-br from-gray-200 to-red-300 to-blue-400 w-[20%] rounded text-center" placeholder="Username"></input>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-10 bg-gradient-to-br from-blue-300 to-red-300 to-gray-200 w-[20%] rounded text-center" placeholder="Password"></input>
                    <button type="submit" className="font-login text-2xl font-bold hover:scale-110 duration-300">Sign In</button>
                    
                </form>
                <Link to={'/register'} className='text-[10px] pb-2 w-[20%] m-auto'>Register?</Link>
                <Link to={'/home'} className='text-[10px] w-[20%] m-auto'>Log In as Guest?</Link>
            </div>
        </div>
    )
}

export default FormLogin

