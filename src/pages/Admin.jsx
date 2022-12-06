import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Empty, Spin } from 'antd';
import axios from 'axios'

const leagues = [{ league: 'Высшая лига', country: 'Belarus' }, { league: 'Премьер-Лига', country: 'England' }, { league: 'Лига Чемпионов', country: '' },
            { league: 'Лига конференций', country: '' }, { league: 'Премьер-Лига', country: 'Russian Federation' }, { league: 'Серия А', country: 'Italy' },
            { league: 'Примера', country: 'Spain' }, { league: 'Лига Европы', country: '' }, { league: 'Бундеслига', country: 'Germany' },
            { league: 'Лига наций УЕФА', country: '' }, { league: 'Лига 1', country: 'France' }, { league: 'Чемпионшип', country: 'England' },
            { league: 'Эредивизи', country: 'Netherlands' }, { league: 'Примейра Лига', country: 'Portugal' },
            { league: 'Чемпионат мира', country: '' }, { league: 'Премьер-Лига', country: 'Ukraine' },
            { league: 'Чемпионат Европы', country: '' }, { league: 'Про-Лига', country: 'Belgium' }, { league: 'Экстракласса', country: 'Poland' },
            { league: 'Серия A', country: 'Brazil' }, { league: 'Премьершип', country: 'Scotland' }, { league: 'Элитсерия', country: 'Norway' },
            { league: 'Суперлига', country: 'Switzerland' }, { league: 'Суперлига', country: 'Greece' }, { league: 'Аллсвенскан', country: 'Sweden' },
            { league: 'Суперлига', country: 'Denmark' }, { league: 'Суперкубок УЕФА', country: '' },
            { league: 'Суперлига', country: 'Serbia' }, { league: 'Бундеслига', country: 'Austria' },
            { league: 'ПФГ А', country: 'Bulgaria' }, { league: 'Высшая лига', country: 'Georgia' },
            { league: 'Лига I', country: 'Romania' }, { league: 'Премьер-Лига', country: 'Israel' },
            { league: 'НБ I', country: 'Hungary' }, { league: 'Премьер-Лига', country: 'Azerbaijan' }, { league: 'Высшая лига', country: 'Latvia' },
            { league: '1. ХФЛ', country: 'Croatia' }, 
            { league: 'Высший дивизион', country: 'Ireland' },]

const Admin = () => {
    const [matches, setMatches] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        const getMatches = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://node-api-ochre.vercel.app/matches',
                }

                const matchesFilter = []
                const response = await axios.request(options);
                console.log(response.data)
                response.data.matches.forEach(el => {
                    leagues.forEach(item => {
                        if (el.leagueName === item.league && el.country === item.country) {
                            matchesFilter.push(el) 
                        }
                        if (el.leagueName === item.league && item.country === '') {
                            matchesFilter.push(el) 
                        }
                    })
                })
                
                setMatches(matchesFilter)
                setIsLoading(true)
            }
            catch (error) {
                console.log(error)
            }
        }

        getMatches()

    }, []);


    let elements

    if (matches.length !== 0) {
        elements = matches.map((el, i) => {
            const matchElementFilter = el.matches.filter(item => item.date !== 'Завершен')
            let matchElements = matchElementFilter.map((item, i) => {
                return (
                    <div key={item.id} onClick={() => {
                        history('/match');
                        sessionStorage.setItem('id', item.id);
                        dispatch({
                            type: 'MATCH',
                            payload: {
                                homeName: item.homeTeam,
                                awayName: item.awayTeam,
                                scores: `${item.homeGoals} - ${item.awayGoals}`,
                                homeLogo: item.homeLogo,
                                awayLogo: item.awayLogo,
                            }
                        })
                    }
                    } className="hover:bg-gray-300 w-full h-16 bg-slate-50 flex justify-around items-center mb-2.5 px-2 border-1 rounded-xl border-solid border-slate-300">
                        <div className="flex pr-2 items-center w-6/12 lg:w-5/12">
                            <img className="w-[20px]" src={item.homeLogo} alt="logo" />
                            <span className="px-3 font-mono text-slate-700 text-sm lg:text-xl">{item.homeTeam}</span>
                        </div>
                        <span className="hidden lg:flex justify-center lg:w-2/6 text-sm lg:text-base">{item.homeGoals}:{item.awayGoals}</span>
                        <div className="flex pl-2 items-center w-6/12 lg:w-5/12">
                            <img className="w-[20px]" src={item.awayLogo} alt="logo" />
                            <span className="px-3 font-mono text-slate-700 text-sm lg:text-xl">{item.awayTeam}</span>
                        </div>
                    </div>
                )
            });
            return (
                <div key={i}>
                    {matchElements.length !== 0 ?
                        <div className="mb-2 p-2">
                            <div className="w-full h-14 flex justify-between items-center bg-slate-50 mb-2">
                                <div className="flex items-center ml-2 w-full">
                                    <img className="w-[22px] lg:w-[32px]" src={el.leagueLogo} alt="логотип лиги" />
                                    <span className="p-2 font-medium font-mono text-lg text-gray-600">{el.leagueName}</span>
                                </div>
                            </div>
                            <div>
                                {matchElements}
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            )
        })
    }
    else {
        elements = <div className="h-screen flex justify-center items-center">
            <Empty
                description={
                    <span className="font-mono text-lg font-medium text-gray-700">
                        На данный момент нет матчей
                    </span>
                }
            >
            </Empty>
        </div>

    }

    return (
        <>
            <div className="container">
                <div className="flex justify-center w-full h-10 bg-neutral-300">
                    <h1 className="font-bold text-xl">Админ панель</h1>
                </div>
                <div className="px-5 md:px-10 lg:px-40">
                    {isLoading ? elements :
                        <div className="w-full h-screen flex flex-col justify-center items-center">
                            Загрузка...
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Admin;