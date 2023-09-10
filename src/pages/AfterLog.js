import React, {useState} from "react"
import FormLogin from "../components/FormLogin"
import Header from "../components/Header"
import Level1 from "../components/Level1"
import Level2 from "../components/Level2"


function AfterLogin(){
    let [winOrPerdeu1, setwinOrPerdeu1] = useState('')
    let [winOrPerdeu2, setwinOrPerdeu2] = useState('')
    return (
        <div className="h-full flex flex-col bg-gradient-to-br  from-blue-600 to-red-300 to-gray-200">
            <Header level={winOrPerdeu1 ? 'Level 2' : 'Level 1'}></Header>
            {winOrPerdeu1 ? <Level2 winOrLost={setwinOrPerdeu2}></Level2> : <Level1 winOrLost={setwinOrPerdeu1}></Level1>}
        </div>
    )
}

export default AfterLogin

// LEMBRAR DE USAR O PROPTYPES PARA VALIDACAO DE DADOS CORRETOS. EX: STRING == STRING