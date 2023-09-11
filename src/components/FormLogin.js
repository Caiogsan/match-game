import {Link} from 'react-router-dom';
import { useEffect, useRef, useState } from "react"
import Input from './form/Input.js';
import Button from './form/Button.js';
import AfterLogin from '../pages/AfterLog.js';


function FormLogin(){
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [allData, setAllData] = useState([])
    const [teste, setTeste] = useState(false)
    
    useEffect(() => {
        fetch("http://localhost:5000/accounts", {
        method: "GET",
        headers: {
            'Content-type':'application/json'
        }
    }).then((resp) => resp.json().then((data) => {setAllData(data)})).catch((e) => console.log(e))}, [])

    const loginNames = allData.map((e) => e.name)
    const loginPasswords = allData.map((e) => e.password)
    
    const handleOnSubmit = (e) => {
        const texto = document.querySelector('#text')
        texto.innerHTML = 'Unfortunately git-hub pages does not support back-end so the login page is not working! Feel free to test on your local machine, it will work! The code is avaliable on github.'
        setName(username)
        e.preventDefault()
        if(username){
            if(password){
                let nomeVerif = false
                let passVerif = false
        const verificaNome = () => {
            for(let e in loginNames){
                if(username === loginNames[e]){
                    
                    nomeVerif = true
                }
            }
        }
        verificaNome()
        const verificaPass = () => {
            for(let e in loginPasswords){
                if(password === loginPasswords[e]){
                    passVerif = true
                } 
            }
        }
        verificaPass()

        if(nomeVerif && passVerif){setTeste(true)}
            } else {
                window.alert('Digite uma senha')
                setUsername('')
                setPassword('')
            }
        } else {
            window.alert('Digite um nome')
            setUsername('')
            setPassword('')
        }

        setUsername('')
        setPassword('')
            
    }
    
    
    function logout(){
        setTeste(false)
        window.location.reload();
    }
    return (
        <>
        {teste ? <AfterLogin deslogar={logout} nome={name}></AfterLogin> : <div className="h-[80%] flex flex-col justify-between py-10">
            <h1 className="text-center text-black  font-bold font-login text-6xl">LET'S PLAY SOME MATCHING GAMES!!</h1>
            <div className="flex flex-col w-full">
                <h2 id='text' className="text-center px-12 pb-12 font-login text-black text-4xl font-bold">Login to Your Account</h2>
                <form onSubmit={handleOnSubmit} className="flex flex-col pb-2 items-center">
                    <Input name={'teste'} handleOnChange={(e) => setUsername(e.target.value)} type={'text'} placeholder={'Username'} styles={'mb-8 bg-gradient-to-br from-gray-200 to-red-300 to-blue-400 w-[20%] rounded text-center'}></Input>
                    <Input name={'teste'} handleOnChange={(e) => setPassword(e.target.value)} type={'password'} placeholder={'Password'} styles={"mb-8 bg-gradient-to-br from-blue-300 to-red-300 to-gray-200 w-[20%] rounded text-center"}></Input>
                    <Button name={'teste'} type={'submit'} styles={"font-login text-2xl pb-2 font-bold hover:scale-110 duration-300"}></Button>
                </form>
                <Link to={'/register'} className='text-[10px] pb-2 w-[20%] m-auto'>Register?</Link>
                <Link to={'/home'} className='text-[10px] w-[20%] m-auto'>Log In as Guest?</Link>
            </div>
        </div>}
        </>
    )
}

export default FormLogin

