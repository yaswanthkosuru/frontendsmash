import { ChakraProvider, Stack } from '@chakra-ui/react'
import InterviewToggleButton from '../components/InterviewToggleButton'
import InterviewScreen from '../components/InterviewScreen'
import { useState } from 'react'
import ToggleTheme from '../components/ToggleTheme'

const Interview = () => {
	const [showInterview, setShowInterview] = useState(false)
	const toggleInterview = () => {
		setShowInterview(!showInterview)
	}
	return (
		<ChakraProvider>
			<Stack h={'100vh'}>
				<ToggleTheme />
				<InterviewToggleButton onClick={toggleInterview} showInterview={showInterview} />
				{showInterview && <InterviewScreen />}
			</Stack>
		</ChakraProvider>
	)
}

export default Interview
