import Synth from './synth';
import { connect } from 'react-redux';
import {keyPressed, keyReleased} from '../../actions/notes_actions';


const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key))
});

const ConnectedSynth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);


export default ConnectedSynth;
