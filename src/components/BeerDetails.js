import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

function BeerDetails(props) {
  const {beer, onClickingDelete, onClickingUpdate, onClickingBuy } = props;

  return (
  <React.Fragment>
    <div className="card p-4 w-50 mx-auto" >
      <h1 style={{color: '#010104'}}>Details</h1>
      <h5 style={{color: '#010104'}}>Name: {beer.name}</h5>
      <h5 style={{color: '#010104'}}>Brand: {beer.brand}</h5>
      <h5 style={{color: '#010104'}}>Alcohol Content: {beer.alcoholContent}%</h5>
      <h5 style={{color: '#010104'}}>Price: ${beer.price}</h5>
    {beer.keg === 0 ?
      <h5 style={{color: '#010104'}}>Out of Stock</h5> : 
      <h5 style={{color: '#010104'}}>Pints left: {beer.keg}</h5>
    }
    </div>
    <div className="card-footer">
      {beer.keg > 0 ? <button className="btn btn-secondary"  onClick={() => onClickingBuy()}>Buy</button> : null}
      <button  className="btn btn-secondary" onClick={() => onClickingDelete(beer.id)}>Delete</button>
      <button  className="btn btn-secondary" onClick={() => onClickingUpdate()}>Update</button>
    </div>
  </React.Fragment>
  );
}

BeerDetails.protoTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpdate: PropTypes.func,
  onClickingBuy: PropTypes.func,
}

const mapStateToProps = (state, props) => {
  return {
    beer: state.masterBeerList[props.beerId]
  }
}

BeerDetails = connect(mapStateToProps)(BeerDetails);

export default BeerDetails;