import React from 'react';
import { addFeature } from "../actions";
import { connect } from "react-redux";


const AdditionalFeature = props => {
  console.log(props);

  const handleAddFeature = (e) => {
    e.preventDefault();
    props.addFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(e) => handleAddFeature(e)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
}
export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
