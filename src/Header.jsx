import React from "react";
import { Link } from 'react-router-dom';
import {Header} from './styles/header';
import './app.css'

export default function Comeco (){
    return(
        <Header>
            <nav>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/musica'>Musica</Link>
                <Link className='links' to='/cidade'>Cidade</Link>
            </nav>
        </Header>
    );
};