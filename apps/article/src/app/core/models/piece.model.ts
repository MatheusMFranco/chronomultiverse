import { Country } from '../enums/country.enum';
import { Format } from '../enums/format.enum';
import { Platform } from '../enums/platform.enum';

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
  platforms: Platform[];
  countries: Country[];
  year: number;
}
