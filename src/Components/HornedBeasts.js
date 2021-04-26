import React from 'react';

class HornedBeasts extends React.Component {
    render() {
        return(
        <div>
 <h2>{this.props.name}</h2>
 <img src={this.props.url} alt='' title={this.name} />
 <p>{this.props.description}</p>
 </div>
        )
    }
} 
export default HornedBeasts;