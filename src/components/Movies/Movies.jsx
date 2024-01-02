import { useEffect, useState } from 'react'
import axios from '../../enviroment/axios-instance'
import { Card } from '../Shared/Card';

export const Movies = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = () => {
        axios.get('/movies').then((response) => {
            setMovies(response.data);
            console.log(movies);
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            Movies  
            <div className="flex flex-wrap w-4/5 justify-around items-center mx-auto">
                {movies.map((movie, index) => (
                <Card title={movie.Name} seen={movie.seen} key={index}/>
                ))}
            </div>
        </div>
    )
}