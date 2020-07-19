import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit3, FiSearch } from 'react-icons/fi';

import Background from '../../assets/background.jpg';
import Browse from '../../assets/browse.jpg';
import Create from '../../assets/create.jpg';
import './styles.css'

var sectionStyle = {
    backgroundImage: `url(${Background})`,
    height: '100vh',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
};
var browseStyle = {
    backgroundImage: `url(${Browse})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};
var createStyle = {
    backgroundImage: `url(${Create})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

export default function Home(){
    return (
        //Image found on https://wallpapersafari.com/w/XCSGLa
        <div style={sectionStyle}>
            <div className="innerSection">
                <h1 className="title">RPG Room</h1>
                <h1 className="subtitle">Um lugar para novas ideias</h1>
                <section className="buttons">
                    <Link to="/create" className="linkButton">
                        <span className="contentButton">
                            <FiEdit3 />
                        </span>
                        <p className="contentButton">Escrever uma nova ideia</p>
                    </Link>
                    <Link to="/browse" className="linkButton">
                        <span className="contentButton">
                            <FiSearch />
                        </span>
                        <p className="contentButton">Buscar uma ideia</p>
                    </Link>
                </section>
                <section className="images">
                    <div className="background" style={createStyle}>
                        <div className="innerSection-image">
                            <p className="image">
                                Solte sua criatividade e conte suas aventuras!
                                Ideias para uma nova aventura? Para um novo chefão? Para uma nova masmorra? Conte aqui e ajude jogadores a encontrar mais ideias!
                            </p>
                        </div>
                    </div>
                    <div className="background" style={browseStyle}>
                        <div className="innerSection-image">
                            <p className="image">
                                Quer uma masmorra inovadora para sua próxima sessão? Um chefão que seja desafiante, ou até mesmo cômico?
                                Busque uma nova ideia para tornar a sessão mais variada!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}