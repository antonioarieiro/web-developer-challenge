
import { ReactNode } from 'react';

export type Publication = {
  id: number;
  name: string;
  description: string;
  photo: string ;
};

export type Content = {
  publication: Publication;
  currentPublication: Publication[];
  createNewPublication: any;
  revemovePost: any
};

export type Props = {
  children: ReactNode;
};