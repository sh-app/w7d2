import { TracksConstants } from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

export default function tracksReducer(state={},action){
  switch (action.type) {

    case TracksConstants.START_RECORDING:
      currTrackId++;
      let deepCopy1 = merge({}, state);
      let newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      deepCopy1[currTrackId] = newTrack;
      return deepCopy1;

    case TracksConstants.STOP_RECORDING:
      let deepCopy2 = merge({}, state);
      let timeSlice2 = action.timeNow - state[currTrackId].timeStart;
      deepCopy2[currTrackId].roll.push({notes: [], timeSlice2: timeSlice});
      return deepCopy2;

    case TracksConstants.ADD_NOTES:
      let deepCopy3 = merge({}, state);
      let timeSlice = action.timeNow - state[currTrackId].timeStart;
      deepCopy3[currTrackId].roll.push({notes: action.notes, timeSlice: timeSlice});
      return deepCopy3;

    default:
      return state;

  }
}
