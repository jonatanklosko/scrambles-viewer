export const wcaEvents = [
  {
    id: '333',
    name: '3x3x3 Cube',
    official: true,
  },
  {
    id: '222',
    name: '2x2x2 Cube',
    official: true,
  },
  {
    id: '444',
    name: '4x4x4 Cube',
    official: true,
  },
  {
    id: '555',
    name: '5x5x5 Cube',
    official: true,
  },
  {
    id: '666',
    name: '6x6x6 Cube',
    official: true,
  },
  {
    id: '777',
    name: '7x7x7 Cube',
    official: true,
  },
  {
    id: '333bf',
    name: '3x3x3 Blindfolded',
    official: true,
  },
  {
    id: '333fm',
    name: '3x3x3 Fewest Moves',
    official: true,
  },
  {
    id: '333oh',
    name: '3x3x3 One-Handed',
    official: true,
  },
  {
    id: 'minx',
    name: 'Megaminx',
    official: true,
  },
  {
    id: 'pyram',
    name: 'Pyraminx',
    official: true,
  },
  {
    id: 'clock',
    name: 'Clock',
    official: true,
  },
  {
    id: 'skewb',
    name: 'Skewb',
    official: true,
  },
  {
    id: 'sq1',
    name: 'Square-1',
    official: true,
  },
  {
    id: '444bf',
    name: '4x4x4 Blindfolded',
    official: true,
  },
  {
    id: '555bf',
    name: '5x5x5 Blindfolded',
    official: true,
  },
  {
    id: '333mbf',
    name: '3x3x3 Multi-Blind',
    official: true,
  },
  {
    id: '333ft',
    name: '3x3x3 With Feet',
    official: false,
  },
  {
    id: 'magic',
    name: 'Magic',
    official: false,
  },
  {
    id: 'mmagic',
    name: 'Master Magic',
    official: false,
  },
  {
    id: '333mbo',
    name: '3x3x3 Multi-Blind Old Style',
    official: false,
  },
];

export function wcaEventById(id) {
  return wcaEvents.find(event => event.id === id) || null;
}
