/**
 * Baby Einstein Color Melody Guide
 * Companion visual web & mobile app for the 8-Key Baby Einstein & Hape Magic Touch Piano
 */

// ==================== KEY COLOR PRESETS ====================
const KEY_PRESETS = {
  standard: [
    { keyIndex: 0, note: 'C', freq: 261.63, name: 'RED', hex: '#EF4444', textHex: '#FFFFFF' },
    { keyIndex: 1, note: 'D', freq: 293.66, name: 'ORANGE', hex: '#F97316', textHex: '#FFFFFF' },
    { keyIndex: 2, note: 'E', freq: 329.63, name: 'YELLOW', hex: '#FACC15', textHex: '#1E293B' },
    { keyIndex: 3, note: 'F', freq: 349.23, name: 'GREEN', hex: '#22C55E', textHex: '#FFFFFF' },
    { keyIndex: 4, note: 'G', freq: 392.00, name: 'LIGHT BLUE', hex: '#38BDF8', textHex: '#0F172A' },
    { keyIndex: 5, note: 'A', freq: 440.00, name: 'BLUE', hex: '#2563EB', textHex: '#FFFFFF' },
    { keyIndex: 6, note: 'B', freq: 493.88, name: 'PURPLE', hex: '#A855F7', textHex: '#FFFFFF' },
    { keyIndex: 7, note: 'C2', displayNote: 'High C', freq: 523.25, name: 'PINK', hex: '#EC4899', textHex: '#FFFFFF' }
  ],
  classic: [
    { keyIndex: 0, note: 'C', freq: 261.63, name: 'RED', hex: '#E11D48', textHex: '#FFFFFF' },
    { keyIndex: 1, note: 'D', freq: 293.66, name: 'ORANGE', hex: '#EA580C', textHex: '#FFFFFF' },
    { keyIndex: 2, note: 'E', freq: 329.63, name: 'YELLOW', hex: '#EAB308', textHex: '#1E293B' },
    { keyIndex: 3, note: 'F', freq: 349.23, name: 'GREEN', hex: '#16A34A', textHex: '#FFFFFF' },
    { keyIndex: 4, note: 'G', freq: 392.00, name: 'TEAL', hex: '#06B6D4', textHex: '#0F172A' },
    { keyIndex: 5, note: 'A', freq: 440.00, name: 'DARK BLUE', hex: '#1D4ED8', textHex: '#FFFFFF' },
    { keyIndex: 6, note: 'B', freq: 493.88, name: 'MAGENTA', hex: '#DB2777', textHex: '#FFFFFF' },
    { keyIndex: 7, note: 'C2', displayNote: 'High C', freq: 523.25, name: 'VIOLET', hex: '#7C3AED', textHex: '#FFFFFF' }
  ],
  boomwhackers: [
    { keyIndex: 0, note: 'C', freq: 261.63, name: 'RED', hex: '#EF4444', textHex: '#FFFFFF' },
    { keyIndex: 1, note: 'D', freq: 293.66, name: 'ORANGE', hex: '#F97316', textHex: '#FFFFFF' },
    { keyIndex: 2, note: 'E', freq: 329.63, name: 'YELLOW', hex: '#FACC15', textHex: '#1E293B' },
    { keyIndex: 3, note: 'F', freq: 349.23, name: 'LIGHT GREEN', hex: '#84CC16', textHex: '#0F172A' },
    { keyIndex: 4, note: 'G', freq: 392.00, name: 'DARK GREEN', hex: '#10B981', textHex: '#FFFFFF' },
    { keyIndex: 5, note: 'A', freq: 440.00, name: 'PURPLE', hex: '#6366F1', textHex: '#FFFFFF' },
    { keyIndex: 6, note: 'B', freq: 493.88, name: 'PINK', hex: '#EC4899', textHex: '#FFFFFF' },
    { keyIndex: 7, note: 'C2', displayNote: 'High C', freq: 523.25, name: 'HIGH RED', hex: '#DC2626', textHex: '#FFFFFF' }
  ]
};

// Map note string ('C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2') to keyIndex 0..7
const NOTE_TO_INDEX = {
  C: 0,
  D: 1,
  E: 2,
  F: 3,
  G: 4,
  A: 5,
  B: 6,
  C2: 7
};

