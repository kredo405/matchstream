import { useState } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CameraIcon from '@mui/icons-material/Camera';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import CatchingPokemonOutlinedIcon from '@mui/icons-material/CatchingPokemonOutlined';
import icon from '../assets/icon.png';
import { AllChannels } from "../data/channels";
import { SportChannels } from "../data/sportChannels";
import { FilmsChannels } from "../data/filmsChannels";
import { OtherChannels } from "../data/otherChannels";


const Home = () => {
    const [value, setValue] = useState(0);
    const [Channels, setChannels] = useState(<AllChannels />)

    function handlleClickAll() {
        setChannels(<AllChannels />)
    }
    function handlleClickSports() {
        setChannels(<SportChannels />)
    }
    function handlleClickFilms() {
        setChannels(<FilmsChannels />)
    }
    function handlleClickOther() {
        setChannels(<OtherChannels />)
    }


    return (
        <>
            <div className="container">
                <nav className="flex justify-between items-center px-3 py-3">
                    <div className='flex items-center'>
                        <img src={icon} alt="icon" />
                        <span className="text-white font-mono text-2xl">LIVESTREAM</span>
                    </div>
                </nav>
                <div>
                    <div className="flex justify-center mt-3">
                        <h1 className="text-white text-center font-sans text-3xl lg:text-5xl font-bold">Телеканалы</h1>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Box sx={{ width: 500 }}>
                            <BottomNavigation
                                sx={{ backgroundColor: '#06635d00' }}
                                showLabels
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            >
                                <BottomNavigationAction onClick={handlleClickAll} label="Все" sx={{ color: 'white' }} icon={<CameraIcon />} />
                                <BottomNavigationAction onClick={handlleClickSports} label="Спортивные" sx={{ color: 'white' }} icon={<SportsSoccerIcon />} />
                                <BottomNavigationAction onClick={handlleClickFilms} label="Фильмы" sx={{ color: 'white' }} icon={<EmergencyRecordingIcon />} />
                                <BottomNavigationAction onClick={handlleClickOther} label="Разные" sx={{ color: 'white' }} icon={<CatchingPokemonOutlinedIcon />} />

                            </BottomNavigation>
                        </Box>
                    </div>
                    <div className="flex justify-center mt-10 flex-wrap">
                        {Channels}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;