import { lazy } from 'react';
const Banner = lazy(() => import("assets/Portfolio/AftermathOfBattle/AftermathOfBattleImageTiny.png"));
const Short = lazy(() => import("assets/Portfolio/AftermathOfBattle/AftermathOfBattle.mp4"));
const Sample = lazy(() => import("assets/Portfolio/AftermathOfBattle/AftermathOfBattleMuestra.mp3"));


const AftermathOfBattleObject = {
  display:{
    title: "Aftermath Of Battle",
    category: 'FILM & ANIMATION, SOUND DESIGN',
    src: Banner,
    altText: 'Icon of Aftermath Of Battle',
    audio: Sample
  },
  title: "Aftermath Of Battle",
  quote: "The battle might have been over, but not the war. Onward…",
  banner: Banner,
  short: Short,
  firstSection: {
    left:[
      {
        title: "COLLABORATION",
        text: "Magnús “Siomo” Jón (2021)"
      },
      {
        title: "SERVICES",
        text: "Music composition & sound design."
      },
    ],
    right: [
      {
        title: "The challenge:",
        text: "Compose music that will support the narrative for the visuals taking place in medieval times, taking into account that the instruments used will serve such purpose, aside for percussion and brass which will be important pillars."
      },
      {
        title: "The concept:",
        text: "A tambourine and rest of percussion, with the help of a mandolin, will serve as the base and rhythm for the medieval ambience. The brass will procure the harmony and support the energy of the piece. The Duduk will have the main melody and the ocarina will charm in to assist with the setting."
      },
    ]
  },
  playlist: {
    title: "Aftermath Of Battle",
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [
      { title: "Aftermath Of Battle", audio: Sample },
    ],
  },
  secondSection: {
    title: "THE MUSIC",
    subtitle: "The inspiration: ",
    text: "There is inspiration taken from folk music and jigs, as well as soundtracks from films and games that are settled in a medieval ambience.",
  },
  credits: [
    {
      title: "Created by",
      by: "Magnús “Siomo” Jón"
    },
    {
      title: "Music Composed by",
      by: "Eduardo Hincapié"
    },
    {
      title: "Animation template by",
      by: "The SFM Walk of Life"
    },
  ]
}

export default AftermathOfBattleObject;
