import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode();
	console.log('toggleColorMode : ', toggleColorMode);
	return (
		<AnimatePresence>
			<motion.div
				style={{ display: 'inline-block' }}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<IconButton
					aria-label='Toggle Icon'
					colorScheme={useColorModeValue('purple', 'orange')}
					icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
					onClick={toggleColorMode}
				/>
			</motion.div>
		</AnimatePresence>
	);
};

export default ThemeToggleButton;
