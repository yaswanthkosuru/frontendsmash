import { useState } from 'react'
import { ChakraProvider, Stack, Text, useToast } from '@chakra-ui/react'
import InterviewToggleButton from '../components/InterviewToggleButton'
// import InterviewScreen from '../components/InterviewScreen'
import ToggleTheme from '../components/ToggleTheme'
// import InterviewScreenTrial from '../components/InterviewScreenTrial'
import InterviewScreenVideoBot from '../components/InterviewScreenVideoBot'
import axios from 'axios'
import { API_URL } from '../utils/constants'
// import MultipleChoiceButton from '../components/MultipleChoiceButton'

interface Props {
	name: string
	smashUserId: string
	botPreference: string
}

const Interview = (props: Props) => {
	const { name, smashUserId, botPreference } = props
	const [showInterview, setShowInterview] = useState(false)
	const toast = useToast()
	const [key, setKey] = useState('')
	const skipAllQuestion = async () => {
		if (key) {
			const { data } = await axios.post(`${API_URL}/user/answer/skip/all`, {
				interview_key: key,
			})
			if (data.success) {
				toast({
					title: 'Interview Skipped',
					status: 'success',
					duration: 3000,
					isClosable: true,
				})
			} else {
				toast({
					title: 'Failed to skip interview',
					status: 'error',
					duration: 3000,
					isClosable: true,
				})
			}
		} else {
			toast({
				title: 'Interview key empty',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}
	const toggleInterview = () => {
		if (showInterview) {
			skipAllQuestion()
			setKey('')
		}
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
						// <InterviewScreenVideoBot name={'Prasoon Soni'} smashUserId={'1'} botPreference="male" />
						<InterviewScreenVideoBot
							name={name}
							smashUserId={smashUserId}
							botPreference={botPreference}
							setKey={setKey}
						/>
					)}
				</Stack>
			</Stack>
		</ChakraProvider>
	)
}

export default Interview
