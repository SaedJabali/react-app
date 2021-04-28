/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Data from '../data.json';
import HornedBeast from './HornedBeasts';


class ModalView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lgShow: useState(false)
    }
  }
  setLgShow = () => {
    this.setState({
      lgShow: useState(true),
    });

  }
  render(){
    return (
      <Modal >
            <Modal.Header closeButton>
              <Modal.Title>
               
            <CardColumns width='100%'>
                {
                    Data.map(img => {
                        return <HornedBeast name={img.title}
                            url={img.image_url} description={img.description} />;
                    })
                }
            </CardColumns>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                Data.map(img=>{
                  return <HornedBeast name={img.title}/>
                })
              }
  
            </Modal.Body>
          </Modal>
        
    )
  }

  // function Example() {
  //     const [lgShow, setLgShow] = useState(false);

  //     return (
  //       <>
  //         <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
  //         <Button onClick={() => setLgShow(true)}>Large modal</Button>
  //         <Modal
  //           size="lg"
  //           show={lgShow}
  //           onHide={() => setLgShow(false)}
  //           aria-labelledby="example-modal-sizes-title-lg"
  //         >
  //           <Modal.Header closeButton>
  //             <Modal.Title id="example-modal-sizes-title-lg">
  //               Large Modal
  //             </Modal.Title>
  //           </Modal.Header>
  //           <Modal.Body>...</Modal.Body>
  //         </Modal>
  //       </>
  //     );
  //   },
  //   Example();
}