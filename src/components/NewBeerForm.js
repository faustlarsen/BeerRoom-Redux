import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {
  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation ({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: parseInt(event.target.alcoholContent.value),
      price:  parseInt(event.target.price.value),
      keg: 124,
      id: v4()
    }); 
  };

  return(
    <React.Fragment>
      <div className="card  p-4 w-50 mx-auto" >
      <ReusableForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Submit" />
     </div>
    </React.Fragment>

  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;