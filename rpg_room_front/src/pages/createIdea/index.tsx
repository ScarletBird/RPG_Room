import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Create from '../../assets/create.jpg';

import './styles.css'

var sectionStyle = {
    backgroundImage: `url(${Create})`,
    height: '100vh',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
};

async function handleSubmit() {

}

const createIdea = () => {
    return (
        <div style={sectionStyle}>
            <div className="create-innerSection">
                <header>
                    <Link to="/">
                        <span className="create-icon">
                            <FiArrowLeft />
                        </span>
                    </Link>
                    <h1 className="create-title">Conte uma história</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h1 className="create-word">
                            Título da ideia
                        </h1>
                        <input type="text" placeholder="Título" className="create-word-form"/>
                    </fieldset>
                    <fieldset>
                        <h1 className="create-word">
                            Tipo de ideia
                        </h1>
                        
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default createIdea;