// ==================== BUILT-IN KID MELODIES ====================
// beats: 1 = quarter note, 2 = half note, 0.5 = eighth note
const DEFAULT_MELODIES = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    emoji: '⭐',
    bpm: 95,
    notes: [
      { n: 'C', b: 1, w: 'Twin-' }, { n: 'C', b: 1, w: '-kle' },
      { n: 'G', b: 1, w: 'twin-' }, { n: 'G', b: 1, w: '-kle' },
      { n: 'A', b: 1, w: 'lit-' },  { n: 'A', b: 1, w: '-tle' },
      { n: 'G', b: 2, w: 'star,' },
      { n: 'F', b: 1, w: 'How' },   { n: 'F', b: 1, w: 'I' },
      { n: 'E', b: 1, w: 'won-' },  { n: 'E', b: 1, w: '-der' },
      { n: 'D', b: 1, w: 'what' },  { n: 'D', b: 1, w: 'you' },
      { n: 'C', b: 2, w: 'are!' },
      { n: 'G', b: 1, w: 'Up' },    { n: 'G', b: 1, w: 'a-' },
      { n: 'F', b: 1, w: '-bove' }, { n: 'F', b: 1, w: 'the' },
      { n: 'E', b: 1, w: 'world' }, { n: 'E', b: 1, w: 'so' },
      { n: 'D', b: 2, w: 'high,' },
      { n: 'G', b: 1, w: 'Like' },  { n: 'G', b: 1, w: 'a' },
      { n: 'F', b: 1, w: 'dia-' },  { n: 'F', b: 1, w: '-mond' },
      { n: 'E', b: 1, w: 'in' },    { n: 'E', b: 1, w: 'the' },
      { n: 'D', b: 2, w: 'sky,' },
      { n: 'C', b: 1, w: 'Twin-' }, { n: 'C', b: 1, w: '-kle' },
      { n: 'G', b: 1, w: 'twin-' }, { n: 'G', b: 1, w: '-kle' },
      { n: 'A', b: 1, w: 'lit-' },  { n: 'A', b: 1, w: '-tle' },
      { n: 'G', b: 2, w: 'star,' },
      { n: 'F', b: 1, w: 'How' },   { n: 'F', b: 1, w: 'I' },
      { n: 'E', b: 1, w: 'won-' },  { n: 'E', b: 1, w: '-der' },
      { n: 'D', b: 1, w: 'what' },  { n: 'D', b: 1, w: 'you' },
      { n: 'C', b: 2, w: 'are!' }
    ]
  },
  {
    id: 'mary-lamb',
    title: 'Mary Had a Little Lamb',
    emoji: '🐑',
    bpm: 100,
    notes: [
      { n: 'E', b: 1, w: 'Ma-' },   { n: 'D', b: 1, w: '-ry' },
      { n: 'C', b: 1, w: 'had' },   { n: 'D', b: 1, w: 'a' },
      { n: 'E', b: 1, w: 'lit-' },  { n: 'E', b: 1, w: '-tle' },
      { n: 'E', b: 2, w: 'lamb,' },
      { n: 'D', b: 1, w: 'lit-' },  { n: 'D', b: 1, w: '-tle' },
      { n: 'D', b: 2, w: 'lamb,' },
      { n: 'E', b: 1, w: 'lit-' },  { n: 'G', b: 1, w: '-tle' },
      { n: 'G', b: 2, w: 'lamb,' },
      { n: 'E', b: 1, w: 'Ma-' },   { n: 'D', b: 1, w: '-ry' },
      { n: 'C', b: 1, w: 'had' },   { n: 'D', b: 1, w: 'a' },
      { n: 'E', b: 1, w: 'lit-' },  { n: 'E', b: 1, w: '-tle' },
      { n: 'E', b: 1, w: 'lamb,' }, { n: 'E', b: 1, w: 'Its' },
      { n: 'D', b: 1, w: 'fleece' },{ n: 'D', b: 1, w: 'was' },
      { n: 'E', b: 1, w: 'white' }, { n: 'D', b: 1, w: 'as' },
      { n: 'C', b: 2, w: 'snow!' }
    ]
  },
  {
    id: 'baby-shark',
    title: 'Baby Shark',
    emoji: '🦈',
    bpm: 105,
    notes: [
      { n: 'D', b: 1, w: 'Ba-' },   { n: 'E', b: 1, w: '-by' },
      { n: 'G', b: 0.75, w: 'shark,' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 0.75, w: 'doo' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 0.75, w: 'doo' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 1, w: 'doo!' },
      { n: 'D', b: 1, w: 'Ba-' },   { n: 'E', b: 1, w: '-by' },
      { n: 'G', b: 0.75, w: 'shark,' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 0.75, w: 'doo' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 0.75, w: 'doo' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 1, w: 'doo!' },
      { n: 'D', b: 1, w: 'Ba-' },   { n: 'E', b: 1, w: '-by' },
      { n: 'G', b: 0.75, w: 'shark,' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 0.75, w: 'doo' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 0.75, w: 'doo' }, { n: 'G', b: 0.75, w: 'doo' },
      { n: 'G', b: 1, w: 'Ba-' },   { n: 'G', b: 1, w: '-by' },
      { n: 'F', b: 2, w: 'shark!' }
    ]
  },
  {
    id: 'old-macdonald',
    title: 'Old MacDonald Had a Farm',
    emoji: '🚜',
    bpm: 100,
    notes: [
      { n: 'G', b: 1, w: 'Old' },   { n: 'G', b: 1, w: 'Mac-' },
      { n: 'G', b: 1, w: '-Don-' }, { n: 'D', b: 1, w: '-ald' },
      { n: 'E', b: 1, w: 'had' },   { n: 'E', b: 1, w: 'a' },
      { n: 'D', b: 2, w: 'farm,' },
      { n: 'B', b: 1, w: 'E-' },    { n: 'B', b: 1, w: '-I-' },
      { n: 'A', b: 1, w: '-E-' },   { n: 'A', b: 1, w: '-I-' },
      { n: 'G', b: 2, w: '-O!' },
      { n: 'D', b: 1, w: 'And' },   { n: 'G', b: 1, w: 'on' },
      { n: 'G', b: 1, w: 'that' },  { n: 'G', b: 1, w: 'farm' },
      { n: 'D', b: 1, w: 'he' },    { n: 'E', b: 1, w: 'had' },
      { n: 'E', b: 1, w: 'a' },     { n: 'D', b: 2, w: 'cow,' },
      { n: 'B', b: 1, w: 'E-' },    { n: 'B', b: 1, w: '-I-' },
      { n: 'A', b: 1, w: '-E-' },   { n: 'A', b: 1, w: '-I-' },
      { n: 'G', b: 2, w: '-O!' }
    ]
  },
  {
    id: 'row-boat',
    title: 'Row, Row, Row Your Boat',
    emoji: '🚣',
    bpm: 95,
    notes: [
      { n: 'C', b: 1.5, w: 'Row,' }, { n: 'C', b: 1.5, w: 'row,' },
      { n: 'C', b: 1, w: 'row' },    { n: 'D', b: 0.75, w: 'your' },
      { n: 'E', b: 1.5, w: 'boat,' },
      { n: 'E', b: 1, w: 'Gent-' },  { n: 'D', b: 0.75, w: '-ly' },
      { n: 'E', b: 1, w: 'down' },   { n: 'F', b: 0.75, w: 'the' },
      { n: 'G', b: 2, w: 'stream,' },
      { n: 'C2', b: 0.75, w: 'Mer-' },{ n: 'C2', b: 0.75, w: '-ri-' },
      { n: 'C2', b: 0.75, w: '-ly,' },{ n: 'G', b: 0.75, w: 'mer-' },
      { n: 'G', b: 0.75, w: '-ri-' },{ n: 'G', b: 0.75, w: '-ly,' },
      { n: 'E', b: 0.75, w: 'mer-' },{ n: 'E', b: 0.75, w: '-ri-' },
      { n: 'E', b: 0.75, w: '-ly,' },{ n: 'C', b: 0.75, w: 'life' },
      { n: 'G', b: 1, w: 'is' },     { n: 'F', b: 0.75, w: 'but' },
      { n: 'E', b: 1, w: 'a' },      { n: 'D', b: 0.75, w: 'sweet' },
      { n: 'C', b: 2, w: 'dream!' }
    ]
  },
  {
    id: 'ode-to-joy',
    title: 'Ode to Joy (Beethoven)',
    emoji: '🎻',
    bpm: 100,
    notes: [
      { n: 'E', b: 1, w: 'Joy-' },  { n: 'E', b: 1, w: '-ful,' },
      { n: 'F', b: 1, w: 'joy-' },  { n: 'G', b: 1, w: '-ful,' },
      { n: 'G', b: 1, w: 'we' },    { n: 'F', b: 1, w: 'a-' },
      { n: 'E', b: 1, w: '-dore' }, { n: 'D', b: 1, w: 'Thee,' },
      { n: 'C', b: 1, w: 'Sing' },  { n: 'C', b: 1, w: 'to-' },
      { n: 'D', b: 1, w: '-geth-' },{ n: 'E', b: 1, w: '-er' },
      { n: 'E', b: 1.5, w: 'in' },  { n: 'D', b: 0.5, w: 'the' },
      { n: 'D', b: 2, w: 'sun!' },
      { n: 'E', b: 1, w: 'Play' },  { n: 'E', b: 1, w: 'the' },
      { n: 'F', b: 1, w: 'col-' },  { n: 'G', b: 1, w: '-ors,' },
      { n: 'G', b: 1, w: 'on' },    { n: 'F', b: 1, w: 'your' },
      { n: 'E', b: 1, w: 'pia-' },  { n: 'D', b: 1, w: '-no,' },
      { n: 'C', b: 1, w: 'Mu-' },   { n: 'C', b: 1, w: '-sic' },
      { n: 'D', b: 1, w: 'is' },    { n: 'E', b: 1, w: 'so' },
      { n: 'D', b: 1.5, w: 'much' },{ n: 'C', b: 0.5, w: 'sweet' },
      { n: 'C', b: 2, w: 'fun!' }
    ]
  },
  {
    id: 'london-bridge',
    title: 'London Bridge Is Falling Down',
    emoji: '🌉',
    bpm: 100,
    notes: [
      { n: 'G', b: 1.5, w: 'Lon-' }, { n: 'A', b: 0.5, w: '-don' },
      { n: 'G', b: 1, w: 'Bridge' }, { n: 'F', b: 1, w: 'is' },
      { n: 'E', b: 1, w: 'fall-' },  { n: 'F', b: 1, w: '-ing' },
      { n: 'G', b: 2, w: 'down,' },
      { n: 'D', b: 1, w: 'Fall-' },  { n: 'E', b: 1, w: '-ing' },
      { n: 'F', b: 2, w: 'down,' },
      { n: 'E', b: 1, w: 'Fall-' },  { n: 'F', b: 1, w: '-ing' },
      { n: 'G', b: 2, w: 'down,' },
      { n: 'G', b: 1.5, w: 'Lon-' }, { n: 'A', b: 0.5, w: '-don' },
      { n: 'G', b: 1, w: 'Bridge' }, { n: 'F', b: 1, w: 'is' },
      { n: 'E', b: 1, w: 'fall-' },  { n: 'F', b: 1, w: '-ing' },
      { n: 'G', b: 2, w: 'down,' },
      { n: 'D', b: 1, w: 'My' },     { n: 'G', b: 1, w: 'fair' },
      { n: 'E', b: 1, w: 'la-' },    { n: 'C', b: 2, w: '-dy!' }
    ]
  },
  {
    id: 'jingle-bells',
    title: 'Jingle Bells (Chorus)',
    emoji: '🔔',
    bpm: 105,
    notes: [
      { n: 'E', b: 1, w: 'Jin-' },  { n: 'E', b: 1, w: '-gle' },
      { n: 'E', b: 2, w: 'bells,' },
      { n: 'E', b: 1, w: 'jin-' },  { n: 'E', b: 1, w: '-gle' },
      { n: 'E', b: 2, w: 'bells,' },
      { n: 'E', b: 1, w: 'Jin-' },  { n: 'G', b: 1, w: '-gle' },
      { n: 'C', b: 1.5, w: 'all' }, { n: 'D', b: 0.5, w: 'the' },
      { n: 'E', b: 2, w: 'way!' },
      { n: 'F', b: 1, w: 'Oh' },    { n: 'F', b: 1, w: 'what' },
      { n: 'F', b: 1.5, w: 'fun' }, { n: 'F', b: 0.5, w: 'it' },
      { n: 'F', b: 1, w: 'is' },    { n: 'E', b: 1, w: 'to' },
      { n: 'E', b: 1, w: 'ride' },  { n: 'E', b: 1, w: 'in a' },
      { n: 'G', b: 1, w: 'one-' },  { n: 'G', b: 1, w: '-horse' },
      { n: 'F', b: 1, w: 'o-' },    { n: 'D', b: 1, w: '-pen' },
      { n: 'C', b: 2, w: 'sleigh!' }
    ]
  },
  {
    id: 'wheels-on-bus',
    title: 'The Wheels on the Bus',
    emoji: '🚌',
    bpm: 98,
    notes: [
      { n: 'C', b: 1, w: 'The' },    { n: 'F', b: 1, w: 'wheels' },
      { n: 'F', b: 0.75, w: 'on' },  { n: 'F', b: 0.75, w: 'the' },
      { n: 'F', b: 1, w: 'bus' },    { n: 'A', b: 1, w: 'go' },
      { n: 'C2', b: 1, w: 'round' }, { n: 'A', b: 1, w: 'and' },
      { n: 'F', b: 2, w: 'round,' },
      { n: 'G', b: 1, w: 'Round' },  { n: 'E', b: 1, w: 'and' },
      { n: 'C', b: 2, w: 'round,' },
      { n: 'A', b: 1, w: 'Round' },  { n: 'G', b: 1, w: 'and' },
      { n: 'F', b: 2, w: 'round!' }
    ]
  },
  {
    id: 'rainbow-scale',
    title: 'Rainbow Scale (Up & Down)',
    emoji: '🌈',
    bpm: 90,
    notes: [
      { n: 'C', b: 1, w: 'Red!' },
      { n: 'D', b: 1, w: 'Orange!' },
      { n: 'E', b: 1, w: 'Yellow!' },
      { n: 'F', b: 1, w: 'Green!' },
      { n: 'G', b: 1, w: 'Light Blue!' },
      { n: 'A', b: 1, w: 'Blue!' },
      { n: 'B', b: 1, w: 'Purple!' },
      { n: 'C2', b: 2, w: 'Pink!' },
      { n: 'B', b: 1, w: 'Purple!' },
      { n: 'A', b: 1, w: 'Blue!' },
      { n: 'G', b: 1, w: 'Light Blue!' },
      { n: 'F', b: 1, w: 'Green!' },
      { n: 'E', b: 1, w: 'Yellow!' },
      { n: 'D', b: 1, w: 'Orange!' },
      { n: 'C', b: 2, w: 'Red!' }
    ]
  },
  {
    id: 'frere-jacques',
    title: 'Are You Sleeping? (Frère Jacques)',
    emoji: '🛌',
    bpm: 100,
    notes: [
      { n: 'C', b: 1, w: 'Are' },    { n: 'D', b: 1, w: 'you' },
      { n: 'E', b: 1, w: 'sleep-' }, { n: 'C', b: 1, w: '-ing?' },
      { n: 'C', b: 1, w: 'Are' },    { n: 'D', b: 1, w: 'you' },
      { n: 'E', b: 1, w: 'sleep-' }, { n: 'C', b: 1, w: '-ing?' },
      { n: 'E', b: 1, w: 'Bro-' },   { n: 'F', b: 1, w: '-ther' },
      { n: 'G', b: 2, w: 'John?' },
      { n: 'E', b: 1, w: 'Bro-' },   { n: 'F', b: 1, w: '-ther' },
      { n: 'G', b: 2, w: 'John?' },
      { n: 'G', b: 0.75, w: 'Morn-' },{ n: 'A', b: 0.75, w: '-ing' },
      { n: 'G', b: 0.75, w: 'bells' },{ n: 'F', b: 0.75, w: 'are' },
      { n: 'E', b: 1, w: 'ring-' },  { n: 'C', b: 1, w: '-ing!' },
      { n: 'C', b: 1, w: 'Ding,' },  { n: 'G', b: 1, w: 'dang,' },
      { n: 'C', b: 2, w: 'dong!' }
    ]
  },
  {
    id: 'itsy-bitsy-spider',
    title: 'Itsy Bitsy Spider',
    emoji: '🕷️',
    bpm: 96,
    notes: [
      { n: 'G', b: 1, w: 'The' },   { n: 'C', b: 1, w: 'it-' },
      { n: 'C', b: 1, w: '-sy' },   { n: 'C', b: 1, w: 'bit-' },
      { n: 'D', b: 1, w: '-sy' },   { n: 'E', b: 1.5, w: 'spi-' },
      { n: 'E', b: 1.5, w: '-der' },
      { n: 'E', b: 1, w: 'climbed' },{ n: 'D', b: 1, w: 'up' },
      { n: 'C', b: 1, w: 'the' },   { n: 'D', b: 1, w: 'wa-' },
      { n: 'E', b: 1, w: '-ter' },  { n: 'C', b: 2, w: 'spout,' },
      { n: 'E', b: 1.5, w: 'Down' },{ n: 'E', b: 1, w: 'came' },
      { n: 'F', b: 1, w: 'the' },   { n: 'G', b: 2, w: 'rain,' },
      { n: 'G', b: 1, w: 'and' },   { n: 'F', b: 1, w: 'washed' },
      { n: 'E', b: 1, w: 'the' },   { n: 'F', b: 1, w: 'spi-' },
      { n: 'G', b: 1, w: '-der' },  { n: 'E', b: 2, w: 'out!' }
    ]
  },
  {
    id: 'bingo',
    title: 'B-I-N-G-O',
    emoji: '🐶',
    bpm: 102,
    notes: [
      { n: 'G', b: 1, w: 'There' }, { n: 'C2', b: 1, w: 'was' },
      { n: 'C2', b: 1, w: 'a' },    { n: 'G', b: 1, w: 'far-' },
      { n: 'G', b: 1, w: '-mer' },  { n: 'A', b: 1, w: 'had' },
      { n: 'A', b: 1, w: 'a' },     { n: 'G', b: 1, w: 'dog,' },
      { n: 'G', b: 1, w: 'and' },   { n: 'C2', b: 1, w: 'Bin-' },
      { n: 'C2', b: 1, w: '-go' },   { n: 'D', b: 1, w: 'was' },
      { n: 'D', b: 1, w: 'his' },   { n: 'E', b: 2, w: 'name-o!' },
      { n: 'F', b: 1.5, w: 'B' },   { n: 'F', b: 1, w: 'I' },
      { n: 'D', b: 1.5, w: 'N' },   { n: 'D', b: 1, w: 'G' },
      { n: 'E', b: 1.5, w: 'O!' },
      { n: 'G', b: 1, w: 'And' },   { n: 'G', b: 1, w: 'Bin-' },
      { n: 'F', b: 1, w: '-go' },   { n: 'D', b: 1, w: 'was' },
      { n: 'E', b: 1, w: 'his' },   { n: 'C', b: 2, w: 'name-o!' }
    ]
  },
  {
    id: 'baa-baa-black-sheep',
    title: 'Baa, Baa, Black Sheep',
    emoji: '🧶',
    bpm: 94,
    notes: [
      { n: 'C', b: 1, w: 'Baa,' },  { n: 'C', b: 1, w: 'baa,' },
      { n: 'G', b: 1, w: 'black' }, { n: 'G', b: 1, w: 'sheep,' },
      { n: 'A', b: 0.75, w: 'Have' },{ n: 'A', b: 0.75, w: 'you' },
      { n: 'A', b: 0.75, w: 'a-' }, { n: 'A', b: 0.75, w: '-ny' },
      { n: 'G', b: 2, w: 'wool?' },
      { n: 'F', b: 1, w: 'Yes' },   { n: 'F', b: 1, w: 'sir,' },
      { n: 'E', b: 1, w: 'yes' },   { n: 'E', b: 1, w: 'sir,' },
      { n: 'D', b: 1, w: 'Three' }, { n: 'D', b: 1, w: 'bags' },
      { n: 'C', b: 2, w: 'full!' }
    ]
  },
  {
    id: 'happy-song-c',
    title: 'If You Are Happy and You Know It',
    emoji: '👏',
    bpm: 102,
    notes: [
      { n: 'C', b: 0.75, w: 'If' },  { n: 'C', b: 0.75, w: 'you\'re' },
      { n: 'F', b: 1, w: 'hap-' },   { n: 'F', b: 1, w: '-py' },
      { n: 'F', b: 1, w: 'and' },    { n: 'F', b: 1, w: 'you' },
      { n: 'F', b: 1, w: 'know' },   { n: 'F', b: 1, w: 'it' },
      { n: 'E', b: 1, w: 'clap' },   { n: 'F', b: 1, w: 'your' },
      { n: 'G', b: 2, w: 'hands! 👏' },
      { n: 'C', b: 0.75, w: 'If' },  { n: 'C', b: 0.75, w: 'you\'re' },
      { n: 'G', b: 1, w: 'hap-' },   { n: 'G', b: 1, w: '-py' },
      { n: 'G', b: 1, w: 'and' },    { n: 'G', b: 1, w: 'you' },
      { n: 'G', b: 1, w: 'know' },   { n: 'G', b: 1, w: 'it' },
      { n: 'F', b: 1, w: 'clap' },   { n: 'G', b: 1, w: 'your' },
      { n: 'A', b: 2, w: 'hands! 👏' }
    ]
  },
  {
    id: 'hot-cross-buns',
    title: 'Hot Cross Buns (Easy 3-Color)',
    emoji: '🥐',
    bpm: 92,
    notes: [
      { n: 'E', b: 1, w: 'Hot' },   { n: 'D', b: 1, w: 'cross' },
      { n: 'C', b: 2, w: 'buns!' },
      { n: 'E', b: 1, w: 'Hot' },   { n: 'D', b: 1, w: 'cross' },
      { n: 'C', b: 2, w: 'buns!' },
      { n: 'C', b: 0.75, w: 'One' },{ n: 'C', b: 0.75, w: 'a' },
      { n: 'C', b: 0.75, w: 'pen-' },{ n: 'C', b: 0.75, w: '-ny,' },
      { n: 'D', b: 0.75, w: 'two' },{ n: 'D', b: 0.75, w: 'a' },
      { n: 'D', b: 0.75, w: 'pen-' },{ n: 'D', b: 0.75, w: '-ny,' },
      { n: 'E', b: 1, w: 'Hot' },   { n: 'D', b: 1, w: 'cross' },
      { n: 'C', b: 2, w: 'buns!' }
    ]
  }
];

