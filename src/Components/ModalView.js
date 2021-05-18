import React from 'react';
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import HornedBeast from './HornedBeasts';
import Card from 'react-bootstrap/Card'


class ModalView extends React.Component {
    render() {

        return (
            <>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.selected.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img src={this.props.selected.url} />
                    </Modal.Body>
                    <ModalBody>
                        {this.props.selected.description}
                    </ModalBody>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalView;