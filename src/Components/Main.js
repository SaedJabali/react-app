import React, { useState } from 'react';
import HornedBeast from './HornedBeasts';
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
// import Modal from 'react-bootstrap/Modal';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: Data,
        }
    }
    render() {
        return (

            <CardColumns width='100%'>
                {
                    this.state.Data.map(img => {
                        return <HornedBeast name={img.title}
                            url={img.image_url} description={img.description} />;
                    })
                }
            </CardColumns>
        )
    }
}
export default Main;