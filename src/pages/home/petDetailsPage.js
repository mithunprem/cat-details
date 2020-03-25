import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPetDetails } from '../../store/actions/pets';
import { petTypeToFilterBy, ownerGenders } from '../../common/constants';

const mapStateToProps = state => ({
  isLoading: state.pets.isLoadingPetDetails,
  filteredPetDetails: state.pets.filteredPetDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPetDetails }, dispatch);

class PetDetailsPage extends Component {

  componentDidMount() {
    this.props.fetchPetDetails();
  }

  render() {
    const { filteredPetDetails } = this.props;
    if(!Object.keys(filteredPetDetails).length > 0) return null;

    return (
      <div>
        <h3>{petTypeToFilterBy} Details</h3>
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
