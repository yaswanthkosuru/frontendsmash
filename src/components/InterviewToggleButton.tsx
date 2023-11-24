import React from 'react'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { ChatIcon, CloseIcon } from '@chakra-ui/icons'

interface InterviewToggleButtonProps {
	onClick: () => void
	showInterview: boolean
}

const InterviewToggleButton: React.FC<InterviewToggleButtonProps> = ({
	onClick,
	showInterview,
}) => {
	return (
		<Tooltip hasArrow label={showInterview ? 'Hide Interview' : 'Show Interview'} placement="left">
			<IconButton
				aria-label="Toggle Interview"
				size={'lg'}
				// fontSize={'25px'}
				icon={showInterview ? <CloseIcon /> : <ChatIcon />}
				colorScheme="blue"
				isRound={true}
				width="fit-content"
				position="absolute"
				right={'20px'}
				bottom={'20px'}
				onClick={onClick}
			/>
		</Tooltip>
	)
}

export default InterviewToggleButton
