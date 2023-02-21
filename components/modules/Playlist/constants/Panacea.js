import image from 'assets/test/test5.jpg';

import test from 'assets/audio/test.mp3';

const playlist = {
  title: 'Panacea',
  image,
  tracks: [
    { title: 'Panacea Title Screen', audio: new Audio(test) },
    { title: 'Panacea Beach', audio: new Audio(test) },
    { title: 'Panacea Battle', audio: new Audio(test) },
    { title: 'Panacea Forest', audio: new Audio(test) },
    { title: "Panacea Rona's Theme", audio: new Audio(test) },
    { title: "Panacea Rona's Rage", audio: new Audio(test) },
    { title: 'Panacea Volcano', audio: new Audio(test) },
  ],
};

export default playlist;
