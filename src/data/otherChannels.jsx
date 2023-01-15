import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const OtherChannels = () => {
    const history = useNavigate();
    const dispatch = useDispatch()

    return (
        <>
            <div
                onClick={() => {
                    dispatch({
                        type: 'MATCH',
                        payload: {
                            name: 'А2',
                            url: 'https://sc.id-tv.kz/A2_36_37.m3u8'
                        },

                    });
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://tv.sb.by/upload/iblock/468/4686c7416f3c10424c7049e3b57a3b03.jpg' alt="А2" />
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: 'MATCH',
                        payload: {
                            name: 'ТНТ 4',
                            url: 'https://sc.id-tv.kz:443/tnt4_34_35.m3u8'
                        },

                    });
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://tnt4.ru/images/share_logo_tnt4.jpg' alt="ТНТ 4" />
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: 'MATCH',
                        payload: {
                            name: 'СТС',
                            url: 'https://sc.id-tv.kz/STS_34_35.m3u8'
                        },

                    });
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://cdn-st3.rtr-vesti.ru/vh/pictures/hd/323/068/2.png' alt="СТС" />
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: 'MATCH',
                        payload: {
                            name: 'Новое Радио ТВ',
                            url: 'http://hls-video01.cdnvideo.ru/video01/smil:video01.smil/playlist.m3u8'
                        },

                    });
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://online-red.com/images/tv/newradio.png' alt="Новое Радио ТВ" />
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: 'MATCH',
                        payload: {
                            name: 'Factoria TV HD',
                            url: 'https://eu1.servers10.com:8081/8010/index.m3u8'
                        },

                    });
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://pic.rutubelist.ru/user/23/8e/238e983e23970fdd05426ea3831f4a8d.jpg' alt="Factoria TV HD" />
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: 'MATCH',
                        payload: {
                            name: 'THT Music',
                            url: 'https://sc.id-tv.kz:443/TNTMusic_34_35.m3u8'
                        },

                    });
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://i.mycdn.me/image?id=881766233481&t=50&plc=WEB&tkn=*pFWMlIKElw6pis4O6JV3I57JDbA&fn=external_8' alt="THT Music" />
            </div>
        </>
    )
}