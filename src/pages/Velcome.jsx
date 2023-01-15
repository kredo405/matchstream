import mtv from '../assets/m.png';
import m1 from '../assets/1m.png';
import setanta from '../assets/8.png';
import megogo from '../assets/meg1.png';
import icon from '../assets/icon.png';
import { useNavigate } from "react-router-dom";

const Velcome = () => {
    const navigate = useNavigate();

    const handlleClick = () => {
        navigate('/home')
    }

    return (
        <>
            <div className="container pb-10 w-full h-screen">
                <nav className="flex justify-between items-center px-3 p-10">
                    <div className='flex items-center'>
                        <img src={icon} alt="icon" />
                        <span className="text-white font-mono text-2xl">MATCHSTREAM</span>
                    </div>
                    <div className="">
                        <button
                            onClick={handlleClick}
                            className="w-24 h-10 hover:bg-[#dea619] bg-[#F4C038] border-2 rounded-3xl border-amber-400 border-solid font-bold"
                        >
                            Смотреть
                        </button>
                    </div>
                </nav>
                <div className="flex justify-center pt-18">
                    <h1 className="text-white text-center font-serif text-2xl md:text-5xl font-bold">Бесплатные сортивные трансляции</h1>
                </div>
                <div className="flex justify-center pt-20 px-2">
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
                <div className="flex justify-center pt-10">
                    <h2 className="text-white font-serif text-center text-xl lg:text-2xl font-bold">Не пропустите матчи любимых команд</h2>
                </div>
                <div className="flex justify-center mt-5">
                    <button
                        onClick={handlleClick}
                        className="w-40 h-10 md:w-60 md:h-16 hover:bg-[#dea619] bg-[#F4C038] border-2 rounded-3xl border-amber-400 border-solid text-xl md:text-2xl font-bold"
                    >
                        Смотреть
                    </button>
                </div>
                <footer className='w-full h-5'>
                </footer>
            </div>

        </>
    )
}

export default Velcome;