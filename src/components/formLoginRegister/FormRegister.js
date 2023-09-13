
import {Link} from 'react-router-dom';
import Input from '../form/Input';
import { useState } from 'react';

function FormRegister(){

    const [user, setUser] = useState({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState()
    const [email, setEmail] = useState('')
    function createUser(e){
        e.preventDefault()
       if(username && password && email){
        
        user.name = username
        user.password = password
        user.email = email

        fetch("http://localhost:5000/accounts", {
        method: "POST",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(user)
        }).then((resp) => resp.json()).then((data) => setUser(data))
        setUsername('')
        setEmail('')
        setPassword('')
        const bot = document.querySelector('#botao')
        bot.innerHTML = 'Cadastrado'
        bot.classList.add("disabled:opacity-75")
       } else {
        window.alert('Missing field!')
        
       }
    } 
    console.log(user)
    return (
        <div className="h-[80%] flex flex-col justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-center pb-12 font-login text-black text-4xl font-bold">Register an Account</h2>
                <form onSubmit={createUser} className="flex flex-col pb-2 items-center">
                    <Input name='register' handleOnChange={(e) => setUsername(e.target.value)} placeholder='Username' type='text' styles="mb-10 bg-gradient-to-br from-gray-200 to-red-300 to-blue-400 w-[20%] rounded text-center"></Input>
                    <Input name='register' handleOnChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' styles="mb-10 bg-gradient-to-br from-blue-300 to-red-300 to-gray-200 w-[20%] rounded text-center"></Input>
                    <Input name='register' handleOnChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' styles="mb-10 bg-gradient-to-br from-gray-200 to-red-300 to-blue-400 w-[20%] rounded text-center"></Input>
                    <button type="submit" id='botao' className="font-login text-2xl font-bold hover:scale-110 duration-300">Register</button>
                    
                </form>
                <Link to={'/match-game'} className='text-[10px] pb-2 w-[20%] m-auto'>Login?</Link>
            </div>
        </div>
    )
}

export default FormRegister

