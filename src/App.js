import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Data from './data.json';
import ModalView from './Components/ModalView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data : Data,
      show: false,
    };
  }
  showBeast = () => {
    this.setState({
      show: true,
    });
  }
  closeModal = () => {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Main/>
        <ModalView>
        show={this.state.show} closing={this.closeModal}
        </ModalView>
        <Footer />
      </div>
    )
  };
}

export default App;