import { NotesConstants } from '../actions/notes_reducer';
import { NOTE_NAMES } from '../util/tones';

export default function notesReducer(state=[], action) {
  switch (action.type) {

    case KEY_PRESSED:
      if (state.includes(action.key) && validKeys.includes(action.key)) {
        return state;
      } else {
        return state.push(key).slice();
      }

    case KEY_RELEASED:
      if (state.includes(action.key) && validKeys.includes(action.key)) {
        let idx = state.indexOf(action.key);
        return state.slice(0,idx).concat(state.slice(idx));
      } else {
        return state;
      }

    default:
     return state;
  }
}

let validKeys = ['a','s','d','f','g','h','j','k'];

let keyMap = {};

for(let i=0; i<validKeys.length; i++){
  keyMap[validKeys[i]] = NOTE_NAMES[i];
}
