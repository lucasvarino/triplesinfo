export interface Unit {
  name: string;
  color?: string;
  textColor?: string;
}

export interface Member {
  id: string;
  number: number;
  name: string;
  fullName: string;
  originalName: string;
  birthDate: string;
  revealDate: string;
  nationality: string;
  flag?: string;
  emoji?: string;
  color: string;
  colorName: string;
  catchphrase?: string;
  units: Unit[];
}
