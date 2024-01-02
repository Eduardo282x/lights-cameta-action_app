import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
import PropTypes from "prop-types";

export const Card = ({title, seen}) => {
    return (
        <div className='rounded-xl w-40 h-20 border-white border-solid border-2 text-white flex items-center justify-center'>
            {title}
            {seen ? <CheckIcon/> : ''}
        </div>
    )
}


Card.propTypes = {
    title: PropTypes.string,
    seen: PropTypes.bool
};
