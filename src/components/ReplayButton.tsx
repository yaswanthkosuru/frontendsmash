import { Button, Text, Tooltip } from '@chakra-ui/react'
// import styles from './index.module.css'
// import { RepeatIcon } from '@chakra-ui/icons'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import ReplayIcon from '@mui/icons-material/Replay'
// import Tooltip from '@mui/material/Tooltip'
import { FiRefreshCcw } from 'react-icons/fi'
interface ReplayButtonProps {
	replayQuestion: () => void
}
export const ReplayButton = (props: ReplayButtonProps) => {
	const { replayQuestion } = props
	return (
		<Tooltip label="Replay" placement="top" hasArrow>
			<Button
				onClick={replayQuestion}
				style={{
					borderRadius: '50%',
					border: '1px',
					width: '75px',
					height: '75px',

					// color: '#fff',
					// borderColor: '#ffffff',
				}}
			>
				<Text fontSize={'1.2rem'}>
					<FiRefreshCcw
						style={{
							width: '2em',
							height: '2em',
							fontSize: 'large',
						}}
					/>
				</Text>
			</Button>
		</Tooltip>
	)
}
