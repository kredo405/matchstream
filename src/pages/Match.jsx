import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from 'react-player/lazy';
import icon from '../assets/icon.png'

const Match = () => {
    const { channel } = useSelector(state => state);
    const history = useNavigate();

    useEffect(() => {
        if (channel === '') {
            history('/home');
        }
    }, [])

    return (
        <>
            <div className="container">
                <nav className="flex justify-between items-center px-3 py-3">
                    <div className='flex items-center'>
                        <img src={icon} alt="icon" />
                        <span className="text-white font-mono text-2xl">LIVESTREAM</span>
                    </div>
                </nav>
                <div className="mt-10">
                    <div className="flex justify-center">
                        <h1 className="text-white text-center font-sans text-5xl font-bold">{channel.name}</h1>
                    </div>
                    <div className="flex justify-center mt-10 px-2">
                        <ReactPlayer
                            url={channel.url}
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