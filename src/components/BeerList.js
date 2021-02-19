import React from 'react';
import Beer from './Beer';
import PropTypes from "prop-types";

function BeerList(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="p-4 w-50 mx-auto" >
        {props.beerList.map((beer) =>
          <div className="col mb-4">
            <div className = "card shadow-lg text-canter">
              <Beer 
                whenBeerClicked = {props.onBeerSelection} 
                name={beer.name}
                brand={beer.brand}
                alcoholContent={beer.alcoholContent}
                price={beer.price}
                keg={beer.keg}
                id={beer.id} 
                key={beer.id}
              />
            </div>
          </div>
        )}
        </div>
      </div>
    </React.Fragment>
  )
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func
}

export default BeerList;


