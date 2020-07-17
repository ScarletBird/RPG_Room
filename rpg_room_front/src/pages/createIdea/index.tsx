import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

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

const CreateIdea = () => {
    const [types, setTypes] = useState<Type[]>([]);
    const [ambients, setAmbients] = useState<Ambient[]>([]);
    const [timeSlider, setTimeSlider] = useState(0);
    const [sliderText, setSliderText] = useState("Em qualquer momento da aventura.");

    useEffect(() => {
        api.get('types').then(response => {
            setTypes(response.data);
        })

        api.get('ambient').then(response => {
            setAmbients(response.data);
        })
    }, [])

    useEffect(() => {
        setSliderText(sliderTextFunction(timeSlider));
    }, [timeSlider])

    const [selectedType, setSelectedType] = useState(0);
    const [selectedAmbient, setSelectedAmbient] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            "user_id": 1,
            "title": title,
            "type_id": selectedType,
            "ambient_id": selectedAmbient,
            "description": description,
            "timeline_id": timeSlider,
            "creation_date": new Date(),
        }

        await api.post('items', data);

        alert('Item criado!');


    }

    function handleSlider(event: ChangeEvent<HTMLInputElement>) {
        const sliderValue = event.target.value;

        //console.log(sliderValue);

        setTimeSlider(Number(sliderValue));
    }

    function handleTitle(event: ChangeEvent<HTMLInputElement>) {
        const titleValue = event.target.value;

        setTitle(titleValue);
    }

    function handleDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        const descriptionValue = event.target.value;

        setDescription(descriptionValue);
    }

    function handleSelectType(id: number){
        if(id === selectedType){
            setSelectedType(0);
        } else {
            setSelectedType(id);
        }
    }

    function handleSelectAmbient(id: number){
        if(id === selectedAmbient){
            setSelectedAmbient(0);
        } else {
            setSelectedAmbient(id);
        }
    }

    function sliderTextFunction(param: Number){
        switch (param){
            case 1:
                return "Em qualquer momento da aventura.";
            case 2:
                return "Para começar!";
            case 3:
                return "No começo da aventura.";
            case 4:
                return "No meio da aventura.";
            case 5:
                return "No fim da aventura.";
            case 6:
                return "Para terminar!";
            default:
                return "Em qualquer momento da aventura.";
        }
    }

    return (
        <div style={sectionStyle}>
        <div className="create-innerSection">
            <header>
                <Link to="/">
                    <span className="create-icon-back">
                        <FiArrowLeft />
                    </span>
                </Link>
                <h1 className="create-title">Conte uma história</h1>
                
                <span className="create-icon-submit" onClick={handleSubmit}>
                    <p>Submeter ideia</p>
                </span>
            </header>
            <form onSubmit={handleSubmit}>
                <div>
                    <fieldset>
                        <h1 className="create-word">
                            Título
                        </h1>
                        <input
                            type="text"
                            placeholder="Título"
                            className="create-word-form"
                            onChange={handleTitle}
                        />
                    </fieldset>
                    <fieldset className="create-type-ambient">
                        <div>
                            <h1 className="create-word">
                                Tipo
                            </h1>

                            <ul className="create-grid">
                            {types.map(type =>(
                                <li 
                                    key={type.id} 
                                    onClick={() => handleSelectType(type.id)}//handleSelectItem(type.id)}
                                    className={selectedType === type.id ? 'selected' : ''}
                                    style={{
                                        backgroundImage: `url(${type.image_url})`,
                                        borderRadius: 8,
                                        border: '1px solid',
                                        borderColor: 'rgba(243, 243, 76, 0.8)',
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <p className="create-image-text">
                                        {type.type}
                                    </p>
                            </li>
                            ))}
                            
                        </ul>
                        </div>

                        <div>
                            <h1 className="create-word">
                                Ambiente
                            </h1>

                            <ul className="create-grid">
                            {ambients.map(ambient =>(
                            <li 
                            key={ambient.id} 
                            onClick={() => handleSelectAmbient(ambient.id)}//handleSelectItem(ambient.id)}
                            className={selectedAmbient === ambient.id ? 'selected' : ''}
                            style={{
                                backgroundImage: `url(${ambient.image_url})`,
                                borderRadius: 8,
                                border: '1px solid',
                                borderColor: 'rgba(243, 243, 76, 0.8)',
                                marginTop: 15,
                                marginBottom: 15,
                            }}
                        >
                            <p className="create-image-text">
                                {ambient.ambient}
                            </p>
                                
                            </li>
                            ))}
                        </ul>
                            
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <h1 className="create-word">
                            Quando começa sua história?
                        </h1>

                        <h3 className="create-time">{ sliderText }</h3>
                        <input 
                            type="range"
                            min="1"
                            max="6"
                            defaultValue="1"
                            className="create-slider"
                            onChange={handleSlider}/>

                        
                    </fieldset>
                    <fieldset>
                        <h1 className="create-word">
                            Descrição
                        </h1>
                        <textarea 
                            placeholder="Escreva aqui a descrição"
                            onChange={handleDescription}
                        ></textarea>
                    </fieldset>
                </div>
            </form>
        </div>
        </div>
    )
}

export default CreateIdea;