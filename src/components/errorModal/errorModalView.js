import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetError } from '../../store/actions/error';
import { Toast } from 'react-bootstrap';

const mapStateToProps = state => ({
  errorMessage: state.error.errorMessage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetError }, dispatch);

class ErrorModalView extends Component {

  render() {
    const { errorMessage, resetError } = this.props;

    return (
      errorMessage ?
        <div className="error-wrapper">
          <Toast show={!!errorMessage} onClose={resetError}>
            <Toast.Header>Error</Toast.Header>
            <Toast.Body>{errorMessage}</Toast.Body>
          </Toast>
        </div>
        :
        null
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModalView);
