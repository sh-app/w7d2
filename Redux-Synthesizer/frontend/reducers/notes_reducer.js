import  { NotesConstants } from '../actions/notes_actions.js';
import { NOTE_NAMES } from '../util/tones.js';

export default function notesReducer(state=[], action) {
  switch (action.type) {

    case NotesConstants.KEY_PRESSED:
      if (state.includes(action.key) ) {
        return state;
      }
      let newState =  state.slice();
      newState.push(action.key);
      return newState;

    case NotesConstants.KEY_RELEASED:
      if (state.includes(action.key) ) {
        let idx = state.indexOf(action.key);
        return state.slice(0,idx).concat(state.slice(idx+1));
      }
      return state;

    default:
     return state;
  }
}
