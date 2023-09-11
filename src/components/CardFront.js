function CardFront({imagem}){
    return (
        <div className="bg-black rounded hover:cursor-pointer hover:scale-110 duration-300 w-56 h-full">
            <img alt="principal" className="w-56 h-full" src={imagem}></img>
        </div>
    )
}

export default CardFront