// ==================== APPLICATION STATE ====================
const state = {
  keys: JSON.parse(JSON.stringify(KEY_PRESETS.standard)),
  melodies: [...DEFAULT_MELODIES],
  currentSongIndex: 0,
  currentNoteIndex: 0,
  mode: 'auto', // 'auto' (timed rhythm) | 'step' (tap to advance)
  viewStyle: 'split', // 'split' (beacon + falling lanes + bottom keys) | 'beacon-only' (giant card + bottom keys)
  isPlaying: false,
  isLooping: true,
  speedMultiplier: 0.75, // 0.5 (Slow), 0.75 (Kid), 1.0 (Normal)
  soundEnabled: false, // Muted by default since kid plays physical wooden Baby Einstein piano
  noteElapsedMs: 0,
  lastFrameTime: 0,
  rafId: null,
  customBuilderNotes: [],
  customNoteBeats: 1,
  audioCtx: null,
  wakeLock: null
};

// Load saved settings from localStorage
function loadSavedSettings() {
  try {
    const savedKeys = localStorage.getItem('bep_custom_keys_v1');
    if (savedKeys) {
      const parsed = JSON.parse(savedKeys);
      if (Array.isArray(parsed) && parsed.length === 8) {
        state.keys = parsed;
      }
    }
    const savedCustomSongs = localStorage.getItem('bep_custom_songs_v1');
    if (savedCustomSongs) {
      const parsedSongs = JSON.parse(savedCustomSongs);
      if (Array.isArray(parsedSongs)) {
        state.melodies = [...DEFAULT_MELODIES, ...parsedSongs];
      }
    }
  } catch (e) {
    console.warn('Could not load saved settings:', e);
  }
}

