export interface Piece {
  name: string;
  description: string;
  cover?: string;
  franchise: string;
  serie?: string;
  timeline?: string;
  universe?: string;
  isCanon: boolean;
  isRemake: boolean;
  isReboot: boolean;
  isOriginal: boolean;
}
