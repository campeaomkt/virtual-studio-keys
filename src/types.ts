export interface FeatureItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  highlights: string[];
  badge?: string;
  tagColor: string;
}

export interface TargetAudienceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  painPoint: string;
  solution: string;
  benefitTags: string[];
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
  platform: 'YouTube' | 'Instagram' | 'Igreja/Live' | 'Escola de Música';
}

export interface ColorTheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  glow: string;
  border: string;
  badgeBg: string;
}

export interface DetectedChordInfo {
  name: string;
  solfege: string;
  formula: string;
  notes: string[];
  inversion?: string;
  bass?: string;
  mood: string;
}
