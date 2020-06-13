import React from 'react'
import {Link} from 'react-router-dom'
import defaultImage from '../images/room-1.jpeg';
import propsTypes from 'prop-types'

export default function Room({room}) {
    const {name, slug, images, price} = room;


    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Room.propsTypes = {
    room: propsTypes.shape({
        name: propsTypes.string.isRequired,
        slug: propsTypes.string.isRequired,
        images: propsTypes.arrayOf(propsTypes.string).isRequired,
        price: propsTypes.number.isRequired
    })
}