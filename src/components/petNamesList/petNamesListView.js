import React from 'react';

const PetNamesList = ({ petDetails }) => {
  return (
    petDetails ?
    (
      <ul>
        {
          petDetails.map(({ name, type }) => {
            return (<li key={`${type}-${name}`}>{name}</li>)
          })
        }
      </ul>
    ) : null
  );
}

export default PetNamesList;
