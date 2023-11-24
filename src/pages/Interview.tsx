import { useState } from 'react'
import { ChakraProvider, Stack, useColorMode } from '@chakra-ui/react'
import InterviewToggleButton from '../components/InterviewToggleButton'
import InterviewScreen from '../components/InterviewScreen'
import ToggleTheme from '../components/ToggleTheme'

const Interview = () => {
	const [showInterview, setShowInterview] = useState(false)
	const toggleInterview = () => {
		setShowInterview(!showInterview)
	}
	const { colorMode } = useColorMode()

	return (
		<ChakraProvider>
			<Stack h={'100vh'}>
				<Stack bg={colorMode === 'light' ? '#F5F5F5' : '#1A202C'}>
					<ToggleTheme />
					<InterviewToggleButton onClick={toggleInterview} showInterview={showInterview} />
					{showInterview && <InterviewScreen />}
				</Stack>
			</Stack>
		</ChakraProvider>
	)
}

export default Interview
