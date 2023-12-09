import { Button, Tooltip } from '@chakra-ui/react'
// import styles from './index.module.css'
// import SkipNextIcon from '@mui/icons-material/SkipNext'
// import Tooltip from '@mui/material/Tooltip'
// import { ArrowRightIcon } from '@chakra-ui/icons'
import { FiSkipForward } from 'react-icons/fi'

interface SkipButtonProps {
	skipQuestion: () => void
	skipLoading: boolean
}

export const SkipButton = (props: SkipButtonProps) => {
	const { skipQuestion, skipLoading } = props
	return (
		<div>
			<main>
				<div className={'audio-controls'}>
					<div>
						<Tooltip label="Skip Question" placement="top" hasArrow>
							<div>
								<Button
									onClick={skipQuestion}
									style={{
										borderRadius: '50%',
										border: '1px',
										width: '75px',
										height: '75px',
										// color: '#fff',
										// borderColor: '#ffffff',
									}}
									isLoading={skipLoading}
								>
									{/* <Text fontSize={'1.2rem'}> */}
									<FiSkipForward
										style={{
											width: '2em',
											height: '2em',
											fontSize: 'large',
										}}
									/>
									{/* </Text> */}
								</Button>
							</div>
						</Tooltip>
					</div>
				</div>
			</main>
		</div>
	)
}
