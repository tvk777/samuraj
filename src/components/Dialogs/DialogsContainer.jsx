import { addMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => dispatch(addMessageActionCreator(text)),
  };
};

//const AuthRedirectContainer = withAuthRedirect(Dialogs);

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

export default DialogsContainer;