function saveCustomKeys() {
  try {
    localStorage.setItem('bep_custom_keys_v1', JSON.stringify(state.keys));
  } catch (e) {}
}

function saveCustomSongs() {
  try {
    const customOnly = state.melodies.filter((m) => m.isCustom);
    localStorage.setItem('bep_custom_songs_v1', JSON.stringify(customOnly));
  } catch (e) {}
}

// Determine black or white contrasting text for any hex color
function getContrastText(hex) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16) || 0;
  const g = parseInt(clean.substring(2, 4), 16) || 0;
  const b = parseInt(clean.substring(4, 6), 16) || 0;
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 155 ? '#0F172A' : '#FFFFFF';
}

// ==================== OPTIONAL HELPER AUDIO SYNTH ====================
function playHelperTone(keyIndex, durationMs = 350) {
  if (!state.soundEnabled) return;
  try {
    if (!state.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      state.audioCtx = new AudioContextClass();
    }
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
    const keyInfo = state.keys[keyIndex];
    if (!keyInfo) return;

    const osc = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(keyInfo.freq, state.audioCtx.currentTime);

    const now = state.audioCtx.currentTime;
    const durSec = Math.max(0.18, Math.min(1.2, durationMs / 1000));

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + durSec);

    osc.connect(gain);
    gain.connect(state.audioCtx.destination);

    osc.start(now);
    osc.stop(now + durSec + 0.02);
  } catch (e) {
    // Ignore audio context restrictions
  }
}

// ==================== SCREEN WAKE LOCK ====================
async function requestScreenWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      state.wakeLock = await navigator.wakeLock.request('screen');
    } catch (err) {
      // Ignore if battery saver or unsupported
    }
  }
}

// ==================== DOM ELEMENTS ====================
const dom = {};

function cacheDom() {
  dom.btnSongMenu = document.getElementById('btnSongMenu');
  dom.currentSongEmoji = document.getElementById('currentSongEmoji');
  dom.currentSongTitle = document.getElementById('currentSongTitle');

  dom.modeAutoBtn = document.getElementById('modeAutoBtn');
  dom.modeStepBtn = document.getElementById('modeStepBtn');

  dom.btnViewStyle = document.getElementById('btnViewStyle');
  dom.viewStyleIcon = document.getElementById('viewStyleIcon');
  dom.btnSoundToggle = document.getElementById('btnSoundToggle');
  dom.soundToggleIcon = document.getElementById('soundToggleIcon');
  dom.btnColorsModal = document.getElementById('btnColorsModal');
  dom.btnFullscreen = document.getElementById('btnFullscreen');

  dom.btnRestart = document.getElementById('btnRestart');
  dom.btnPlayPause = document.getElementById('btnPlayPause');
  dom.playPauseIcon = document.getElementById('playPauseIcon');
  dom.playPauseText = document.getElementById('playPauseText');
  dom.btnLoop = document.getElementById('btnLoop');

  dom.noteStepCounter = document.getElementById('noteStepCounter');
  dom.lyricPreview = document.getElementById('lyricPreview');
  dom.progressTrack = document.getElementById('progressTrack');
  dom.progressBar = document.getElementById('progressBar');
  dom.speedControlGroup = document.getElementById('speedControlGroup');

  dom.visualStage = document.getElementById('visualStage');
  dom.countdownOverlay = document.getElementById('countdownOverlay');
  dom.countdownNumber = document.getElementById('countdownNumber');
  dom.celebrationOverlay = document.getElementById('celebrationOverlay');
  dom.btnReplaySong = document.getElementById('btnReplaySong');
  dom.btnNextSong = document.getElementById('btnNextSong');

  dom.sequenceRibbon = document.getElementById('sequenceRibbon');
  dom.activeBeaconTapZone = document.getElementById('activeBeaconTapZone');
  dom.activeColorBeacon = document.getElementById('activeColorBeacon');
  dom.beaconKeyNumber = document.getElementById('beaconKeyNumber');
  dom.beaconColorName = document.getElementById('beaconColorName');
  dom.beaconNoteLetter = document.getElementById('beaconNoteLetter');
  dom.beaconDurationFill = document.getElementById('beaconDurationFill');

  dom.nextNotePreview = document.getElementById('nextNotePreview');
  dom.nextColorDot = document.getElementById('nextColorDot');
  dom.nextColorText = document.getElementById('nextColorText');
  dom.stepPromptHint = document.getElementById('stepPromptHint');

  dom.laneGrid = document.getElementById('laneGrid');
  dom.fallingNotesLayer = document.getElementById('fallingNotesLayer');
  dom.pianoGuideBar = document.getElementById('pianoGuideBar');

  dom.songModal = document.getElementById('songModal');
  dom.btnCloseSongModal = document.getElementById('btnCloseSongModal');
  dom.songGrid = document.getElementById('songGrid');
  dom.customKeyButtons = document.getElementById('customKeyButtons');
  dom.quickNotesInput = document.getElementById('quickNotesInput');
  dom.btnParseQuickNotes = document.getElementById('btnParseQuickNotes');
  dom.customSequencePreview = document.getElementById('customSequencePreview');
  dom.customSongEmojiInput = document.getElementById('customSongEmojiInput');
  dom.customSongNameInput = document.getElementById('customSongNameInput');
  dom.btnClearCustom = document.getElementById('btnClearCustom');
  dom.btnSavePlayCustom = document.getElementById('btnSavePlayCustom');
  dom.btnExportSongs = document.getElementById('btnExportSongs');
  dom.inputImportSongs = document.getElementById('inputImportSongs');

  dom.colorsModal = document.getElementById('colorsModal');
  dom.btnCloseColorsModal = document.getElementById('btnCloseColorsModal');
  dom.colorCustomizerList = document.getElementById('colorCustomizerList');
  dom.btnResetColors = document.getElementById('btnResetColors');
  dom.btnDoneColors = document.getElementById('btnDoneColors');
}

