/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Progress, Spinner, Stack, Text, Tooltip, useToast } from '@chakra-ui/react'
import React, { useEffect, useState, useRef } from 'react'
import { ReplayButton } from './ReplayButton'
import { SkipButton } from './SkipButton'
// import halfway from '/images/halfway.png'
// import MultipleChoiceButton from './MultipleChoiceButton'
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
import ReactPlayer from 'react-player'
import { AiFillQuestionCircle, AiFillInfoCircle } from 'react-icons/ai'

interface InterviewScreenProps {
	name: string
	smashUserId: string
	botPreference: string
	setKey: (key: string) => void,
  toggleInterview: () => void,
}

interface Question {
	question_id: number
	question_text: string
	question_type: string
	question_options: string[]
}

interface Timestamps {
	start_time: number
	end_time: number
}

const InterviewScreenVideoBot: React.FC<InterviewScreenProps> = ({
	name,
	smashUserId,
	botPreference,
	setKey,
  toggleInterview
}) => {
	//const halfway = new URL('./images/halfway.png', import.meta.url).href;
	const reactPlayerRef = useRef<ReactPlayer>(null)
	const introVideoRef = useRef(null)
	const toast = useToast()
	const [loading, setLoading] = useState(false)
	const [interviewKey, setInterviewKey] = useState('')
	const { isOpen, onClose } = useDisclosure() //onOpen()
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [isListening, setIsListening] = useState(false)
	const [hasIntroVideoEnded, setHasIntroVideoEnded] = useState(false)
	const [, setShowQuestionsVideo] = useState(false)
	const [showReplayButton, setShowReplayButton] = useState(false)
	const [showSkipButton, setShowSkipButton] = useState(false)
	const [isRecording, setIsRecording] = useState(false)
	const [category, setCategory] = useState('')
	const [questions, setQuestions] = useState<Question[]>([])
	const [skipLoading, setSkipLoading] = useState(false)
	const [desktopIntroVideo, setDesktopIntroVideo] = useState('')
	const [desktopQuestionsVideo, setDesktopQuestionsVideo] = useState('')
	const [listeningTimestamps, setListeningTimestamps] = useState<Timestamps>({
		start_time: 0,
		end_time: 0,
	})
	const [questionsTimestamps, setQuestionsTimestamps] = useState<Timestamps[]>([])
	const [responseTimestamps, setResponseTimestamps] = useState<Timestamps[]>([])
	const [skipTimestamps, setSkipTimestamps] = useState<Timestamps[]>([])
	const [hasVideoStarted, setHasVideoStarted] = useState(false)
	const [hasInterviewEnded, setHasInterviewEnded] = useState(false)
	const [isPositiveResponse, setIsPositiveResponse] = useState(false)
	const [isSkip, setIsSkip] = useState(false)
	// const [showHalfWay, setShowHalfWay] = useState(false)

	// useEffect(() => {
	// 	if (showHalfWay) {
	// 		setTimeout(() => {
	// 			setShowHalfWay(false)
	// 			setDesktopPlaying(true)
	// 			setDesktopPlaysinline(true)
	// 		}, 3000)
	// 	}
	// }, [showHalfWay])

	useEffect(() => {
		if (isListening) {
			setShowReplayButton(true)
			setShowSkipButton(true)
			setIsRecording(true)
		}
	}, [isListening])

	useEffect(() => {
		if (reactPlayerRef && reactPlayerRef.current) {
			reactPlayerRef.current.seekTo(questionsTimestamps[currentQuestionIndex].start_time)
			setIsRecording(false)
			// reactPlayerRef.current.playing = true;
			// reactPlayerRef.current.playsinline = true;
			// reactPlayerRef.current.pip = false;
		}
		// if (currentQuestionIndex === questionTimestamps.length - 1) {
		//     updateInterviewEnded();
		// }
		// if (currentQuestionIndex === 1) {
		// 	setDesktopPlaying(false)
		// 	setDesktopPlaysinline(false)
		// 	setShowHalfWay(true)
		// }
	}, [currentQuestionIndex])

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
		setIsSkip(true)
		setShowReplayButton(false)
		setShowSkipButton(false)
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
			//setCurrentQuestionIndex(currentQuestionIndex + 1)
			setIsListening(false)
			setIsRecording(false)
			setSkipResponse()
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
		//setCurrentQuestionIndex(currentQuestionIndex + 1)
		setShowReplayButton(false)
		setShowSkipButton(false)
		setIsListening(false)
		setIsRecording(false)
		setIsSkip(false)
		setIsPositiveResponse(true)
		setPositiveResponse()
	}

	const setPositiveResponse = () => {
		console.log(
			'inside positive response timestamps',
			responseTimestamps[currentQuestionIndex].start_time,
		)
		if (reactPlayerRef.current) {
			console.log('inside reacplayeref')
			reactPlayerRef.current.seekTo(responseTimestamps[currentQuestionIndex].start_time, 'seconds')
		}
	}

	const setSkipResponse = () => {
		if (reactPlayerRef.current) {
			console.log('inside reacplayeref in skip response')
			reactPlayerRef.current.seekTo(skipTimestamps[currentQuestionIndex].start_time, 'seconds')
		}
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
			setQuestions(data?.data?.questions)
			setInterviewKey(data?.data?.interview_key)
			setKey(data?.data?.interview_key)
			setCategory(data?.data?.category)
			setCurrentQuestionIndex(0)
			setListeningTimestamps(data?.data?.listening_timestamps)
			console.log('listening timestamps', data?.data?.listening_timestamps)
			setQuestionsTimestamps(data?.data?.questions_timestamps)
			setResponseTimestamps(data?.data?.response_timestamps)
			setSkipTimestamps(data?.data?.skip_timestamps)
			setDesktopQuestionsVideo(data?.data?.desktop_video_link)
			setDesktopIntroVideo(data?.data?.desktop_intro_video_link)
			setLoading(false)
		}
	}

	const handleIntroVideoEnded = () => {
		setHasIntroVideoEnded(true)
		setShowQuestionsVideo(true)
	}

	const handleListeningLoop = () => {
		reactPlayerRef?.current?.seekTo(listeningTimestamps?.start_time, 'seconds')
	}

	const handlePostQuestionAction = () => {
		console.log('handlepostquestionaction')
		if (!isListening && currentQuestionIndex <= questionsTimestamps.length - 1) {
			setIsListening(true)
			handleListeningLoop()
		}
	}

	const handleProgress = ({ playedSeconds }: any) => {
		if (!hasVideoStarted) {
			reactPlayerRef?.current?.seekTo(questionsTimestamps[currentQuestionIndex]?.start_time)
			setHasVideoStarted(true)
		}
		console.log('currentQuestionIndex', currentQuestionIndex)
		console.log('questionTimestamps.length', questionsTimestamps.length)
		if (
			isPositiveResponse &&
			playedSeconds >= responseTimestamps[currentQuestionIndex].end_time &&
			currentQuestionIndex <= questionsTimestamps.length
		) {
			if (currentQuestionIndex === questionsTimestamps.length - 1) {
        console.log('inside ')
				setHasInterviewEnded(true)
        toggleInterview()
			} else {
				setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
				setIsPositiveResponse(false)
				setIsSkip(false)
			}
		}
		if (
			isSkip &&
			playedSeconds >= skipTimestamps[currentQuestionIndex].end_time &&
			currentQuestionIndex <= questionsTimestamps.length
		) {
			if (currentQuestionIndex === questionsTimestamps.length - 1) {
				setHasInterviewEnded(true)
        toggleInterview()
			} else {
				console.log('inside is skip')
				setShowSkipButton(false)
				setShowReplayButton(false)
				setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
				setIsSkip(false)
				setIsListening(false)
			}
		}
		if (
			!isListening &&
			!isPositiveResponse &&
			!isSkip &&
			currentQuestionIndex !== questionsTimestamps.length - 1 &&
			playedSeconds >= questionsTimestamps[currentQuestionIndex].end_time
		) {
			setIsRecording(true)
			setShowReplayButton(true)
			setShowSkipButton(true)
			handlePostQuestionAction()
		}

		if (
			currentQuestionIndex >= questionsTimestamps.length &&
			playedSeconds >= questionsTimestamps[currentQuestionIndex].start_time
			// !updateAnswerToDatabase
		) {
			setIsListening(false)
			setIsRecording(false)
			setShowReplayButton(false)
			setShowSkipButton(false)
		}
		if (
        currentQuestionIndex === questionsTimestamps.length - 1 &&
        playedSeconds >= questionsTimestamps?.[currentQuestionIndex].end_time
		) {
        setHasInterviewEnded(true);
        setIsListening(false);
        setIsRecording(false);
        setShowReplayButton(false);
        setShowSkipButton(false);
        toggleInterview();
		}

		if (isListening && playedSeconds >= listeningTimestamps.end_time) {
			reactPlayerRef?.current?.seekTo(listeningTimestamps.start_time)
		}
	}

	const handleEnded = () => {
		if (currentQuestionIndex <= questionsTimestamps.length - 1) {
			handlePostQuestionAction()
		} else {
			setHasInterviewEnded(true)
      toggleInterview()
		}
	}
	const replayQuestion = () => {
		if (reactPlayerRef.current) {
			reactPlayerRef.current.seekTo(questionsTimestamps[currentQuestionIndex].start_time)
		}
		setIsListening(false)
		setIsRecording(false)
		setShowSkipButton(false)
		setShowReplayButton(false)
	}

	useEffect(() => {
		if (!interviewKey) {
			getData()
		}
	}, [interviewKey])

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
								<Button colorScheme="facebook" mr={3} onClick={onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
					<Stack justifyContent={'center'} alignItems={'center'}>
						{/* {showHalfWay && <Image src={halfway} position={'absolute'} w="80vw" h={'80vh'} />} */}
						{category.length > 0 && (
							<Text border={'1px solid #fff'} p={2} borderRadius={'20px'} fontSize={'1.3rem'}>
								{formatCategory(category)}
							</Text>
						)}
						{/* {questions.length > 0 && (
							<Text fontSize={'1.3rem'}>
								Q{currentQuestionIndex + 1}: {questions[currentQuestionIndex].question_text}
							</Text>
						)} */}

						{!loading && !!desktopIntroVideo && !hasIntroVideoEnded && (
							<ReactPlayer
								ref={introVideoRef}
								playing
								playsinline
								onEnded={handleIntroVideoEnded}
								width="100%"
								height="90vh"
								controls
								url={desktopIntroVideo}
								pip={false}
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								onContextMenu={(e: any) => e.preventDefault()}
								config={{
									file: {
										attributes: {
											// eslint-disable-next-line @typescript-eslint/no-explicit-any
											onContextMenu: (e: any) => e.preventDefault(),
										},
									},
								}}
							/>
						)}
						{!loading && hasIntroVideoEnded && (
							<Stack justifyContent={'center'} alignItems={'center'}>
								<Progress
									value={((currentQuestionIndex + 1) / questions.length) * 100}
									size={'sm'}
									h={'10px'}
									w={'75vw'}
									borderRadius={'20px'}
									position={'absolute'}
									bottom={'10px'}
									colorScheme="facebook"
									zIndex={2}
								/>
								<Stack
									direction={'column'}
									position={'absolute'}
									top={'10vh'}
									left={'12vw'}
									spacing={0}
									gap={0}
									zIndex={2}
								>
									<Tooltip
										label={questions[currentQuestionIndex].question_text}
										placement="right"
										hasArrow
									>
										<Button
											colorScheme="facebook"
											bg={'none'}
											// position={'absolute'}
											// top={'12vh'}
											// right={'12vw'}
											padding={0}
											fontSize={'1.5rem'}
											_hover={{ bg: 'none' }}
											color={'#000000'}
										>
											<AiFillQuestionCircle />
										</Button>
									</Tooltip>
									<Tooltip label={'More Info'} placement="right" hasArrow>
										<Button
											colorScheme="facebook"
											bg={'none'}
											// position={'absolute'}
											// top={'10vh'}
											// right={'12vw'}
											fontSize={'1.5rem'}
											_hover={{ bg: 'none' }}
											color={'#000000'}
										>
											<AiFillInfoCircle />
										</Button>
									</Tooltip>
								</Stack>
								<ReactPlayer
									ref={reactPlayerRef}
									url={desktopQuestionsVideo}
									playing={true}
									style={{
										zIndex: 1,
										borderRadius: '30px',
									}}
									playsinline={true}
									width="100vw"
									height="90vh"
									progressInterval={1000}
									onProgress={handleProgress}
									onEnded={handleEnded}
									pip={false}
								/>
							</Stack>
						)}
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
							zIndex={2}
						>
							{showReplayButton && !hasInterviewEnded && (
								<ReplayButton replayQuestion={replayQuestion} />
							)}
							{/* {questions.length > 0 &&
								questions[currentQuestionIndex].question_type === 'multiple-choice' && (
									<MultipleChoiceButton
										options={questions[currentQuestionIndex].question_options}
										interviewKey={interviewKey}
										questionId={questions[currentQuestionIndex].question_id}
										goToNextQuestion={goToNextQuestion}
									/>
								)} */}
							{questions.length > 0 && isRecording && !hasInterviewEnded && (
								<AudioRecorder
									interviewKey={interviewKey}
									handleAnswer={() => {}}
									updateIsListening={updateIsListening}
									questionId={questions[currentQuestionIndex].question_id}
									goToNextQuestion={goToNextQuestion}
								/>
							)}
							{showSkipButton && !hasInterviewEnded && (
								<SkipButton skipQuestion={skipQuestion} skipLoading={skipLoading} />
							)}
						</Stack>
					</Stack>
				</>
			)}
		</>
	)
}

export default InterviewScreenVideoBot
