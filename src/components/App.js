import React from 'react';
import Header from './Header';
import BeerControl from './BeerControl';
// import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment >
      <div className="text-center" >
        <Header />
      </div>
      <div className="container mb-5">
      <div className="text-center">
      <BeerControl />
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
