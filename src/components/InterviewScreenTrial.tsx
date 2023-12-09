import { Button, Progress, Spinner, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ReplayButton } from './ReplayButton'
import { SkipButton } from './SkipButton'
import MultipleChoiceButton from './MultipleChoiceButton'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from '@chakra-ui/react'
import { AudioRecorder } from './AudioRecorder'
import axios from 'axios'
import { API_URL } from '../utils/constants'

interface InterviewScreenProps {
	name: string
	smashUserId: string
	botPreference: string
}

interface Question {
	question_id: number
	question_text: string
	question_type: string
	question_options: string[]
}
const InterviewScreenTrial: React.FC<InterviewScreenProps> = ({
	name,
	smashUserId,
	botPreference,
}) => {
	const toast = useToast()
	const [loading, setLoading] = useState(false)
	const [interviewKey, setInterviewKey] = useState('')
	const { isOpen, onClose } = useDisclosure() //onOpen()
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [, setIsListening] = useState(false)
	const [showReplayButton, setShowReplayButton] = useState(true)
	const [showSkipButton, setShowSkipButton] = useState(true)
	// const [isRecording] = useState(false)
	const [category, setCategory] = useState('')
	const [questions, setQuestions] = useState<Question[]>([])
	const [skipLoading, setSkipLoading] = useState(false)
	const formatCategory = (category: string) => {
		const categoryWords = category.split('_')
		let formattedCategory = ''
		for (let i = 0; i < categoryWords.length; i++) {
			formattedCategory += categoryWords[i][0].toUpperCase() + categoryWords[i].slice(1) + ' '
		}
		return formattedCategory
	}
	const skipQuestion = async () => {
		setSkipLoading(true)
		const { data } = await axios.post(`${API_URL}/user/answer/skip`, {
			interview_key: interviewKey,
			question_id: questions[currentQuestionIndex].question_id,
		})
		setSkipLoading(false)
		if (data.success) {
			toast({
				title: `Question ${currentQuestionIndex + 1} skipped`,
				// description: `You have skipped the question: ${questions[currentQuestionIndex].question_text}`,
				status: 'info',
				duration: 2000,
			})
			if (currentQuestionIndex === questions.length - 1) {
				getData()
				toast({
					title: `Interview completed`,
					// description: `You have completed the interview`,
					status: 'success',
					duration: 2000,
				})
				return
			}
			setCurrentQuestionIndex(currentQuestionIndex + 1)
		} else {
			toast({
				title: `Error skipping question ${currentQuestionIndex + 1}`,
				status: 'error',
				duration: 2000,
			})
		}
	}
	const updateIsListening = (value: boolean | ((prevState: boolean) => boolean)) => {
		setIsListening(value)
		if (value) {
			setShowReplayButton(false)
			setShowSkipButton(false)
		} else {
			goToNextQuestion()
		}
	}
	const goToNextQuestion = () => {
		if (currentQuestionIndex === questions.length - 1) {
			getData()
			return
		}
		setCurrentQuestionIndex(currentQuestionIndex + 1)
		setShowReplayButton(true)
		setShowSkipButton(true)
	}
	const getData = async () => {
		setLoading(true)
		const { data } = await axios.post(`${API_URL}/user/login`, {
			name,
			smash_user_id: smashUserId,
			bot_preference: botPreference,
		})
		console.log('data', data)
		if (data.success) {
			// toast({
			// 	title: 'Data Fetched Successfully',
			// 	status: 'success',
			// 	duration: 2000,
			// })
			setQuestions(data.data.questions)
			setInterviewKey(data.data.interview_key)
			setCategory(data.data.category)
			setLoading(false)
			setCurrentQuestionIndex(0)
		} else {
			getData()
			// toast({
			// 	title: 'Error Fetching Data, Try Again!!',
			// 	status: 'error',
			// 	duration: 2000,
			// })
		}
	}
	useEffect(() => {
		getData()
	}, [name, smashUserId, botPreference])
	return (
		<>
			{loading && <Spinner size={'xl'} />}
			{!loading && (
				<>
					<Modal isOpen={isOpen} onClose={onClose} isCentered>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Interview Completed</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<Text>Thank you for completing the interview.</Text>
							</ModalBody>
							<ModalFooter>
								{/* <Button colorScheme="green" mr={3} onClick={getData}>
									Go To Next Category
								</Button> */}
								<Button colorScheme="blue" mr={3} onClick={onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
					<Stack justifyContent={'center'} alignItems={'center'}>
						{category.length > 0 && (
							<Text border={'1px solid #fff'} p={2} borderRadius={'20px'} fontSize={'1.3rem'}>
								{formatCategory(category)}
							</Text>
						)}
						{questions.length > 0 && (
							<Text fontSize={'1.3rem'}>
								Q{currentQuestionIndex + 1}: {questions[currentQuestionIndex].question_text}
							</Text>
						)}
						<Progress
							value={((currentQuestionIndex + 1) / questions.length) * 100}
							size={'sm'}
							h={'20px'}
							w={'300px'}
							borderRadius={'20px'}
						/>
						<Stack
							direction="row"
							// width={'100vw'}
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}
							position={'absolute'}
							bottom={'80px'}
							gap={'20px'}
							left={0}
							right={0}
							mr={'auto'}
							ml={'auto'}
						>
							{showReplayButton && <ReplayButton replayQuestion={() => {}} />}
							{questions.length > 0 &&
								questions[currentQuestionIndex].question_type === 'multiple-choice' && (
									<MultipleChoiceButton
										options={questions[currentQuestionIndex].question_options}
										interviewKey={interviewKey}
										questionId={questions[currentQuestionIndex].question_id}
										goToNextQuestion={goToNextQuestion}
									/>
								)}
							{questions.length > 0 &&
								questions[currentQuestionIndex].question_type === 'audio' && (
									<AudioRecorder
										interviewKey={interviewKey}
										handleAnswer={() => {}}
										updateIsListening={updateIsListening}
										questionId={questions[currentQuestionIndex].question_id}
										goToNextQuestion={goToNextQuestion}
									/>
								)}
							{showSkipButton && (
								<SkipButton skipQuestion={skipQuestion} skipLoading={skipLoading} />
							)}
						</Stack>
					</Stack>
				</>
			)}
		</>
	)
}

export default InterviewScreenTrial
