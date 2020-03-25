import { ERROR } from '../store/actions/types';
import expect from 'expect';
import ErrorReducer from '../store/reducers/error';

describe('Error Reducer', () => {
  test('it should clear error message while closing the toast message ', () => {
    const errorMessage = "Some error";
    const errorValue = ErrorReducer(errorMessage, {
        type: ERROR.RESET
    });
    expect(errorValue.errorMessage).toEqual('');
  });
});
