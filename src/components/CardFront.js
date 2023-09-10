

function CardFront({imagem}){

    
    return (
        <div className="bg-black rounded h-12 hover:cursor-pointer hover:scale-110 duration-300 w-56 h-80">
            <img alt="principal" className="h-80 w-56" src={imagem}></img>
        </div>
    )
}

export default CardFront