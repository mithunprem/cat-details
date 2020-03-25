import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPetDetails } from '../../store/actions/pets';

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
    const { filteredPetDetails, petType, ownerGenders } = this.props;
    if(!Object.keys(filteredPetDetails).length > 0) return null;

    return (
      <div>
        <h3>{petType} Details</h3>
        {
          ownerGenders.map(ownerGender => {
            return (
              <div key={`${ownerGender}`}>
                <div>{ownerGender}</div>
                <br />
                <div>
                {filteredPetDetails[ownerGender].map(({ name }) => {
                    return (<div key={`${ownerGender}-${name}`}>{name}</div>)
                  })}
                </div>
                <br />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetDetailsPage);
