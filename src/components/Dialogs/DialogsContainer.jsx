import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(addMessageActionCreator()),
    handleChange: (text) => dispatch(updateNewMessageTextActionCreator(text))
  }
}

const AuthRedirectContainer = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer);

export default DialogsContainer;
