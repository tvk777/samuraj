import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(addMessageActionCreator()),
    handleChange: (text) => dispatch(updateNewMessageTextActionCreator(text))
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
