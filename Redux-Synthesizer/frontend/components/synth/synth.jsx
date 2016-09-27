const React = require('react');
import NoteKey from './note_key';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';


const validKeys = ['a','s','d','f','g','h','j'];

let keyMap = {};
let noteMap = {};

for(let i = 0; i < validKeys.length; i++){
  keyMap[NOTE_NAMES[i]] = validKeys[i];
}
for(let i = 0; i < validKeys.length; i++){
  noteMap[validKeys[i]] = NOTE_NAMES[i];
}

class Synth extends React.Component{

  constructor(props) {
    super(props);
    this.notes= {};
    Object.keys(TONES).forEach( (key)=>{
      this.notes[key]= new Note(TONES[key]);
    });
    this.playNotes = this.playNotes.bind(this);
  }

  onKeyDown(e){
    this.props.keyPressed(e.key);
  }

  onKeyUp(e){
    this.props.keyReleased(e.key);
  }

  componentDidMount(){
    $(document).on('keyup', e => this.onKeyUp(e));
    $(document).on('keydown', e => this.onKeyDown(e));

  }

  playNotes(){
    let that = this;
    console.log(this.props.notes);

    Object.keys(this.notes).forEach((note)=>{
      if (that.props.notes.includes(keyMap[note])){
        that.notes[note].start();
      } else {
        that.notes[note].stop();
      }
    });
  }

  render() {
    this.playNotes();

    // let notes = Object.keys(this.notes).map( (note, idx)=> {
    //   return(<NoteKey key={idx} noteName={note}/>);
    // });
    let notes = this.props.notes.map( (note, idx)=> {
      return(<NoteKey key={idx} noteName={noteMap[note]}/>);
    });

    return(
      <ul>
        {notes}
      </ul>
    );
  }
}

export default Synth;
