import { ReactChild, ReactChildren } from "react";

export interface ChildrenProps {
  children: (ReactChild | ReactChildren) | (ReactChild | ReactChildren)[];
}

export interface SectionProps extends ChildrenProps {
  delay?: number;
}

export interface Info { 
  title: string,
  year: number,
  website?: string,
  info: string[],
  content: string[],
  implements: string[],
  imgSrc: string[]
}