import { ReactChild, ReactChildren } from 'react';

export interface ChildrenProps {
	children: (ReactChild | ReactChildren) | (ReactChild | ReactChildren)[] ;
}

export interface SectionProps extends ChildrenProps {
	delay?: number
}