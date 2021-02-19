import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditBeerForm (props) {
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      keg: beer.keg,
      id: beer.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditBeerForm.propTypes = {
  beer: PropTypes.object,
  onEditBeer: PropTypes.func
};

export default EditBeerForm;