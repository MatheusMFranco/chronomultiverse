import { Format } from '../enums/format.enum';

export interface Piece {
  name: string;
  description: string;
  cover: string;
  serie: string;
  isCanon: boolean;
  isRemake: boolean;
  isReboot: boolean;
  isOriginal: boolean;
  format: Format;
}
