import React from 'react';
import HornedBeast from './HornedBeasts'
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'


class Main extends React.Component {
    render() {
        return (
            <CardColumns width='100%'>
                {
                    Data.map(img => {
                        return <HornedBeast name={img.title}
                            url={img.image_url} description={img.description} />;
                    })
                }
            </CardColumns>
        )
    }
}
export default Main;