import CardBack from "./CardBack"
import React, {useState} from "react"
import CardFront from "./CardFront"

let listaVerific = []
let acertou = []
let all = []
let level1 = true
let level2 = false
window.onload = () => {all = []; acertou = []; listaVerific = []; level1 = true; level2 = false}
function Card({image, id, winOrLoss, styles}){
    const [currentCard, setCurrentCard] = useState('back')

    function click(){
        console.log(acertou)
        all.push(id)
        if(level1){
            if(listaVerific.length >= 4){
                listaVerific = []
               
            }
        }
        if(level2){
            if(listaVerific.length >= 2){
                listaVerific = []
               
            }
        }    
        if(currentCard === 'back'){
            setCurrentCard('front')
        } 
        if(listaVerific.includes(id)){
            acertou.push(id)
        }
        listaVerific.push(id)
        
        
        
    }
    if(level1){
        if(acertou.length >= 4){
            window.alert('You won level 1!')
            all = []
            acertou = []
            listaVerific = []
            winOrLoss('true')
            level1 = false
            level2 = true
        }
    }
    
    if(level1){
        if(all.length >= 8){
            window.alert('You lost! :(')
            window.location.reload()
        }
    }
    if(level2){
        if(acertou.length >= 6){
            window.alert('You have won the game, congrats!!')
            all = []
            acertou = []
            listaVerific = []
            
        }
    }
    if(level2){
        if(all.length >= 12){
        window.alert('Voce perdeu! :(')
        window.location.reload()
       }
    }

    return (
        <div id={`${id}`} className={`rounded hover:cursor-pointer hover:scale-110 duration-300 ${styles} w-56`}>
            {
                currentCard === 'back' ? <CardBack clicou={click} /> : <CardFront imagem={image}/>
            } 
        </div>
    )
}

export default Card