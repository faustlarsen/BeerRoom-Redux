import React from "react";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import BeerDetails from "./BeerDetails";
import EditBeerForm from './EditBeerForm';
// import Button from "react-bootstrap/Button";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      createNewBeer: false, 
      masterBeerList: [], 
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
  const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
  this.setState({
    masterBeerList: newMasterBeerList,
    formVisibleOnPage: false
  });
}

//details
handleChangingSelectedBeer = (id) => {
  const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
  this.setState({selectedBeer: selectedBeer});
}

//edit
handleEditClick = () => {
  this.setState({editing: true});
}

handleEditingBeerInList = (beerToEdit) => {
  const editedMasterBeerList = this.state.masterBeerList
    .filter(beer => beer.id !== this.state.selectedBeer.id)
    .concat(beerToEdit);
  this.setState({
    masterBeerList: editedMasterBeerList,
    editing: false,
    selectedBeer: beerToEdit 
  });
}

//delete
handleDeletingBeer = (id) => {
  const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
  this.setState({
    masterBeerList: newMasterBeerList,
    selectedBeer: null
  });
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
      currentlyVisibleState = <BeerList beerList={this.state.masterBeerList} onBeerSelection={this.handleChangingSelectedBeer} />;
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

export default BeerControl;