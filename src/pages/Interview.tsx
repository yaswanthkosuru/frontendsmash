import { useState } from 'react'
import { ChakraProvider, Stack, Text } from '@chakra-ui/react'
import InterviewToggleButton from '../components/InterviewToggleButton'
// import InterviewScreen from '../components/InterviewScreen'
import ToggleTheme from '../components/ToggleTheme'
// import InterviewScreenTrial from '../components/InterviewScreenTrial'
import InterviewScreenVideoBot from '../components/InterviewScreenVideoBot'
// import MultipleChoiceButton from '../components/MultipleChoiceButton'

const Interview = () => {
	const [showInterview, setShowInterview] = useState(false)
	const toggleInterview = () => {
		setShowInterview(!showInterview)
	}
	// const { colorMode } = useColorMode()

	return (
		<ChakraProvider>
			<Stack h={'100vh'}>
				<Stack
					// bg={colorMode === 'light' ? '#F5F5F5' : '#1A202C'}
					h={'100vh'}
					// w={'100vw'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					{/* <MultipleChoiceButton /> */}
					{!showInterview && <Text fontSize={'1.3rem'}>Smash Dashboard</Text>}
					<ToggleTheme />
					<InterviewToggleButton onClick={toggleInterview} showInterview={showInterview} />
					{/* {showInterview && (
						<InterviewScreen name={'Prasoon Soni'} smashUserId={'1234'} botPreference="male" />
					)} */}
					{showInterview && (
						<InterviewScreenVideoBot name={'Prasoon Soni'} smashUserId={'1'} botPreference="male" />
					)}
				</Stack>
			</Stack>
		</ChakraProvider>
	)
}

export default Interview
