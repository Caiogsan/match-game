import FormLogin from "../components/FormLogin"


function BeforeLogin(){
    return (
        <div className="h-screen flex flex-col justify-center bg-gradient-to-br  from-blue-600 to-red-300 to-gray-200">
                <FormLogin></FormLogin>
        </div>
    )
}

export default BeforeLogin