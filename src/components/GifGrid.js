import React from 'react';
import { GifGridItem } from "../components/GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';
//import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data:images,  loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__fadeIn">Cargando...</p> }

            { <div className="car-grid">
                { images.map( img => ( <GifGridItem key={ img.id } { ...img } />)) }
            </div> }
        </>
    )
}
