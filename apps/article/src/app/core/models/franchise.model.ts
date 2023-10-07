import { Universe } from './universe.model';

export interface Franchise {
  name: string;
  logo: string;
  description: string;
  universes: Universe[];
}
