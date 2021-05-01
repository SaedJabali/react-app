import React from 'react';
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import HornedBeast from './HornedBeasts';


class ModalView extends React.Component {
    render() {

        return (
            <>
                <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.url}
                    </Modal.Body>
                    <ModalBody>
                        {this.props.description}
                    </ModalBody>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeModal}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalView;