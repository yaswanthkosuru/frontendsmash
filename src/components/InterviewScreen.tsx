import { Stack, Text, useColorMode } from '@chakra-ui/react'

const InterviewScreen = () => {
	const { colorMode } = useColorMode()
	return (
		<Stack
			justifyContent={'center'}
			alignItems={'center'}
			h={'100vh'}
			bg={colorMode === 'light' ? '#F5F5F5' : '#1A202C'}
		>
			<Text fontSize={'1.2rem'}>Interview Screen</Text>
		</Stack>
	)
}

export default InterviewScreen
