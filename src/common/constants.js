// Adding the fetch url to a constant file for now. This can later be configured
// to be passed as an app config.
export const petDetailsFetchUrl =
  'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json';

// The current requirement is to filter the pets by Cats. Defining this as a
// constant to avoid hard coding it in the filter function and to extend the
// possibility of adding multiple pet type filters (May be a pet type checkbox
// orsomething similar can be implemented in the future)
export const petTypeToFilterBy = 'Cat';

// Owner genders to be considered. This list can be extended to include
// 'Others', 'Not specified' etc.
export const ownerGenders = ['Male', 'Female'];
