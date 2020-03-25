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
    ) :
    <div className="no-data-fallback-div">No data to display!</div>
  );
}

export default PetNamesList;
