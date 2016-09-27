
const TONES = {
  A4: 440,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
};

const NOTE_NAMES = Object.keys(TONES);



module.exports[TONES] = TONES;
module.exports[NOTE_NAMES] = NOTE_NAMES;
