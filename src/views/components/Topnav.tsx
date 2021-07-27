import {Link} from "react-router-dom";
import './Topnav.scss';
import React from "react";

interface TopnavProps {
    toggleMenuButtonVisible?: boolean
}

export const Topnav: React.FC<TopnavProps> = (props) => {
    const {toggleMenuButtonVisible} = props;
    const toggleMenu = () => {

    };

    return (
        <div className="home">
            <div className="topnav">
                <Link to="/" className="logo">
                    <svg className="icon">
                        <use xlinkHref="#icon-easy"/>
                    </svg>
                </Link>
                <ul className="menu">
                    <Link to="/doc">文档</Link>
                    <li><a href="https://github.com/cqhaisenbao/guoguo-ui">github</a></li>
                </ul>
                {toggleMenuButtonVisible &&
                <svg className="toggleAside" onClick={toggleMenu}>
                    <use xlinkHref="#icon-menu"/>
                </svg>
                }
            </div>
        </div>
    );
};

export default Topnav;
