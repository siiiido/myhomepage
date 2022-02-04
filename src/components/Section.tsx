import React, { ReactChild, ReactChildren } from 'react';
import { motion } from 'framer-motion';
import { shouldForwardProp, chakra } from '@chakra-ui/react';
import { SectionProps } from '../type';


const StyleDiv = chakra(motion.div, {
	shouldForwardProp: props => {
		return shouldForwardProp(props) || props === 'transition'
	}
});


const Section= ({ children, delay=0 }: SectionProps) => {
	return (
		<StyleDiv
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			// transition={{ duration: 0.8, delay}}
			mb={6}
		>
			{children}
		</StyleDiv>
	)
};

export default Section;
