import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        }
    }
    userVotes = () => {
        this.props.showBeast(this.props);
        this.setState(
            {
                numberOfClicks: this.state.numberOfClicks + 1
            }
        );
    }
    render() {
        return (
            <div>
                <Card className="text-center" style={{ width: '40%' }} >
                    <Card.Header>Horned Beasts</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Img onClick={this.userVotes}
                            variant="top" src={this.props.url} />
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            ❤️
                    {this.state.numberOfClicks}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
export default HornedBeasts;