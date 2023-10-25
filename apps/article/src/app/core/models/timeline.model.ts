import { Era } from '../enums/era.enum';
import { Piece } from './piece.model';

export interface Timeline {
  name: string;
  description: string;
  isCanon: boolean;
  isRemake: boolean;
  isReboot: boolean;
  isOriginal: boolean;
  era: Era;
  pieces: Piece[];
}
