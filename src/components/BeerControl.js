import React from "react";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import BeerDetails from "./BeerDetails";
import EditBeerForm from './EditBeerForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      selectedBeer: null, 
      editing: false
    };
  }

showFormOnClick = () => { 
  if (this.state.selectedBeer != null) {
    this.setState({
      formVisibleOnPage: false,
      selectedBeer: null,
      editing: false
    });
  } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}

//create
handleAddingNewBeerToList = (newBeer) => {
  const { dispatch } = this.props;
  const { id, name, alcoholContent, price } = newBeer;
  const action = {
    type: 'ADD_BEER',
    id: id,
    name: name,
    alcoholContent: alcoholContent,
    price: price,
  }
  dispatch(action);
  this.setState({formVisibleOnPage: false});
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
  const { id, name, alcoholContent, price } = beerToEdit;
  const action = {
    type: 'ADD_BEER',
    id: id,
    name: name,
    alcoholContent: alcoholContent,
    price: price,
  }
  dispatch(action);
  this.setState({
    editing: false,
    selectedBeer: null
  });
}

//delete
handleDeletingBeer = (id) => {
  const { dispatch } = this.props;
  const action = {
    type: 'DELETE_BEER',
    id: id
  }
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
  else if (this.state.formVisibleOnPage) { 
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
  masterBeerList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterBeerList: state
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;