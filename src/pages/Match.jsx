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
                        <h1 className="text-white text-center font-sans text-5xl font-bold">{state.channel.name}</h1>
                    </div>
                    <div className="flex justify-center mt-10 px-2">
                        <ReactPlayer
                            url={state.channel.url}
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