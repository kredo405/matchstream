import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy';

const Match = () => {
    const state = useSelector(state => state);
    const history = useNavigate();
    const [channel, setChannel] = useState('');

    useEffect(() => {
        if (state.channel === '') {
            history('/home');
        }
        if (state.channel === 'Матч ТВ') {
            setChannel('https://est02.varcdn.top/match/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч футбол 1') {
            setChannel('https://est02.varcdn.top/m1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta') {
            setChannel('https://est02.varcdn.top/setantasport/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч футбол 2') {
            setChannel('https://est02.varcdn.top/m2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч футбол 3') {
            setChannel('https://est02.varcdn.top/m3/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч премьер') {
            setChannel('https://est02.varcdn.top/mp/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч игра') {
            setChannel('https://est01.varcdn.top/matchigra/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч арена') {
            setChannel('https://est02.varcdn.top/marena/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч страна') {
            setChannel('https://est02.varcdn.top/matchstrana/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч боец') {
            setChannel('https://est02.varcdn.top/matchboec/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Беларусь 5') {
            setChannel('https://est02.varcdn.top/b5/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta sport 1') {
            setChannel('https://est02.varcdn.top/setanta1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta sport 2') {
            setChannel('https://est02.varcdn.top/setanta2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta sport +') {
            setChannel('https://est02.varcdn.top/setantaplusukraina/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'KHL prime') {
            setChannel('https://est02.varcdn.top/khlHD/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'KHL') {
            setChannel('https://est02.varcdn.top/khl/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Eurosport 1') {
            setChannel('https://est02.varcdn.top/Eurosport1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Eurosport 2') {
            setChannel('https://est02.varcdn.top/Eurosport2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Sport 1') {
            setChannel('https://est01.varcdn.top/sport1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Sport 2') {
            setChannel('https://est02.varcdn.top/sport2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Qazsport') {
            setChannel('https://est02.varcdn.top/KazSportKZ/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Visat sport') {
            setChannel('https://est02.varcdn.top/ViasatSport/tracks-v1a1/mono.m3u8');
        }
    }, [])

    return (
        <>
            <div className="container">
                <nav className="flex justify-between items-center px-10 py-3">
                    <div>
                        <span className="text-white font-mono">MATCHSTREAM</span>
                    </div>
                    <div>
                        <button
                            className="p-2 lg:p-3 bg-[#F4C038] text-sm lg:text-base border-2 rounded-lg lg:rounded-3xl border-amber-400 border-solid font-bold"
                        >
                            Поддержать проект
                        </button>
                    </div>
                </nav>
                <div className="mt-10">
                    <div className="flex justify-center">
                        <h1 className="text-white text-center font-sans text-5xl font-bold">{state.channel}</h1>
                    </div>
                    <div className="flex justify-center mt-10 px-2">
                        <ReactPlayer
                            url={channel}
                            playing={true}
                            controls={true}
                            volume={1}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Match;