// ==================== RENDERING & UI UPDATES ====================
function getCurrentSong() {
  return state.melodies[state.currentSongIndex] || state.melodies[0];
}

function getNoteDurationMs(noteObj, song) {
  const baseBpm = song.bpm || 96;
  const beatMs = (60 / baseBpm) * 1000;
  return (noteObj.b || 1) * beatMs / state.speedMultiplier;
}

function buildBottomPianoBarAndLanes() {
  dom.laneGrid.innerHTML = '';
  dom.pianoGuideBar.innerHTML = '';

  state.keys.forEach((keyInfo, idx) => {
    // 1. Vertical lane column
    const laneCol = document.createElement('div');
    laneCol.className = 'lane-column';
    laneCol.dataset.keyIndex = idx;
    dom.laneGrid.appendChild(laneCol);

    // 2. Bottom 8-key colored guide tile
    const keyTile = document.createElement('div');
    keyTile.className = 'key-guide-tile';
    keyTile.dataset.keyIndex = idx;
    keyTile.style.backgroundColor = keyInfo.hex;
    keyTile.style.color = keyInfo.textHex;
    keyTile.style.setProperty('--tile-color', keyInfo.hex);

    const displayNote = keyInfo.displayNote || keyInfo.note;
    keyTile.innerHTML = `
      <span class="key-target-arrow">⬇</span>
      <span class="key-tile-number">${idx + 1}</span>
      <span class="key-tile-note">${displayNote}</span>
      <span class="key-tile-color-label">${keyInfo.name}</span>
    `;

    // Clicking a bottom key guide tile in Step mode advances if it matches (or advances any tap for toddlers)
    keyTile.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      if (state.soundEnabled) {
        playHelperTone(idx, 300);
      }
      if (state.mode === 'step') {
        advanceStepNote();
      }
    });

    dom.pianoGuideBar.appendChild(keyTile);
  });
}

function buildSequenceRibbon() {
  const song = getCurrentSong();
  dom.sequenceRibbon.innerHTML = '';

  song.notes.forEach((noteItem, idx) => {
    const keyIdx = NOTE_TO_INDEX[noteItem.n] ?? 0;
    const keyInfo = state.keys[keyIdx];
    const dot = document.createElement('div');
    dot.className = 'ribbon-dot';
    dot.dataset.noteIndex = idx;
    dot.style.backgroundColor = keyInfo.hex;
    dot.style.color = keyInfo.textHex;
    dot.textContent = idx + 1;

    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      jumpToNote(idx);
    });

    dom.sequenceRibbon.appendChild(dot);
  });
}

function updateActiveVisuals(triggerPop = false) {
  const song = getCurrentSong();
  const totalNotes = song.notes.length;
  const currentNote = song.notes[state.currentNoteIndex] || song.notes[0];
  const currentKeyIdx = NOTE_TO_INDEX[currentNote.n] ?? 0;
  const currentKey = state.keys[currentKeyIdx];

  const nextNoteIndex = (state.currentNoteIndex + 1) % totalNotes;
  const isLastNote = state.currentNoteIndex === totalNotes - 1;
  const nextNote = song.notes[nextNoteIndex];
  const nextKeyIdx = NOTE_TO_INDEX[nextNote.n] ?? 0;
  const nextKey = state.keys[nextKeyIdx];

  // Header song info
  dom.currentSongEmoji.textContent = song.emoji || '🎵';
  dom.currentSongTitle.textContent = song.title;

  // Step badge & lyrics
  dom.noteStepCounter.textContent = `Note ${state.currentNoteIndex + 1} / ${totalNotes}`;
  const lyricWord = currentNote.w ? `"${currentNote.w}"` : '';
  dom.lyricPreview.textContent = `${lyricWord} — Press ${currentKey.name} (Key ${currentKeyIdx + 1})`;

  // Overall progress bar
  const progressPct = ((state.currentNoteIndex + 1) / totalNotes) * 100;
  dom.progressBar.style.width = `${progressPct}%`;

  // Big Active Color Beacon
  document.documentElement.style.setProperty('--active-key-color', currentKey.hex);
  document.documentElement.style.setProperty('--active-key-text', currentKey.textHex);
  dom.activeColorBeacon.style.backgroundColor = currentKey.hex;
  dom.activeColorBeacon.style.color = currentKey.textHex;

  dom.beaconKeyNumber.textContent = `KEY ${currentKeyIdx + 1}`;
  dom.beaconColorName.textContent = currentKey.name;
  dom.beaconNoteLetter.textContent = currentKey.displayNote || currentKey.note;

  if (triggerPop) {
    dom.activeColorBeacon.classList.remove('pop-anim');
    void dom.activeColorBeacon.offsetWidth;
    dom.activeColorBeacon.classList.add('pop-anim');
    setTimeout(() => dom.activeColorBeacon.classList.remove('pop-anim'), 140);
  }

  // Next Note Preview Pill
  if (isLastNote && !state.isLooping) {
    dom.nextColorDot.style.backgroundColor = '#FACC15';
    dom.nextColorText.textContent = 'Finish! 🎉';
  } else {
    dom.nextColorDot.style.backgroundColor = nextKey.hex;
    dom.nextColorText.textContent = `${nextKey.name} (${nextKey.displayNote || nextKey.note})`;
  }

  // Prompt hint text
  if (state.mode === 'step') {
    dom.stepPromptHint.textContent = `👆 Play ${currentKey.name} on your piano, then tap screen for next color!`;
  } else {
    dom.stepPromptHint.textContent = state.isPlaying
      ? `🎹 Play ${currentKey.name} (Key ${currentKeyIdx + 1}) on your Baby Einstein piano!`
      : `▶ Press Play or tap the big color card to start timed rhythm!`;
  }

  // Update Sequence Ribbon highlighting & center scroll
  const ribbonDots = dom.sequenceRibbon.querySelectorAll('.ribbon-dot');
  ribbonDots.forEach((dot, idx) => {
    dot.classList.remove('past', 'current', 'upcoming-1');
    if (idx < state.currentNoteIndex) {
      dot.classList.add('past');
    } else if (idx === state.currentNoteIndex) {
      dot.classList.add('current');
    } else if (idx === state.currentNoteIndex + 1) {
      dot.classList.add('upcoming-1');
    }
  });

  // Shift sequence ribbon so current note stays centered
  const dotStepWidth = 42; // 34px + 8px gap
  const centerOffset = (totalNotes / 2 - state.currentNoteIndex - 0.5) * dotStepWidth;
  dom.sequenceRibbon.style.transform = `translateX(${centerOffset}px)`;

  // Update Bottom 8-Key Guide Bar & Lanes
  const laneCols = dom.laneGrid.querySelectorAll('.lane-column');
  laneCols.forEach((col, idx) => {
    if (idx === currentKeyIdx) {
      col.classList.add('active-lane');
      col.style.setProperty('--lane-glow', `${currentKey.hex}55`);
    } else {
      col.classList.remove('active-lane');
    }
  });

  const keyTiles = dom.pianoGuideBar.querySelectorAll('.key-guide-tile');
  keyTiles.forEach((tile, idx) => {
    tile.classList.remove('active-target', 'next-target');
    if (idx === currentKeyIdx) {
      tile.classList.add('active-target');
    } else if (idx === nextKeyIdx && (!isLastNote || state.isLooping)) {
      tile.classList.add('next-target');
    }
  });

  // Render falling rhythm blocks aligned with the 8 physical keys
  renderFallingNoteBlocks();
}

