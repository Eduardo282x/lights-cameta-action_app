import { useEffect, useState } from 'react'
import axios from '../../enviroment/axios-instance'
import { Card } from '../Shared/Card';


export const Series = () => {
    const [series, setSerie] = useState([]);

    const getSeries = () => {
        axios.get('/series').then((response) => {
            setSerie(response.data);
            console.log(series);
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getSeries();
    }, [])


    return (
        <div>
            Series
            <div className="flex flex-wrap w-4/5 justify-around items-center mx-auto">
                {series.map((movie, index) => (
                <Card title={movie.Name} seen={movie.seen} key={index}/>
                ))}
            </div>
        </div>
    )
}
