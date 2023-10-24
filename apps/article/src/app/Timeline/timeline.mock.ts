import { Era } from '../core/enums/era.enum';

export default {
  name: 'Evil Dead',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Evil_dead_logo.svg',
  description: 'Evil Dead is an American horror film franchise created by Sam Raimi consisting of five feature films and a television series.',
  universes: [
  {
    name: 'The Evil Dead Trilogy',
    description: 'Evil Dead is an American horror film franchise created by Sam Raimi consisting of five feature films and a television series.',
    serie: 'Evil Dead',
    isCanon: true,
    isRemake: false,
    isReboot: false,
    isOriginal: false,
    timelines: [
      {
          name: 'Army of Darkness',
          description: 'Ash is sucked into a time vortex with his Oldsmobile and is transported back to AD 1300',
          isCanon: true,
          isRemake: false,
          isReboot: false,
          isOriginal: true,
          isBootstrap: false,
          era: Era.PAST,
          pieces: [

          ]
      }
    ],
  },
  {
    name: 'Within The Woods',
    description: 'Within the Woods (1978) is a short film written and directed by Sam Raimi.',
    serie: 'Within The Woods',
    isCanon: false,
    isRemake: false,
    isReboot: false,
    isOriginal: true,
    timelines: [],
  },
  {
    name: 'Evil Dead',
    description: `Evil Dead is a 2013 horror film; it serves as a remake of the The Evil Dead, and the first film in the series since 1992's Army of Darkness.`,
    serie: 'Evil Dead',
    isCanon: false,
    isRemake: false,
    isReboot: true,
    isOriginal: false,
    timelines: [],
  }
],
}
