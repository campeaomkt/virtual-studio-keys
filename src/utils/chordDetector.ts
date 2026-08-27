import { DetectedChordInfo } from '../types';

export const SOLFEGE_MAP: Record<string, string> = {
  'C': 'Dó',
  'C#': 'Dó#',
  'Db': 'Réb',
  'D': 'Ré',
  'D#': 'Ré#',
  'Eb': 'Mib',
  'E': 'Mi',
  'F': 'Fá',
  'F#': 'Fá#',
  'Gb': 'Solb',
  'G': 'Sol',
  'G#': 'Sol#',
  'Ab': 'Láb',
  'A': 'Lá',
  'A#': 'Lá#',
  'Bb': 'Sib',
  'B': 'Si'
};

export const DEMO_PRESET_CHORDS: Record<string, DetectedChordInfo & { midiNotes: number[] }> = {
  'C7M(9)': {
    name: 'C7M(9)',
    solfege: 'Dó com Sétima Maior e Nona',
    formula: '1 - 3 - 5 - 7M - 9',
    notes: ['C3', 'E4', 'G4', 'B4', 'D5'],
    midiNotes: [48, 64, 67, 71, 74],
    bass: 'C',
    inversion: 'Posição Fundamental',
    mood: 'Worship / MPB / Neo-Soul'
  },
  'F#m7(b5)': {
    name: 'F#m7(b5)',
    solfege: 'Fá Sustenido Meio-Diminuto',
    formula: '1 - b3 - b5 - b7',
    notes: ['F#2', 'A3', 'C4', 'E4', 'A4'],
    midiNotes: [42, 57, 60, 64, 69],
    bass: 'F#',
    inversion: 'Fundamental',
    mood: 'Jazz / Bossa Nova / Harmonia Avançada'
  },
  'Gm9': {
    name: 'Gm9',
    solfege: 'Sol Menor com Nona',
    formula: '1 - b3 - 5 - b7 - 9',
    notes: ['G2', 'Bb3', 'D4', 'F4', 'A4'],
    midiNotes: [43, 58, 62, 65, 69],
    bass: 'G',
    inversion: 'Fundamental',
    mood: 'Pop / R&B / Modern Keyboard'
  },
  'D/F#': {
    name: 'D/F#',
    solfege: 'Ré Maior com Baixo em Fá Sustenido',
    formula: '1ª Inversão (Baixo na Terça)',
    notes: ['F#2', 'D3', 'A3', 'D4', 'F#4'],
    midiNotes: [42, 50, 57, 62, 66],
    bass: 'F#',
    inversion: '1ª Inversão',
    mood: 'Condução / Linha de Baixo'
  },
  'Eb7M(#11)': {
    name: 'Eb7M(#11)',
    solfege: 'Mi Bemol 7M com 11ª Aumentada (Lídio)',
    formula: '1 - 3 - 5 - 7M - #11',
    notes: ['Eb2', 'G3', 'Bb3', 'D4', 'A4'],
    midiNotes: [39, 55, 58, 62, 69],
    bass: 'Eb',
    inversion: 'Voz Lídia',
    mood: 'Gospel Chords / Cinema'
  },
  'Am11': {
    name: 'Am11',
    solfege: 'Lá Menor com Décima Primeira',
    formula: '1 - b3 - 5 - b7 - 9 - 11',
    notes: ['A2', 'E3', 'G3', 'C4', 'D4'],
    midiNotes: [45, 52, 55, 60, 62],
    bass: 'A',
    inversion: 'So What Voicing',
    mood: 'Neo-Soul / Teclado Moderno'
  }
};

export const COLOR_PALETTES = [
  { id: 'gold', name: 'Gold Studio Master', hex: '#F59E0B', glow: 'rgba(245, 158, 11, 0.5)', gradient: 'from-[#FDE047] via-[#F59E0B] to-[#D97706]' },
  { id: 'cyan', name: 'Electric Cyan', hex: '#00F2FE', glow: 'rgba(0, 242, 254, 0.4)', gradient: 'from-[#00F2FE] to-[#4FACFE]' },
  { id: 'purple', name: 'Neon Purple', hex: '#8A2BE2', glow: 'rgba(138, 43, 226, 0.4)', gradient: 'from-[#8A2BE2] to-[#DA70D6]' },
  { id: 'pink', name: 'Hot Pink / Magenta', hex: '#F43F5E', glow: 'rgba(244, 63, 94, 0.4)', gradient: 'from-[#F43F5E] to-[#FB7185]' },
  { id: 'emerald', name: 'Emerald Synth', hex: '#10B981', glow: 'rgba(16, 185, 129, 0.4)', gradient: 'from-[#10B981] to-[#34D399]' },
  { id: 'blue', name: 'Deep Studio Blue', hex: '#3B82F6', glow: 'rgba(59, 130, 246, 0.4)', gradient: 'from-[#3B82F6] to-[#60A5FA]' },
];
