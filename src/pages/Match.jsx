import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy';
import icon from '../assets/icon.png'

const Match = () => {
    const state = useSelector(state => state);
    const history = useNavigate();
    const [channel, setChannel] = useState('');

    useEffect(() => {
        if (state.channel === '') {
            history('/home');
        }
        if (state.channel === 'Матч ТВ') {
            setChannel('https://est3.varcdn.top/match/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч футбол 1') {
            setChannel('https://est7.varcdn.top/m1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta') {
            setChannel('https://est7.varcdn.top/setantasport/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч футбол 2') {
            setChannel('https://est7.varcdn.top/m2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч футбол 3') {
            setChannel('https://est3.varcdn.top/m3/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч премьер') {
            setChannel('https://est7.varcdn.top/mp/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч игра') {
            setChannel('https://est7.varcdn.top/matchigra/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч арена') {
            setChannel('https://est1.varcdn.top/marena/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч страна') {
            setChannel('https://est1.varcdn.top/matchstrana/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Матч боец') {
            setChannel('https://est1.varcdn.top/matchboec/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Беларусь 5') {
            setChannel('https://est1.varcdn.top/b5/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta sport 1') {
            setChannel('https://est1.varcdn.top/setanta1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta sport 2') {
            setChannel('https://est7.varcdn.top/setanta2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Setanta sport +') {
            setChannel('https://est1.varcdn.top/setantaplusukraina/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'KHL prime') {
            setChannel('https://est3.varcdn.top/khlHD/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'KHL') {
            setChannel('https://est1.varcdn.top/khl/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Eurosport 1') {
            setChannel('https://est7.varcdn.top/Eurosport1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Eurosport 2') {
            setChannel('https://est3.varcdn.top/Eurosport2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Sport 1') {
            setChannel('https://est1.varcdn.top/sport1/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Sport 2') {
            setChannel('https://est3.varcdn.top/sport2/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'OKKO спорт') {
            setChannel('https://est1.varcdn.top/1tv/tracks-v1a1/mono.m3u8');
        }
        if (state.channel === 'Visat sport') {
            setChannel('https://hye1eaipby4w.takedwn.ws/07_29_21/07/29/20/ERKACFE3/LEYXGIR4.mp4/index-v1-a1.m3u8');
        }
    }, [])

    return (
        <>
            <div className="container">
                <nav className="flex justify-between items-center px-3 py-3">
                    <div className='flex items-center'>
                        <img src={icon} alt="icon" />
                        <span className="text-white font-mono text-2xl">MATCHSTREAM</span>
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