import { Outlet, Link } from "react-router-dom";
import { Footer } from '../Footer/Footer'
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from "@mui/material";

export const Layout = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center absolute top-10">
            <ul className="flex items-center justify-around bg-white w-11/12 rounded-xl px-6 py-3">
                <Link to={'/'}       className="text-[#1840a4] font-semibold" ><HomeIcon/> Home</Link>
                <Link to={'/movies'}  className="text-[#1840a4] font-semibold">Peliculas</Link>
                <Link to={'/series'} className="text-[#1840a4] font-semibold" >Series</Link>
                <Link to={'/anime'} className="text-[#1840a4] font-semibold"  >Anime</Link>
                <TextField label="Buscar" variant="outlined" size="small"/>
            </ul>
            <div className="my-10">
                <Outlet/>
            </div>
            <div className="flex items-center justify-center bg-white w-11/12 rounded-xl px-6 py-2">
                <Footer/>
            </div>
        </div>
    )
}
