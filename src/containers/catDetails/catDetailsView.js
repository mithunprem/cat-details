import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  catDetails: state.pets.catDetails
});

class CatLeadersView extends Component {

  render() {
    const { catDetails } = this.props;

    return (
      <>
        <div>Cat details</div>
        <div>{catDetails.length}</div>
      </>
    );
  }
}

export default connect(mapStateToProps)(CatLeadersView);
