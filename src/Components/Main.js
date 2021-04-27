import React from 'react';
import HornedBeast from './HornedBeasts'
import Data from '../data.json';
class Main extends React.Component {
    render() {
        return (
            <div>
                {
                    Data.map(img => {
                        return <HornedBeast name={img.title} url={img.image_url} description={img.description} />;
                    })
                }



            </div>
        )
    }
}
export default Main;