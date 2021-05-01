import React from 'react';
import HornedBeast from './HornedBeasts';
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
let dataArr2 = [];
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: Data,
        }
    }
    selectedNumber = (event) => {
        event.preventDefault();
        dataArr2 = [];
        this.state.Data.filter(index => {
            if (Number(event.target.value) === index.horns) {
                dataArr2.push(index);
            } else if (event.target.value === 'Choose Number') {
                dataArr2.push(index);
            }
            return dataArr2;
        })
        this.setState({ data: dataArr2 });

    }
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How many hornes?</Form.Label>
                        <Form.Control onChange={this.selectedNumber} as="select">
                            <option>Choose Number</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <CardColumns width='100%'>
                    {
                        this.state.Data.map(img => {
                            return <HornedBeast name={img.title}
                                url={img.image_url} description={img.description}
                                showBeast={this.props.showBeast} />;
                        })
                    }
                    {/* {
                        this.state.dataArr2.map(img => {
                            return <HornedBeast name={img.title}
                                url={img.image_url} description={img.description}
                                showBeast={this.props.showBeast} />;
                        })
                    } */}
                </CardColumns>
            </>
        )
    }
}
export default Main;