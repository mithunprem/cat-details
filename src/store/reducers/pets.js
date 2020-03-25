import { PET_DETAILS } from '../actions/types';
import { ownerGenders, petTypeToFilterBy } from '../../common/constants';

const initialState = {
  petDetails: [],
  filteredPetDetails: {},
  isLoadingPetDetails: false
};

export default function PetDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case PET_DETAILS.SET_LOADING:
      return {
        ...state,
        isLoadingPetDetails: action.isLoading
      };
    case PET_DETAILS.FETCH_SUCCESS:
      const petDetails = action.petDetails;
      return {
        ...state,
        petDetails,
        filteredPetDetails: filterPetsBySelectedType(petDetails)
      };
    default:
      return state;
  }
}

/**
  Function to filter the pet details based on the selected pet type and then to
  create an object with the owner gender as the key and the filtered pet types
  as its value.

  The algorithm is as follows :
  1. Iterate the gender array (the genders to be considered, specified as a config)
  2. Get the pet details specific to one gender at a time.
  3. From the pet details, filter out only those pets that matches the filter type.
  4. Sort the pets in the alphabetical order of their name.
  5. Set the now filtered, sorted pets array against the gender.
  6. Return from the function once data for all genders are obtained.
*/
const filterPetsBySelectedType = petDetails => {
  // Dont bother proceeding further if petDetails are not available.
  if (!petDetails) return null;

  // This object will hold the owner gender and an array of pets based on the
  // type specified.
  const filteredPetsByOwnerGender = {};

  // Iterate the ownerGenders from the constant and populate the object above.
  ownerGenders.map(ownerGender => {
    const filteredPets = [];

    // First get the details of all the pets for the specific owner gender.
    const petDetailsForGender =
      petDetails.filter(petDetail => (petDetail && petDetail.gender === ownerGender)) || [];

    // Now, filter the pets based on the pet type.
    petDetailsForGender.map(({ pets }) => {
      const petsFilteredByType =
        (pets && pets.filter(pet => pet.type === petTypeToFilterBy)) || [];

      filteredPets.push(...petsFilteredByType);

      // Map function is used just to iterate. No need to return anything from it.
      return null;
    });

    // Sort the pets in the alphabetical order of their name.
    filteredPets.sort((pet1, pet2) => pet1.name.localeCompare(pet2.name));

    // Set the filtered, sorted pets array in to object against the gender.
    filteredPetsByOwnerGender[ownerGender] = filteredPets;

    // Map function is used just to iterate. No need to return anything from it.
    return null;
  });

  return filteredPetsByOwnerGender;
}
