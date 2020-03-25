import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPetDetails } from '../../store/actions/pets';
import { bindActionCreators } from 'redux';
import PageHeader from '../../components/header/headerView';

const mapStateToProps = state => ({
  isLoading: state.pets.isLoadingPetDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchPetDetails },
    dispatch
  );

class PetDetailsPage extends Component {

  componentDidMount() {
    this.props.fetchPetDetails();
  }

  render() {
    return (
      <>
        <PageHeader />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetDetailsPage);
