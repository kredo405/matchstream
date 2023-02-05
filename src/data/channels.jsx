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
import setanta1 from '../assets/26.png';
import setanta2 from '../assets/27.png';
import setantalus from '../assets/9.png';
import khlprime from '../assets/16.png';
import khl from '../assets/17.png';
import eurosport1 from '../assets/23.png';
import eurosport2 from '../assets/24.png';
import sport1 from '../assets/25.png';
import sport2 from '../assets/33.png';
import { channel } from "../store/store";

export const AllChannels = () => {
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
                    }))
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
                    }))
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
                    }))
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
                    }));
                    history('/match')
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
                        url: 'https://est1.varcdn.top/b5/tracks-v1a1/mono.m3u8'
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
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'А2',
                        url: 'https://sc.id-tv.kz/A2_36_37.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://tv.sb.by/upload/iblock/468/4686c7416f3c10424c7049e3b57a3b03.jpg' alt="А2" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'ТНТ 4',
                        url: 'https://sc.id-tv.kz:443/tnt4_34_35.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://tnt4.ru/images/share_logo_tnt4.jpg' alt="ТНТ 4" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'СТС',
                        url: 'https://sc.id-tv.kz/STS_34_35.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://cdn-st3.rtr-vesti.ru/vh/pictures/hd/323/068/2.png' alt="СТС" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Новое Радио ТВ',
                        url: 'http://hls-video01.cdnvideo.ru/video01/smil:video01.smil/playlist.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://online-red.com/images/tv/newradio.png' alt="Новое Радио ТВ" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'Factoria TV HD',
                        url: 'https://eu1.servers10.com:8081/8010/index.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://pic.rutubelist.ru/user/23/8e/238e983e23970fdd05426ea3831f4a8d.jpg' alt="Factoria TV HD" />
            </div>
            <div
                onClick={() => {
                    dispatch(channel({
                        name: 'THT Music',
                        url: 'https://sc.id-tv.kz:443/TNTMusic_34_35.m3u8'
                    }));
                    history('/match')
                }}
                className="w-36 h-36 lg:w-60 lg:h-60 p-3 hover:bg-[#3c659d59] bg-[#0f2d564d] m-3 flex justify-center items-center">
                <img className="" src='https://i.mycdn.me/image?id=881766233481&t=50&plc=WEB&tkn=*pFWMlIKElw6pis4O6JV3I57JDbA&fn=external_8' alt="THT Music" />
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
                <img className="" src='https://tuchkatv.org/uploads/posts/2015-04/1429098947_amedia-hit-hd.png' alt="Amedia Hit" />
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