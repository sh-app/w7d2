import React from 'react';
import ConnectedSynth from './synth/synth_container';
import ConnectedRecorder from './recorder/recorder_container';

const App = () => {
  return (
    <div>
      <ConnectedSynth/>
      <ConnectedRecorder/>
    </div>
  );
};

export default App;
