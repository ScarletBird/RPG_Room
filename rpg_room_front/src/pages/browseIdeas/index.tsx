import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import Browse from '../../assets/browse.jpg';

import './styles.css'

var sectionStyle = {
    backgroundImage: `url(${Browse})`,
    height: '100vh',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
};

interface Type {
    id: number;
    type: string;
    image_url: string;
}

interface Ambient {
    id: number;
    ambient: string;
    image_url: string;
}

const BrowseIdeas = () => {
    const [types, setTypes] = useState<Type[]>([]);
    const [ambients, setAmbients] = useState<Ambient[]>([]);

    useEffect(() => {
        api.get('types').then(response => {
            setTypes(response.data);
        })

        api.get('ambient').then(response => {
            setAmbients(response.data);
        })
    }, [])

    return (
        <div style={sectionStyle}>
            <div className="browse-innerSection" >
                <header>
                    <Link to="/">
                        <span className="browse-icon-back">
                            <FiArrowLeft />
                        </span>
                    </Link>
                    <h1 className="browse-title">Busque uma história</h1>
                </header>
                <div className="browse-outer-grid">
                    <div className="browse-inner-grid">
                        <h1 className="browse-word">
                            Tipo
                        </h1>

                        <ul className="browse-grid">
                            {types.map(type =>(
                            <li 
                                key={type.id} 
                                onClick={() => {} } //handleSelectType(type.id)}//handleSelectItem(type.id)}
                                //className={selectedType === type.id ? 'selected' : ''}
                                style={{
                                    backgroundImage: `url(${type.image_url})`,
                                    borderRadius: 8,
                                    border: '1px solid',
                                    borderColor: 'rgba(243, 243, 76, 0.8)',
                                    marginTop: 15,
                                    marginBottom: 15,
                                }}
                            >
                                <p className="browse-image-text">
                                    {type.type}
                                </p>
                        </li>
                        ))}
                        
                        </ul>
                    </div>

                    <div className="browse-inner-grid">
                        <h1 className="browse-word">
                            Ambiente
                        </h1>

                        <ul className="browse-grid">
                            {ambients.map(ambient =>(
                            <li 
                            key={ambient.id} 
                            onClick={() => {}}// handleSelectAmbient(ambient.id)}//handleSelectItem(ambient.id)}
                            //className={selectedAmbient === ambient.id ? 'selected' : ''}
                            style={{
                                backgroundImage: `url(${ambient.image_url})`,
                                borderRadius: 8,
                                border: '1px solid',
                                borderColor: 'rgba(243, 243, 76, 0.8)',
                                marginTop: 15,
                                marginBottom: 15,
                            }}
                            >
                            <p className="browse-image-text">
                                {ambient.ambient}
                            </p>
                                
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="browse-outer-grid">
                    <h1 className="browse-word">
                            Tipo
                    </h1>
                </div>
            </div>
        </div>
    )

}

export default BrowseIdeas;