// ==================== FALLING RHYTHM BLOCKS ====================
function renderFallingNoteBlocks() {
  if (state.viewStyle === 'beacon-only') return;

  const song = getCurrentSong();
  const notes = song.notes;
  const currentNote = notes[state.currentNoteIndex];
  const currentDurMs = getNoteDurationMs(currentNote, song);
  const fractionCompleted = state.mode === 'auto'
    ? Math.min(1, Math.max(0, state.noteElapsedMs / currentDurMs))
    : 0;

  // Update duration bar inside active beacon
  dom.beaconDurationFill.style.transform = `scaleX(${1 - fractionCompleted})`;

  // Lookahead window in beats
  const VISIBLE_WINDOW_BEATS = 5.5;
  const currentNoteBeats = currentNote.b || 1;
  const currentBeatOffset = fractionCompleted * currentNoteBeats;

  dom.fallingNotesLayer.innerHTML = '';

  let accumulatedBeatsFromCurrentStart = 0;

  // Render current note + upcoming notes that fall within the visible window
  for (let i = state.currentNoteIndex; i < notes.length; i++) {
    const noteItem = notes[i];
    const noteBeats = noteItem.b || 1;
    const noteStartRelBeat = accumulatedBeatsFromCurrentStart - currentBeatOffset;
    const noteEndRelBeat = noteStartRelBeat + noteBeats;

    if (noteStartRelBeat > VISIBLE_WINDOW_BEATS) break;

    if (noteEndRelBeat > 0) {
      const keyIdx = NOTE_TO_INDEX[noteItem.n] ?? 0;
      const keyInfo = state.keys[keyIdx];

      const clampedStart = Math.max(0, noteStartRelBeat);
      const clampedEnd = Math.min(VISIBLE_WINDOW_BEATS, noteEndRelBeat);

      // Bottom of falling container (100%) is the hit line right above the 8 keys
      const bottomPct = (clampedStart / VISIBLE_WINDOW_BEATS) * 100;
      const heightPct = Math.max(8, ((clampedEnd - clampedStart) / VISIBLE_WINDOW_BEATS) * 100 - 1.5);

      const block = document.createElement('div');
      block.className = 'falling-note-block' + (i === state.currentNoteIndex ? ' is-current' : '');
      block.style.left = `calc(${keyIdx * 12.5}% + 4px)`;
      block.style.width = `calc(12.5% - 8px)`;
      block.style.bottom = `${bottomPct}%`;
      block.style.height = `${heightPct}%`;
      block.style.backgroundColor = keyInfo.hex;
      block.style.color = keyInfo.textHex;
      block.textContent = keyInfo.displayNote || keyInfo.note;

      dom.fallingNotesLayer.appendChild(block);
    }

    accumulatedBeatsFromCurrentStart += noteBeats;
  }
}

// ==================== TIMING & PLAYBACK ENGINE ====================
function startPlayback() {
  dom.celebrationOverlay.classList.add('hidden');
  if (state.isPlaying) return;

  state.isPlaying = true;
  state.lastFrameTime = performance.now();
  updatePlayPauseButtonUI();
  requestScreenWakeLock();

  // Play initial note helper sound if enabled
  const song = getCurrentSong();
  const currentNote = song.notes[state.currentNoteIndex];
  const keyIdx = NOTE_TO_INDEX[currentNote.n] ?? 0;
  playHelperTone(keyIdx, getNoteDurationMs(currentNote, song));

  updateActiveVisuals(true);
  state.rafId = requestAnimationFrame(animationLoop);
}

function pausePlayback() {
  state.isPlaying = false;
  if (state.rafId) {
    cancelAnimationFrame(state.rafId);
    state.rafId = null;
  }
  updatePlayPauseButtonUI();
  updateActiveVisuals(false);
}

function togglePlayPause() {
  if (state.mode === 'step') {
    // In step mode, pressing Play advances to next step or switches to auto
    advanceStepNote();
    return;
  }
  if (state.isPlaying) {
    pausePlayback();
  } else {
    startPlayback();
  }
}

function restartMelody() {
  pausePlayback();
  dom.celebrationOverlay.classList.add('hidden');
  state.currentNoteIndex = 0;
  state.noteElapsedMs = 0;
  dom.beaconDurationFill.style.transform = 'scaleX(1)';
  updateActiveVisuals(true);
}

function jumpToNote(index) {
  const song = getCurrentSong();
  if (index < 0 || index >= song.notes.length) return;
  state.currentNoteIndex = index;
  state.noteElapsedMs = 0;
  const noteObj = song.notes[index];
  playHelperTone(NOTE_TO_INDEX[noteObj.n] ?? 0, getNoteDurationMs(noteObj, song));
  updateActiveVisuals(true);
}

function advanceStepNote() {
  dom.celebrationOverlay.classList.add('hidden');
  const song = getCurrentSong();
  const nextIndex = state.currentNoteIndex + 1;

  if (nextIndex < song.notes.length) {
    state.currentNoteIndex = nextIndex;
    state.noteElapsedMs = 0;
    const noteObj = song.notes[state.currentNoteIndex];
    playHelperTone(NOTE_TO_INDEX[noteObj.n] ?? 0, 350);
    updateActiveVisuals(true);
  } else {
    if (state.isLooping) {
      state.currentNoteIndex = 0;
      state.noteElapsedMs = 0;
      const noteObj = song.notes[0];
      playHelperTone(NOTE_TO_INDEX[noteObj.n] ?? 0, 350);
      updateActiveVisuals(true);
    } else {
      showCelebration();
    }
  }
}

function animationLoop(now) {
  if (!state.isPlaying || state.mode !== 'auto') return;

  const dt = now - state.lastFrameTime;
  state.lastFrameTime = now;
  state.noteElapsedMs += dt;

  const song = getCurrentSong();
  const currentNote = song.notes[state.currentNoteIndex];
  const targetDurationMs = getNoteDurationMs(currentNote, song);

  if (state.noteElapsedMs >= targetDurationMs) {
    state.noteElapsedMs -= targetDurationMs;
    const nextIdx = state.currentNoteIndex + 1;

    if (nextIdx < song.notes.length) {
      state.currentNoteIndex = nextIdx;
      const nextNoteObj = song.notes[state.currentNoteIndex];
      const nextKeyIdx = NOTE_TO_INDEX[nextNoteObj.n] ?? 0;
      playHelperTone(nextKeyIdx, getNoteDurationMs(nextNoteObj, song));
      updateActiveVisuals(true);
    } else {
      if (state.isLooping) {
        state.currentNoteIndex = 0;
        const firstNoteObj = song.notes[0];
        const firstKeyIdx = NOTE_TO_INDEX[firstNoteObj.n] ?? 0;
        playHelperTone(firstKeyIdx, getNoteDurationMs(firstNoteObj, song));
        updateActiveVisuals(true);
      } else {
        pausePlayback();
        showCelebration();
        return;
      }
    }
  } else {
    renderFallingNoteBlocks();
  }

  state.rafId = requestAnimationFrame(animationLoop);
}

function showCelebration() {
  dom.celebrationOverlay.classList.remove('hidden');
}

function updatePlayPauseButtonUI() {
  if (state.mode === 'step') {
    dom.btnPlayPause.classList.remove('playing');
    dom.playPauseIcon.textContent = '👆';
    dom.playPauseText.textContent = 'Next Color';
    return;
  }
  if (state.isPlaying) {
    dom.btnPlayPause.classList.add('playing');
    dom.playPauseIcon.textContent = '⏸';
    dom.playPauseText.textContent = 'Pause';
  } else {
    dom.btnPlayPause.classList.remove('playing');
    dom.playPauseIcon.textContent = '▶';
    dom.playPauseText.textContent = 'Play';
  }
}

