import Card from "../components/Card"
import imagem1 from "../img/7.png"
import imagem2 from "../img/2.png"
import imagem3 from "../img/3.png"
import imagem4 from "../img/4.png"
import imagem5 from "../img/5.png"

function Level1({winOrLost}){
    let listImg = [imagem1, imagem2, imagem3, imagem4, imagem5]
    let winOrLose = winOrLost
    return (
        <div className="flex bg-gradient-to-br  from-blue-600 to-red-300 to-gray-200 gap-8  flex-col py-6">
                <div className="flex justify-evenly">
                    <Card image={listImg[0]} winOrLoss={winOrLose} styles={'h-80'} id={0}></Card>
                    <Card image={listImg[1]} winOrLoss={winOrLose} styles={'h-80'} id={1}></Card>
                    <Card image={listImg[3]} winOrLoss={winOrLose} styles={'h-80'} id={3}></Card>
                    <Card image={listImg[1]} winOrLoss={winOrLose} styles={'h-80'} id={1}></Card>
                </div>
                <div className="flex justify-evenly">
                    <Card image={listImg[3]} winOrLoss={winOrLose} styles={'h-80'} id={3}></Card>
                    <Card image={listImg[2]} winOrLoss={winOrLose} styles={'h-80'} id={2}></Card>
                    <Card image={listImg[0]} winOrLoss={winOrLose} styles={'h-80'} id={0}></Card>
                    <Card image={listImg[2]} winOrLoss={winOrLose} styles={'h-80'} id={2}></Card>
                </div>
        </div>
    )
}

export default Level1