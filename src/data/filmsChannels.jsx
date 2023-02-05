import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { channel } from "../store/store";

export const FilmsChannels = () => {
    const history = useNavigate();
    const dispatch = useDispatch()

    return (
        <>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Кинохит',
                        url: 'https://sc.id-tv.kz/Kinohit_hd.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='http://img.tv.mts.by/image/aHR0cDovL2ltZy5iNjEyLnRpZ2h0dmlkZW8uY29tL2NoYW5uZWxzL2tpbm9oaXRfbmV3LnBuZw==' alt="Кинохит" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Киномикс HD',
                        url: 'https://sc.id-tv.kz/Kinomix_hd.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://antifriztv.com/storage/images/channel_logos/kinomix-hd.png' alt="Киномикс" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Cinema',
                        url: 'https://sc.id-tv.kz:443/Cinema_36_37.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://lime-tv.ru/wp-content/uploads/2020/10/1531406308_cinema.jpg' alt="Cinema" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Кинопремьера',
                        url: 'https://sc.id-tv.kz/Kinopremiera_hd_34_35.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://images.iptv.rt.ru/sdp/mos/nclogo1533657057305.png' alt="Кинопремьера" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Киносемья',
                        url: 'https://sc.id-tv.kz/Kinosemiya_hd.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://images.iptv.rt.ru/sdp/mos/nclogo1533657004424.png' alt="Киносемья" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Киносвидание',
                        url: 'https://sc.id-tv.kz/Kinosvidanie_hd.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='http://img.tv.mts.by/image/aHR0cDovL2ltZy5iNjEyLnRpZ2h0dmlkZW8uY29tL2NoYW5uZWxzL2tpbm9zdmlkYW5pZS5wbmc=' alt="Киносвидание" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Мужское кино',
                        url: 'https://sc.id-tv.kz/Mujskoe_kino_hd.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://cdn.red-media.ru/600x350-2015-09-12(1).png' alt="Мужское кино" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Киносерия',
                        url: 'https://sc.id-tv.kz/Kinoseriya_hd.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://images.iptv.rt.ru/sdp/mos/nclogo1616575201326.png' alt="Киносерия" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'NST',
                        url: 'https://sc.id-tv.kz/NSTV_34_35.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://yt3.googleusercontent.com/ytc/AMLnZu_HyqeZex5Q_Ceqm0VC3W4o_m2qxE1LJwxJ7o7O=s900-c-k-c0x00ffffff-no-rj' alt="NST" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Kino Watch-СВЕЖАКИ',
                        url: 'https://edge-01.kino.watch/fresh/index.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://smotret.tv/images/svezhaki.jpg' alt="Kino Watch-СВЕЖАКИ" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Kino Watch-Хит',
                        url: 'https://edge-01.kino.watch/hit/index.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='data:image/png;base64,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' alt="Kino Watch-СВЕЖАКИ" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Amedia Hit',
                        url: 'https://sc.id-tv.kz/amedia_hit_hd_34_35.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='data:image/png;base64,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' alt="Amedia Hit" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Дом кино',
                        url: 'https://sc.id-tv.kz:443/DomKino_36_37.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://yt3.googleusercontent.com/ytc/AMLnZu_HdEsH5-HCQyjBctOnzkTevPnYea7rEeZAOb6f=s900-c-k-c0x00ffffff-no-rj' alt="Дом кино" />
            </div>
        </>
    )
}