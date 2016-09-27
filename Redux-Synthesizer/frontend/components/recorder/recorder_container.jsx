import Recorder from './recorder.jsx';
import { connect } from 'react-redux';
import {startRecording, stopRecording, addNotes} from '../../actions/tracks_actions';


const mapStateToProps = (state) => ({
  isRecording: state.isRecording,
  tracks: state.tracks,
  notes: state.notes

});

const mapDispatchToProps = (dispatch) => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording()),
  addNotes: (notes) => dispatch(addNotes(notes))
});

const ConnectedRecorder = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);


export default ConnectedRecorder;
