import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main/>
        <Footer />
      </div>
    )
  };
}

export default App;