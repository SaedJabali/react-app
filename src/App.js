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
      Data: Data,
      show: false,
      selected: ''
    };
  }
  showBeast = (event) => {
    this.setState({
      show: true,
      selected: event.target
    });
    console.log(this.state.show);
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
        <Main
          showBeast={this.showBeast}
        />
        <ModalView
          selected={this.state.selectedData}
          show={this.state.show} close={this.closeModal}
        />
        <Footer />
      </div>
    )
  };
}

export default App;