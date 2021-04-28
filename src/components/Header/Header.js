import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <nav className="navIcon">
                <a href="/home"><HomeIcon className="icon"/></a>
                <a href="/video"><OndemandVideoIcon className="icon"/></a>
                <a href="/group"><GroupAddIcon className="icon"/></a>
                <a href="/job"><WorkOutlineIcon className="icon"/></a>
                <a href="/game"><VideogameAssetIcon className="icon"/></a>
            </nav>
        </div>
    );
};

export default Header;