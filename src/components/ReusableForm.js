import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="card  p-4 w-50 mx-auto" >
        <form onSubmit={props.formSubmissionHandler} >
        <input class="form-control"
            type='text'
            name='name'
            placeholder='Name' 
            required/>
          <input class="form-control"
            type='text'
            name='brand'
            placeholder='Brand' 
            required/>
          <input class="form-control"
            type='number' 
            step='0.1'
            name='alcoholContent'
            placeholder='Alcohol Content' 
            required/>
          <input class="form-control"
            type='number'
            step='0.01'
            min='0'
            name='price'
            placeholder='Price' 
            required/>
         <button class="btn btn-primary btn-block" type='submit'>{props.buttonText}</button>
        </form> 
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;