import { Link } from 'react-router-dom';

const Button = ({text, link, cls=""}) => {
    return (
        <Link to={link} className={`primary-btn ${cls}`}>
            {text} 
            <svg xmlns="http://www.w3.org/2000/svg" width="12.379" height="12.69" viewBox="0 0 12.379 12.69">
                <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(0 0.53)">
                    <path id="Path_38024" data-name="Path 38024" d="M7.5,18H19.129" transform="translate(-7.5 -12.185)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path id="Path_38025" data-name="Path 38025" d="M18,7.5l5.815,5.815L18,19.129" transform="translate(-12.185 -7.5)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
            </svg>
        </Link>
    )
}

export default Button;

