import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  petDetails: state.pets.petDetails
});

class CatLeadersView extends Component {

  render() {
    const { petDetails } = this.props;

    return (
      <>
        <div>Cat details</div>
        <div>{petDetails.length}</div>
      </>
    );
  }
}

export default connect(mapStateToProps)(CatLeadersView);
