import { Country } from '../enums/country.enum';
import { Format } from '../enums/format.enum';
import { Language } from '../enums/language.enum';
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
  languages: Language[];
  year: number;
}
