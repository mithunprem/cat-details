import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPetDetails } from '../../store/actions/pets';
import { Spinner } from 'react-bootstrap';
import PetNamesList from '../../components/petNamesList/petNamesListView';

const mapStateToProps = state => ({
  isLoading: state.pets.isLoadingPetDetails,
  filteredPetDetails: state.pets.filteredPetDetails,
  petType: state.pets.petTypeToFilterBy,
  ownerGenders: state.pets.ownerGenders
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPetDetails }, dispatch);

class PetDetailsPage extends Component {

  componentDidMount() {
    this.props.fetchPetDetails();
  }

  render() {
    const { isLoading, filteredPetDetails, petType, ownerGenders } = this.props;

    return (
      isLoading ?
        <Spinner animation="border" />
        :
        (
          <div className="pet-details-wrapper">
            <h4 className="pet-type-header">{petType} Details</h4>
            {
              ownerGenders.map(ownerGender => {
                return (
                  <div key={ownerGender}>
                    <h5>{ownerGender}</h5>
                    <PetNamesList petDetails={filteredPetDetails[ownerGender]}/>
                  </div>
                )
              })
            }
          </div>
        )
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetDetailsPage);
