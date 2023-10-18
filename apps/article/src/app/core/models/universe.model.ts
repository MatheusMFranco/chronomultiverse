import { Timeline } from './timeline.model';

export interface Universe {
  name: string;
  description?: string;
  isCanon: boolean;
  isRemake: boolean;
  isReboot: boolean;
  isOriginal: boolean;
  timelines: Timeline [];
}
