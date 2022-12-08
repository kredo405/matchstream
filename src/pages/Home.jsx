import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import matchTv from '../assets/m.png';
import match1 from '../assets/1m.png';
import match2 from '../assets/2m.png';
import match3 from '../assets/3m.png';
import matchPremier from '../assets/5m.png';
import matchGame from '../assets/18.png';
import matchArena from '../assets/19.png';
import matchCountry from '../assets/20.png';
import matchBoec from '../assets/21.png';
import belarus5 from '../assets/b5.png';
import megogo1 from '../assets/meg1.png';
import megogo2 from '../assets/meg2.png';
import megogo3 from '../assets/meg3.png';
import setanta from '../assets/8.png';
import setanta1 from '../assets/26.png';
import setanta2 from '../assets/27.png';
import setantalus from '../assets/9.png';
import khlprime from '../assets/16.png';
import khl from '../assets/17.png';
import eurosport1 from '../assets/23.png';
import eurosport2 from '../assets/24.png';
import sport1 from '../assets/25.png';
import sport2 from '../assets/33.png';
import qazsport from '../assets/32.png';
import visat from '../assets/34.png';
import qsport from '../assets/35.png';
import icon from '../assets/icon.png';


const Home = () => {
    const history = useNavigate();
    const dispatch = useDispatch()

    return (
        <>
            <div className="container">
                <nav className="flex justify-between items-center px-3 py-3">
                    <div className='flex items-center'>
                        <img src={icon} alt="icon" />
                        <span className="text-white font-mono text-2xl">MATCHSTREAM</span>
                    </div>
                </nav>
                <div>
                    <div className="flex justify-center mt-3">
                        <h1 className="text-white text-center font-sans text-3xl lg:text-5xl font-bold">Телеканалы</h1>
                    </div>
                    <div className="flex justify-center mt-10 flex-wrap">
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч ТВ' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                            <img className="w-full" src={matchTv} alt="матч ТВ" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч футбол 1' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={match1} alt="Матч футбол 1" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Setanta' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={setanta1} alt="Setanta" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч футбол 2' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={match2} alt="Матч футбол 2" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч футбол 3' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={match3} alt="Матч футбол 3" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч премьер' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={matchPremier} alt="Матч премьер" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч игра' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={matchGame} alt="Матч игра" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч арена' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={matchArena} alt="Матч арена" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч страна' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={matchCountry} alt="Матч страна" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Матч боец' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={matchBoec} alt="Матч боец" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Беларусь 5' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={belarus5} alt="Беларусь 5" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Setanta sport 1' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={setanta1} alt="Setanta sport 1" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Setanta sport 2' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={setanta2} alt="Setanta sport 2" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Setanta sport +' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={setantalus} alt="Setanta sport +" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'KHL prime' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={khlprime} alt="KHL prime" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'KHL' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={khl} alt="KHL" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Eurosport 1' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={eurosport1} alt="Eurosport 1" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Eurosport 2' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={eurosport2} alt="Eurosport 2" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Sport 1' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={sport1} alt="Sport 1" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Sport 2' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={sport2} alt="Sport 2" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Qazsport' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={qazsport} alt="Qazsport" />
                        </div>
                        <div
                            onClick={() => { dispatch({ type: 'MATCH', payload: 'Visat sport' }); history('/match') }}
                            className="w-36 lg:w-96 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                            <img className="w-full" src={visat} alt="Visat sport" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;