import React from "react";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import BeerDetails from "./BeerDetails";
import EditBeerForm from './EditBeerForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeer: null, 
      editing: false
    };
  }

showFormOnClick = () => { 
  if (this.state.selectedBeer != null) {
    this.setState({
      selectedBeer: null,
      editing: false
    });
  } else {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
}

//create
handleAddingNewBeerToList = (newBeer) => {
  const { dispatch } = this.props;
  const action = a.addBeer(newBeer);
  dispatch(action);
  const action2 = a.toggleForm();
  dispatch(action2);
}

//details
handleChangingSelectedBeer = (id) => {
  const selectedBeer = this.props.masterBeerList[id];
  this.setState({selectedBeer: selectedBeer});
}

//edit
handleEditClick = () => {
  this.setState({editing: true});
}

handleEditingBeerInList = (beerToEdit) => {
  const { dispatch } = this.props;
  const action = a.addBeer(beerToEdit);
  dispatch(action);
  this.setState({
    editing: false,
    selectedBeer: null
  });
}

//delete
handleDeletingBeer = (id) => {
  const { dispatch } = this.props;
  const action = a.deleteBeer(id);
  dispatch(action);
  this.setState({selectedBeer: null});
}

//buy
handleBuyClick = (id) => {
  const beerToBuy = this.state.masterBeerList.filter(
  beer => beer.id === this.state.selectedBeer.id)[0];
  if (beerToBuy.keg !== 0) {
    beerToBuy.keg--;
  }
  const editedBeerList = this.state.masterBeerList
    .filter(beer => beer.id !==id);
  this.setState({
    masterBeerList: editedBeerList,
    editing: false,

  });
}

render(){
  let buttonText = null;
  let currentlyVisibleState = null;

  if (this.state.editing){
    currentlyVisibleState = <EditBeerForm beer = {
      this.state.selectedBeer} onEditBeer = {
        this.handleEditingBeerInList
      } />
    buttonText = "Beer List";
  } 

else if (this.state.selectedBeer != null) {
  currentlyVisibleState =
  <BeerDetails
    beer = {this.state.selectedBeer}
    onClickingDelete = {this.handleDeletingBeer}
    onClickingBuy = {this.handleBuyClick}
    onClickingUpdate = {this.handleEditClick} />;
    buttonText = "Beer List";
  } 
  else if (this.props.formVisibleOnPage) { 
    currentlyVisibleState = <NewBeerForm 
    onNewBeerCreation = {this.handleAddingNewBeerToList} />;
    buttonText = "Beer List";
    
  } else { 
    currentlyVisibleState = <BeerList beerList={this.props.masterBeerList} onBeerSelection={this.handleChangingSelectedBeer} />;
    buttonText = "Add Beer";
  }
  return (
    <React.Fragment>
    {currentlyVisibleState}
    <button onClick={this.showFormOnClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}

BeerControl.propTypes = {
  masterBeerList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterBeerList: state.masterBeerList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;