import { lazy } from 'react';

const Banner = lazy(() => import("assets/Portfolio/Alkym/AlkymIconTiny.png"));
const Short = lazy(() => import("assets/Portfolio/Alkym/Alkym.mp4"));
const Sample = lazy(() => import("assets/Portfolio/Alkym/AlkymMuestra.mp3"));


const AlkymObject = {
  display:{ 
    title: "Alkym",
    category: 'VIDEOGAMES, SOUND DESIGN',
    src: Banner,
    altText: 'Icon of Alkym',
    audio: Sample
  },
  title: "Alkym",
  quote: "Test your skills on this platform game by overcoming the four elements through the power of alchemy.",
  banner: Banner,
  short: Short,
  firstSection: {
    left:[
      {
        title: "CLIENT",
        text: "Camilo Arcila (2021)"
      },
      {
        title: "SERVICES",
        text: "Video game trailer music & sound design."
      },
    ],
    right: [
      {
        title: "The challenge:",
        text: "Build up the excitement through music and sound design that will sync to the visuals and cues from the content of the trailer."
      },
      {
        title: "The concept:",
        text: "The call of adventure with a challenge ahead can be achieved with the use of heavy percussion and brass, which combined with a thin whistle and harp (representing the Celtic inspiration in the design of the game) will aid on the engaging visuals and build up until the title card is dropped."
      },
    ]
  },
  playlist: {
    title: "Alkym",
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [
      { title: "Alkym", audio: Sample },
    ],
  },
  secondSection: {
    title: "THE TRAILER MUSIC",
    subtitle: "The inspiration: ",
    text: "Influenced by the music of similar games and series that have used the elements as their main inspiration for level design and storytelling, as well as Irish jigs and folk percussive music.",
  },
  credits: [
    {
      title: "Visuals, game design & editing",
      by: "Andres F. Gallego"
    },
    {
      title: "Trailer music Composed by",
      by: "Eduardo Hincapié"
    },
  ]
}

export default AlkymObject;
