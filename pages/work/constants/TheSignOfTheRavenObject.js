import { lazy } from 'react';

const Banner = lazy(() => import("assets/Portfolio/TheSignOfTheRaven/TheSignOfTheRavenImageTiny.png"));
const image = lazy(() => import("assets/Portfolio/TheSignOfTheRaven/TheSignOfTheRavenIconTiny.png"));
const Short = lazy(() => import("assets/Portfolio/TheSignOfTheRaven/TheSignOfTheRaven.mp4"));
const Sample = lazy(() => import("assets/Portfolio/TheSignOfTheRaven/TheSignOfTheRavenMuestra.mp3"));


const RavenObject = {
  display:{
    title: "The sign of the raven",
    category: 'FILM & ANIMATION, SOUND DESIGN',
    src: image,
    altText: 'Icon of the Sign of the Raven',
    audio: Sample
  },
  title: "The sign of the raven",
  quote: "The raven always caws by dusk, then you’ll know…",
  banner: Banner,
  short: Short,
  firstSection: {
    left:[
      {
        title: "Collaboration",
        text: "AndyJ.art (2021)"
      },
      {
        title: "SERVICES",
        text: "Music composition & sound design."
      },
    ],
    right: [
      {
        title: "The challenge:",
        text: "Create music that will help enhance the visuals of a medieval village at the end of the day, using orchestration, instruments and rhythms that will support such narrative."
      },
      {
        title: "The concept:",
        text: "With the use of a mandolin setting the base and rhythm for the medieval atmosphere, the wind section will bring the melody while the string section carry the harmony. The harp will support the winds from time to time and then the mandolin on engrossing the base and rhythm."
      },
    ]
  },
  playlist: {
    title: "The sign of the raven",
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [
      { title: "The sign of the raven", audio: Sample },
    ],
  },
  secondSection: {
    title: "THE MUSIC",
    subtitle: "The inspiration: ",
    text: "The rhythm comes from the sacred music from medieval Spain as well as orchestral classical ambient.",
  },
  credits: [
    {
      title: "Illustratrion by",
      by: "andyJ.art"
    },
    {
      title: "Trailer music Composed by",
      by: "EDUARDO HINCAPIE"
    },
    {
      title: "Animation by",
      by: "Juan Pablo Martínez"
    },
  ]
}

export default RavenObject;
