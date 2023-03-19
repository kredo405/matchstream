import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { channel } from "../store/store";
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
import setanta1 from '../assets/26.png';
import setanta2 from '../assets/27.png';
import setantalus from '../assets/9.png';
import khlprime from '../assets/16.png';
import khl from '../assets/17.png';
import eurosport1 from '../assets/23.png';
import eurosport2 from '../assets/24.png';
import sport1 from '../assets/25.png';
import sport2 from '../assets/33.png';

export const SportChannels = () => {
    const history = useNavigate();
    const dispatch = useDispatch()

    return (
        <>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч ТВ',
                        url: 'https://est3.varcdn.top/match/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="w-full" src={matchTv} alt="матч ТВ" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч футбол 1',
                        url: 'https://est7.varcdn.top/m1/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={match1} alt="Матч футбол 1" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Setanta',
                        url: 'https://est7.varcdn.top/setantasport/tracks-v1a1/mono.m3u8'
                    })); history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={setanta1} alt="Setanta" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч футбол 2',
                        url: 'https://est7.varcdn.top/m2/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={match2} alt="Матч футбол 2" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч футбол 3',
                        url: 'https://est3.varcdn.top/m3/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={match3} alt="Матч футбол 3" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'OKKO спорт',
                        url: 'https://est1.varcdn.top/1tv/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src='https://varplatform.ru/logo/okko.png' alt="OKKO спорт" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч премьер',
                        url: 'https://est7.varcdn.top/mp/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={matchPremier} alt="Матч премьер" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч игра',
                        url: 'https://est7.varcdn.top/matchigra/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={matchGame} alt="Матч игра" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч арена',
                        url: 'https://est1.varcdn.top/marena/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={matchArena} alt="Матч арена" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч страна',
                        url: 'https://est1.varcdn.top/matchstrana/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={matchCountry} alt="Матч страна" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Матч боец',
                        url: 'https://est1.varcdn.top/matchboec/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={matchBoec} alt="Матч боец" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Беларусь 5',
                        url: 'https://aws03.varcdn.top/b5/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={belarus5} alt="Беларусь 5" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Setanta sport 1',
                        url: 'https://est1.varcdn.top/setanta1/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={setanta1} alt="Setanta sport 1" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Setanta sport 2',
                        url: 'https://est7.varcdn.top/setanta2/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={setanta2} alt="Setanta sport 2" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Setanta sport +',
                        url: 'https://est1.varcdn.top/setantaplusukraina/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={setantalus} alt="Setanta sport +" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'KHL prime',
                        url: 'https://est3.varcdn.top/khlHD/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={khlprime} alt="KHL prime" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'KHL',
                        url: 'https://est1.varcdn.top/khl/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={khl} alt="KHL" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Eurosport 1',
                        url: 'https://est7.varcdn.top/Eurosport1/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={eurosport1} alt="Eurosport 1" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Eurosport 2',
                        url: 'https://est3.varcdn.top/Eurosport2/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={eurosport2} alt="Eurosport 2" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Sport 1',
                        url: 'https://est1.varcdn.top/sport1/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={sport1} alt="Sport 1" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Sport 2',
                        url: 'https://est3.varcdn.top/sport2/tracks-v1a1/mono.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3  flex justify-center items-center">
                <img className="w-full" src={sport2} alt="Sport 2" />
            </div>
        </>
    )
}