// ==================== MODE & VIEW SWITCHING ====================
function setPlayMode(newMode) {
  if (newMode === state.mode) return;
  pausePlayback();
  state.mode = newMode;
  state.noteElapsedMs = 0;
  dom.beaconDurationFill.style.transform = 'scaleX(1)';

  dom.modeAutoBtn.classList.toggle('active', newMode === 'auto');
  dom.modeStepBtn.classList.toggle('active', newMode === 'step');

  dom.speedControlGroup.style.display = newMode === 'auto' ? 'flex' : 'none';
  updatePlayPauseButtonUI();
  updateActiveVisuals(true);
}

function toggleViewStyle() {
  state.viewStyle = state.viewStyle === 'split' ? 'beacon-only' : 'split';
  dom.visualStage.classList.toggle('view-beacon-only', state.viewStyle === 'beacon-only');
  dom.viewStyleIcon.textContent = state.viewStyle === 'split' ? '🎹' : '🟢';
  updateActiveVisuals(false);
}

// ==================== SONG PICKER & CUSTOM MELODY BUILDER ====================
function renderSongModalList() {
  dom.songGrid.innerHTML = '';

  state.melodies.forEach((song, idx) => {
    const card = document.createElement('div');
    card.className = 'song-card' + (idx === state.currentSongIndex ? ' selected' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    // Build mini color preview dots (first 12 notes)
    const previewDotsHtml = song.notes.slice(0, 12).map((nObj) => {
      const kIdx = NOTE_TO_INDEX[nObj.n] ?? 0;
      const kInfo = state.keys[kIdx];
      return `<span class="mini-color-dot" style="background:${kInfo.hex}"></span>`;
    }).join('');

    const deleteBtnHtml = song.isCustom
      ? `<button type="button" class="delete-custom-song-btn" data-delete-idx="${idx}" title="Delete custom melody">✕</button>`
      : '';

    card.innerHTML = `
      ${deleteBtnHtml}
      <div class="song-card-top">
        <span class="song-card-emoji">${song.emoji || '🎵'}</span>
        <div>
          <div class="song-card-title">${song.title}</div>
          <div class="song-card-meta">${song.notes.length} notes${song.isCustom ? ' • Custom' : ''}</div>
        </div>
      </div>
      <div class="song-card-dots">${previewDotsHtml}</div>
    `;

    card.addEventListener('click', (e) => {
      const delBtn = e.target.closest('.delete-custom-song-btn');
      if (delBtn) {
        e.stopPropagation();
        deleteCustomSong(idx);
        return;
      }
      selectSong(idx);
      dom.songModal.classList.add('hidden');
    });

    dom.songGrid.appendChild(card);
  });
}

function deleteCustomSong(index) {
  const target = state.melodies[index];
  if (!target || !target.isCustom) return;
  state.melodies.splice(index, 1);
  saveCustomSongs();
  if (state.currentSongIndex >= state.melodies.length) {
    state.currentSongIndex = 0;
  }
  selectSong(state.currentSongIndex);
  renderSongModalList();
}

function selectSong(index) {
  pausePlayback();
  state.currentSongIndex = index;
  state.currentNoteIndex = 0;
  state.noteElapsedMs = 0;
  dom.celebrationOverlay.classList.add('hidden');
  buildSequenceRibbon();
  updateActiveVisuals(true);
}

function renderCustomMelodyBuilder() {
  dom.customKeyButtons.innerHTML = '';

  state.keys.forEach((kInfo, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'custom-key-btn';
    btn.style.backgroundColor = kInfo.hex;
    btn.style.color = kInfo.textHex;
    btn.innerHTML = `
      <span>${kInfo.displayNote || kInfo.note}</span>
    `;
    btn.addEventListener('click', () => {
      state.customBuilderNotes.push({
        n: kInfo.note,
        b: state.customNoteBeats || 1,
        w: kInfo.name
      });
      playHelperTone(idx, 250);
      updateCustomSequencePreview();
    });
    dom.customKeyButtons.appendChild(btn);
  });

  updateCustomSequencePreview();
}

// Parse quick text like "C C G G A A G:2" or "1 1 5 5 6 6 5:2" or "Red, Red, Light Blue"
function parseQuickNoteString(rawText) {
  if (!rawText || !rawText.trim()) return [];
  const tokens = rawText
    .replace(/,/g, ' ')
    .trim()
    .split(/\s+/);

  const parsed = [];

  const tokenMap = {
    'C': 'C', '1': 'C', 'RED': 'C', 'DO': 'C',
    'D': 'D', '2': 'D', 'ORANGE': 'D', 'RE': 'D',
    'E': 'E', '3': 'E', 'YELLOW': 'E', 'MI': 'E',
    'F': 'F', '4': 'F', 'GREEN': 'F', 'FA': 'F',
    'G': 'G', '5': 'G', 'LIGHTBLUE': 'G', 'CYAN': 'G', 'TEAL': 'G', 'SOL': 'G', 'SO': 'G',
    'A': 'A', '6': 'A', 'BLUE': 'A', 'DARKBLUE': 'A', 'LA': 'A',
    'B': 'B', '7': 'B', 'PURPLE': 'B', 'MAGENTA': 'B', 'TI': 'B', 'SI': 'B',
    'C2': 'C2', 'C5': 'C2', 'HIGHC': 'C2', '8': 'C2', 'PINK': 'C2', 'VIOLET': 'C2'
  };

  tokens.forEach((tok) => {
    const parts = tok.split(':');
    const rawKey = parts[0].toUpperCase().replace(/[^A-Z0-9]/g, '');
    const beats = parts[1] ? Math.max(0.25, Math.min(4, parseFloat(parts[1]) || 1)) : (state.customNoteBeats || 1);
    const mappedNote = tokenMap[rawKey];
    if (mappedNote) {
      const kIdx = NOTE_TO_INDEX[mappedNote] ?? 0;
      const kInfo = state.keys[kIdx];
      parsed.push({ n: mappedNote, b: beats, w: kInfo.name });
    }
  });

  return parsed;
}

function updateCustomSequencePreview() {
  dom.customSequencePreview.innerHTML = '';
  if (state.customBuilderNotes.length === 0) {
    dom.customSequencePreview.innerHTML = `<span class="empty-custom-msg">Tap colors above or paste notes to build your melody...</span>`;
    return;
  }

  state.customBuilderNotes.forEach((item, i) => {
    const kIdx = NOTE_TO_INDEX[item.n] ?? 0;
    const kInfo = state.keys[kIdx];
    const dot = document.createElement('span');
    dot.className = 'mini-color-dot';
    dot.style.width = item.b >= 2 ? '36px' : (item.b <= 0.5 ? '18px' : '24px');
    dot.style.height = '24px';
    dot.style.borderRadius = '12px';
    dot.style.backgroundColor = kInfo.hex;
    dot.style.color = kInfo.textHex;
    dot.style.display = 'inline-flex';
    dot.style.alignItems = 'center';
    dot.style.justifyContent = 'center';
    dot.style.fontSize = '0.68rem';
    dot.style.fontWeight = '900';
    dot.textContent = kInfo.displayNote ? 'C+' : kInfo.note;
    dot.title = `Note ${i + 1}: ${kInfo.name} (${item.b} beat) — Tap to remove`;
    dot.style.cursor = 'pointer';
    dot.addEventListener('click', () => {
      state.customBuilderNotes.splice(i, 1);
      updateCustomSequencePreview();
    });
    dom.customSequencePreview.appendChild(dot);
  });
}

// ==================== COLOR CUSTOMIZER MODAL ====================
function renderColorCustomizerModal() {
  dom.colorCustomizerList.innerHTML = '';

  state.keys.forEach((keyInfo, idx) => {
    const item = document.createElement('div');
    item.className = 'color-edit-item';
    const displayNote = keyInfo.displayNote || keyInfo.note;

    item.innerHTML = `
      <div class="color-edit-header">
        <span>Key ${idx + 1} (${displayNote})</span>
      </div>
      <div class="color-edit-controls">
        <input type="color" class="color-picker-input" data-idx="${idx}" value="${keyInfo.hex}" aria-label="Color for Key ${idx + 1}" />
        <input type="text" class="color-name-input" data-idx="${idx}" value="${keyInfo.name}" maxlength="14" aria-label="Color Name for Key ${idx + 1}" />
      </div>
    `;

    const colorInput = item.querySelector('.color-picker-input');
    const nameInput = item.querySelector('.color-name-input');

    colorInput.addEventListener('input', (e) => {
      const newHex = e.target.value;
      state.keys[idx].hex = newHex;
      state.keys[idx].textHex = getContrastText(newHex);
      applyKeyColorChanges();
    });

    nameInput.addEventListener('input', (e) => {
      state.keys[idx].name = e.target.value.toUpperCase();
      applyKeyColorChanges();
    });

    dom.colorCustomizerList.appendChild(item);
  });
}

function applyKeyColorChanges() {
  saveCustomKeys();
  buildBottomPianoBarAndLanes();
  buildSequenceRibbon();
  updateActiveVisuals(false);
}

// ==================== EVENT LISTENERS ====================
function bindEvents() {
  // Open Song Picker Modal
  dom.btnSongMenu.addEventListener('click', () => {
    pausePlayback();
    renderSongModalList();
    renderCustomMelodyBuilder();
    dom.songModal.classList.remove('hidden');
  });

  dom.btnCloseSongModal.addEventListener('click', () => {
    dom.songModal.classList.add('hidden');
  });

  dom.songModal.addEventListener('click', (e) => {
    if (e.target === dom.songModal) dom.songModal.classList.add('hidden');
  });

  // Custom Melody Actions
  document.querySelectorAll('.dur-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.dur-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      state.customNoteBeats = parseFloat(chip.dataset.beats) || 1;
    });
  });

  dom.btnParseQuickNotes.addEventListener('click', () => {
    const parsedNotes = parseQuickNoteString(dom.quickNotesInput.value);
    if (parsedNotes.length > 0) {
      state.customBuilderNotes.push(...parsedNotes);
      dom.quickNotesInput.value = '';
      updateCustomSequencePreview();
    }
  });

  dom.quickNotesInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dom.btnParseQuickNotes.click();
    }
  });

  dom.btnClearCustom.addEventListener('click', () => {
    state.customBuilderNotes = [];
    updateCustomSequencePreview();
  });

  dom.btnSavePlayCustom.addEventListener('click', () => {
    if (state.customBuilderNotes.length === 0) {
      // If user typed quick notes in the input box and clicked Save directly, parse them first
      const quickParsed = parseQuickNoteString(dom.quickNotesInput.value);
      if (quickParsed.length > 0) {
        state.customBuilderNotes.push(...quickParsed);
        dom.quickNotesInput.value = '';
      } else {
        return;
      }
    }
    const title = dom.customSongNameInput.value.trim() || `Custom Melody ${state.melodies.filter((m) => m.isCustom).length + 1}`;
    const emoji = (dom.customSongEmojiInput && dom.customSongEmojiInput.value.trim()) || '🎨';
    const newSong = {
      id: 'custom-' + Date.now(),
      title,
      emoji,
      bpm: 96,
      isCustom: true,
      notes: [...state.customBuilderNotes]
    };
    state.melodies.push(newSong);
    saveCustomSongs();
    state.customBuilderNotes = [];
    dom.customSongNameInput.value = '';
    selectSong(state.melodies.length - 1);
    dom.songModal.classList.add('hidden');
  });

  // Export & Import Custom Songs JSON
  dom.btnExportSongs.addEventListener('click', () => {
    const customOnly = state.melodies.filter((m) => m.isCustom);
    const dataToExport = customOnly.length > 0 ? customOnly : state.melodies;
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'baby-einstein-piano-melodies.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  dom.inputImportSongs.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        const list = Array.isArray(imported) ? imported : [imported];
        let addedCount = 0;
        list.forEach((item) => {
          if (item && item.title && Array.isArray(item.notes) && item.notes.length > 0) {
            state.melodies.push({
              id: item.id || ('custom-' + Date.now() + '-' + addedCount),
              title: String(item.title),
              emoji: item.emoji || '🎵',
              bpm: Number(item.bpm) || 96,
              isCustom: true,
              notes: item.notes
            });
            addedCount++;
          }
        });
        if (addedCount > 0) {
          saveCustomSongs();
          renderSongModalList();
        }
      } catch (err) {
        console.warn('Invalid JSON melody file', err);
      }
      dom.inputImportSongs.value = '';
    };
    reader.readAsText(file);
  });

  // Open Color Customizer Modal
  dom.btnColorsModal.addEventListener('click', () => {
    pausePlayback();
    renderColorCustomizerModal();
    dom.colorsModal.classList.remove('hidden');
  });

  dom.btnCloseColorsModal.addEventListener('click', () => {
    dom.colorsModal.classList.add('hidden');
  });

  dom.btnDoneColors.addEventListener('click', () => {
    dom.colorsModal.classList.add('hidden');
  });

  dom.colorsModal.addEventListener('click', (e) => {
    if (e.target === dom.colorsModal) dom.colorsModal.classList.add('hidden');
  });

  // Color Presets
  document.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      if (KEY_PRESETS[presetKey]) {
        state.keys = JSON.parse(JSON.stringify(KEY_PRESETS[presetKey]));
        renderColorCustomizerModal();
        applyKeyColorChanges();
      }
    });
  });

  dom.btnResetColors.addEventListener('click', () => {
    state.keys = JSON.parse(JSON.stringify(KEY_PRESETS.standard));
    renderColorCustomizerModal();
    applyKeyColorChanges();
  });

  // Mode Toggle (Auto Timed vs Step)
  dom.modeAutoBtn.addEventListener('click', () => setPlayMode('auto'));
  dom.modeStepBtn.addEventListener('click', () => setPlayMode('step'));

  // View Style Toggle
  dom.btnViewStyle.addEventListener('click', toggleViewStyle);

  // Optional Helper Sound Toggle
  dom.btnSoundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    dom.soundToggleIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    dom.btnSoundToggle.classList.toggle('active-sound', state.soundEnabled);
    if (state.soundEnabled) {
      const song = getCurrentSong();
      const noteObj = song.notes[state.currentNoteIndex];
      playHelperTone(NOTE_TO_INDEX[noteObj.n] ?? 0, 300);
    }
  });

  // Fullscreen Toggle
  dom.btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  });

  // Transport Controls
  dom.btnPlayPause.addEventListener('click', togglePlayPause);
  dom.btnRestart.addEventListener('click', restartMelody);
  dom.btnLoop.addEventListener('click', () => {
    state.isLooping = !state.isLooping;
    dom.btnLoop.classList.toggle('active', state.isLooping);
    updateActiveVisuals(false);
  });

  // Progress Track Scrubbing
  dom.progressTrack.addEventListener('click', (e) => {
    const rect = dom.progressTrack.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const song = getCurrentSong();
    const targetIdx = Math.min(song.notes.length - 1, Math.floor(clickRatio * song.notes.length));
    jumpToNote(targetIdx);
  });

  // Speed Chips
  document.querySelectorAll('.speed-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.speed-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      state.speedMultiplier = parseFloat(chip.dataset.speed) || 0.75;
    });
  });

  // Tapping the Main Stage / Active Color Beacon
  dom.activeBeaconTapZone.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (state.mode === 'step') {
      advanceStepNote();
    } else {
      togglePlayPause();
    }
  });

  // Celebration overlay buttons
  dom.btnReplaySong.addEventListener('click', () => {
    restartMelody();
    if (state.mode === 'auto') startPlayback();
  });

  dom.btnNextSong.addEventListener('click', () => {
    const nextSongIdx = (state.currentSongIndex + 1) % state.melodies.length;
    selectSong(nextSongIdx);
    if (state.mode === 'auto') startPlayback();
  });

  // Keyboard shortcuts for desktop testing (Space = play/step, Right/Left arrows = step notes)
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      if (state.mode === 'step') {
        advanceStepNote();
      } else {
        togglePlayPause();
      }
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      advanceStepNote();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      jumpToNote(Math.max(0, state.currentNoteIndex - 1));
    }
  });
}

// ==================== INITIALIZATION ====================
function initApp() {
  loadSavedSettings();
  cacheDom();
  buildBottomPianoBarAndLanes();
  buildSequenceRibbon();
  bindEvents();
  updatePlayPauseButtonUI();
  updateActiveVisuals(false);

  // Register PWA Service Worker for offline mobile use
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', initApp);
