import { useEffect, useState } from 'react'
import axios from '../../enviroment/axios-instance'
import { Card } from '../Shared/Card';

export const Anime = () => {
    const [anime, setAnime] = useState([]);

    const getAnimes = () => {
        axios.get('/anime').then((response) => {
            setAnime(response.data);
            console.log(anime);
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getAnimes();
    }, [])

    return (
        <div>
            Anime  
            <div className="flex flex-wrap w-4/5 justify-around items-center mx-auto">
                {anime.map((movie, index) => (
                <Card title={movie.Name} seen={movie.seen} key={index}/>
                ))}
            </div>
        </div>
    )
}
