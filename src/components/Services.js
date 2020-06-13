import React, {Component} from 'react'
import Tile from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icons: <FaCocktail/>,
                title: "free cocktails",
                info: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs"
            },
            {
                icons: <FaHiking/>,
                title: "endless hiking",
                info: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs"
            },
            {
                icons: <FaShuttleVan/>,
                title: "free shuttle",
                info: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs"
            },
            {
                icons: <FaBeer/>,
                title: "free beer",
                info: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Tile title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        )
    }
}
