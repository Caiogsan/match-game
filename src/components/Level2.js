import Card from "../components/Card"
import imagem1 from "../img/7.png"
import imagem2 from "../img/2.png"
import imagem3 from "../img/3.png"
import imagem4 from "../img/4.png"
import imagem5 from "../img/10.png"
import imagem6 from "../img/8.png"
import imagem7 from "../img/9.png"

function Level2({winOrLost}){
    let listImg = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7]

    return (
        <div className="flex bg-gradient-to-br  from-blue-600 to-red-300 to-gray-200 flex-col py-6">
                <div className="flex justify-evenly pb-8">
                    <Card image={listImg[2]} id={2} styles={'h-72'}></Card>
                    <Card image={listImg[0]} id={0} styles={'h-72'}></Card>
                    <Card image={listImg[4]} id={4} styles={'h-72'}></Card>
                    <Card image={listImg[5]} id={5} styles={'h-72'}></Card>
                </div>
                <div className="flex justify-evenly pb-8">
                    <Card image={listImg[3]} id={3} styles={'h-72'}></Card>
                    <Card image={listImg[2]} id={2} styles={'h-72'}></Card>
                    <Card image={listImg[4]} id={4} styles={'h-72'}></Card>
                    <Card image={listImg[1]} id={1} styles={'h-72'}></Card>
                </div>
                <div className="flex justify-evenly">
                    <Card image={listImg[1]} id={1} styles={'h-72'}></Card>
                    <Card image={listImg[5]} id={5} styles={'h-72'}></Card>
                    <Card image={listImg[0]} id={0} styles={'h-72'}></Card>
                    <Card image={listImg[3]} id={3} styles={'h-72'}></Card>
                </div>
        </div>
    )
}

export default Level2