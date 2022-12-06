import mtv from '../assets/m.png'
import m1 from '../assets/1m.png'
import setanta from '../assets/8.png'
import megogo from '../assets/meg1.png'
import { useNavigate } from "react-router-dom";

const Velcome = () => {
    const navigate = useNavigate();

    const handlleClick = () => {
        navigate('/home')
    }

    return (
        <>

            <div className="container w-full h-screen">
                <nav className="flex justify-between items-center p-10">
                    <div>
                        <span className="text-white font-mono">MATCHSTREAM</span>
                    </div>
                    <div className="">
                        <button
                            onClick={handlleClick}
                            className="w-24 h-10 bg-[#F4C038] border-2 rounded-3xl border-amber-400 border-solid font-bold"
                        >
                            Войти
                        </button>
                    </div>
                </nav>
                <div className="flex justify-center pt-18">
                    <h1 className="text-white text-center font-serif text-2xl md:text-4xl lg:text-6xl font-bold">Бесплатные сортивные трансляции</h1>
                </div>
                <div className="flex justify-center pt-20">
                    <h2 className="text-white font-serif text-center text-lg md:text-2xl font-bold">Мы транслируем все топовые спортивные телеканалы</h2>
                </div>
                <div className="flex justify-center flex-wrap mt-10">
                    <div className='w-5/12 lg:w-[250px] p-3 bg-[#0f2d564d] m-3 flex justify-center items-center'>
                        <img
                            className="w-full lg:w-[150px]"
                            src={mtv}
                            alt="logo" />
                    </div>
                    <div className='w-5/12 lg:w-[250px] p-3 bg-[#0f2d564d] m-3 flex justify-center items-center'>
                        <img
                            className="w-full lg:w-[150px]"
                            src={setanta}
                            alt="logo" />
                    </div>
                    <div className='w-5/12 lg:w-[250px] p-3 bg-[#0f2d564d] m-3 flex justify-center items-center'>
                        <img
                            className="w-full lg:w-[150px]"
                            src={m1}
                            alt="logo" />
                    </div>
                    <div className='w-5/12 lg:w-[250px] p-3 bg-[#0f2d564d] m-3 flex justify-center items-center'>
                        <img
                            className="w-full lg:w-[150px]"
                            src={megogo}
                            alt="logo" />
                    </div>
                </div>
                <div className="flex justify-center pt-14">
                    <h2 className="text-white font-serif text-center text-xl lg:text-2xl font-bold">Не пропустите матчи любимых команд</h2>
                </div>
                <div className="flex justify-center mt-12">
                    <button
                        onClick={handlleClick}
                        className="w-40 h-10 md:w-60 md:h-16 bg-[#F4C038] border-2 rounded-3xl border-amber-400 border-solid text-2xl font-bold"
                    >
                        Войти
                    </button>
                </div>
            </div>

        </>
    )
}

export default Velcome;