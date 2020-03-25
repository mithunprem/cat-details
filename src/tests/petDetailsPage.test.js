import React from 'react';
import expect from "expect";
import { create } from 'react-test-renderer';
import PetsReducer, { filterPetsBySelectedType } from "../store/reducers/pets";
import { PET_DETAILS } from "../store/actions/types";
import { petDetails } from "./mockData/petDetails.data";
import PetDetailsPage from "../pages/home/petDetailsPage";

describe('Pet Details Page', () => {

  test('Loading flag should be true when pet details are about to be fetched', () => {
    const { isLoadingPetDetails } = PetsReducer(petDetails, { type: PET_DETAILS.SET_LOADING, isLoading: true });
    expect(isLoadingPetDetails).toBeTruthy();
  })

  test('Loading flag should be reset once the data is fetched', () => {
    const { isLoadingPetDetails } = PetsReducer(petDetails, { type: PET_DETAILS.FETCH_SUCCESS });
    expect(isLoadingPetDetails).toBeFalsy();
  })

  test('Filter function output', () => {
    const ownerGender = ['Male'];
    expect(filterPetsBySelectedType(petDetails, 'Cat', ownerGender)['Male'].length).toEqual(4);
  })
})
