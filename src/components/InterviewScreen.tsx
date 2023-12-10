/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import { AudioRecorder } from './AudioRecorder'
import { BrowserView, MobileView } from 'react-device-detect'
import { ReplayButton } from './ReplayButton'
import { SkipButton } from './SkipButton'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { API_URL } from '../utils/constants'

const questionTimestamps = [
	{
		start_time: 0,
		end_time: 42,
	},
	{
		start_time: 43,
		end_time: 50,
	},
	{
		start_time: 50,
		end_time: 59,
	},
	{
		start_time: 60,
		end_time: 66,
	},
]

const skipTimestamps = [
	{
		start_time: 80,
		end_time: 83,
	},
	{
		start_time: 84,
		end_time: 87,
	},
	{
		start_time: 94,
		end_time: 102,
	},
	{
		start_time: 87,
		end_time: 93,
	},
]

const listeningTimestamp = {
	start_time: 102,
	end_time: 106,
}

const positiveResponseTimestamp = [
	{
		start_time: 66,
		end_time: 69,
	},
	{
		start_time: 70,
		end_time: 71,
	},
	{
		start_time: 71,
		end_time: 76,
	},
	{
		start_time: 77,
		end_time: 80,
	},
]
interface InterviewScreenProps {
	name: string
	smashUserId: string
	botPreference: string
}
const InterviewScreen: React.FC<InterviewScreenProps> = ({ name, smashUserId, botPreference }) => {
	const reactPlayerRef = useRef<ReactPlayer>(null)
	const [videoUrl, setVideoUrl] = useState(
		'https://dcjm8p546xa2.cloudfront.net/smash-videos/smash_demo_v3.mp4',
	)
	const [mobileVideoUrl, setMobileVideoUrl] = useState(
		'https://dcjm8p546xa2.cloudfront.net/practice-videos/mobile-practice.mp4',
	)
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [isListening, setIsListening] = useState(false)
	const [isRecording, setIsRecording] = useState(false)
	const [showReplayButton, setShowReplayButton] = useState(false)
	const [showSkipButton, setShowSkipButton] = useState(false)
	const [loading, setLoading] = useState(false)
	const [hasInterviewEnded, setHasInterviewEnded] = useState(false)
	const [isPositiveResponse, setIsPositiveResponse] = useState(false)
	const [isSkip, setSkip] = useState(false)
	const [start, setStart] = useState(false)
	const [playing, setPlaying] = useState(true)
	const [playsinline, setPlaysinline] = useState(true)
	const [questions, setQuestions] = useState([
		{
			question_id: 0,
			question_text: 'What is your gender?',
			question_type: 'multiple-choice',
			question_options: ['male', 'female', 'non-binary', 'other'],
		},
		{
			question_id: 1,
			question_text: 'What are your preferred pronouns?',
			question_type: 'audio',
			question_options: [],
		},
		{
			question_id: 2,
			question_text: 'What is your Date of birth?',
			question_type: 'audio',
			question_options: [],
		},
		{
			question_id: 3,
			question_text: 'What is your ethnicity?',
			question_type: 'multiple-choice',
			question_options: ['asian', 'african', 'american', 'white'],
		},
	])
	const [data, setData] = useState({
		_id: '654d1300328df0e4899b689d',
		category: 'personal_life',
		desktop_video_link: '',
		mobile_video_link: '',
		timestamps: [],
		listening_timestamp: {
			start_time: 0,
			end_time: 0,
		},
		questions: [
			{
				question_id: 0,
				question_text: 'What is your gender?',
				question_type: 'multiple-choice',
				question_options: ['male', 'female', 'non-binary', 'other'],
			},
			{
				question_id: 1,
				question_text: 'What are your preferred pronouns?',
				question_type: 'audio',
				question_options: [],
			},
			{
				question_id: 2,
				question_text: 'What is your Date of birth?',
				question_type: 'audio',
				question_options: [],
			},
			{
				question_id: 3,
				question_text: 'What is your ethnicity?',
				question_type: 'multiple-choice',
				question_options: ['asian', 'african', 'american', 'white'],
			},
		],
	})
	// Retrieve question from db
	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.post(`${API_URL}/user/login`, {
				name,
				smash_user_id: smashUserId,
				bot_preference: botPreference,
			})
			console.log('data', data)
		}
		getData()
	}, [name, smashUserId, botPreference])

	useEffect(() => {
		if (reactPlayerRef && reactPlayerRef.current) {
			console.log('currentQuestionIndex', currentQuestionIndex)
			const start_time = questionTimestamps[currentQuestionIndex]?.start_time
			if (start_time) {
				if (reactPlayerRef.current) {
					reactPlayerRef.current.seekTo(start_time, 'seconds')
				}
			}
			setIsRecording(false)
			if (reactPlayerRef.current) {
				setPlaying(true)
				setPlaysinline(true)
			}
		}
	}, [currentQuestionIndex])

	const handlePostQuestionAction = () => {
		if (!isListening && currentQuestionIndex <= questionTimestamps.length - 1) {
			setIsListening(true)
			handleListeningLoop()
		}
	}

	const handleProgress = ({ playedSeconds }: { playedSeconds: number }) => {
		if (currentQuestionIndex === 0 && !start) {
			if (reactPlayerRef.current) {
				reactPlayerRef.current.seekTo(questionTimestamps[0].start_time)
				setStart(true)
			}
		}
		console.log('isPositiveResponse', isPositiveResponse)
		if (
			isPositiveResponse &&
			playedSeconds >= positiveResponseTimestamp[currentQuestionIndex].end_time
		) {
			console.log('currentQuestionIndex', currentQuestionIndex)
			if (currentQuestionIndex === questionTimestamps.length - 1) {
				setHasInterviewEnded(true)
			} else {
				setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
				setIsPositiveResponse(false)
			}
		}
		if (
			isSkip &&
			playedSeconds >= skipTimestamps[currentQuestionIndex].end_time &&
			currentQuestionIndex <= questionTimestamps.length
		) {
			console.log('inside is skip')
			setShowSkipButton(false)
			setShowReplayButton(false)
			if (currentQuestionIndex === questionTimestamps.length - 1) {
				setHasInterviewEnded(true)
			} else {
				setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
				setSkip(false)
				setIsListening(false)
			}
		}
		if (
			!isListening &&
			!isPositiveResponse &&
			!isSkip &&
			currentQuestionIndex <= questionTimestamps.length - 1 &&
			playedSeconds >= questionTimestamps[currentQuestionIndex].end_time
		) {
			// if (currentQuestionIndex === 0) {
			//     console.log("Is Question Zero");
			//     setIsQuestionZero(true);
			// } else if (currentQuestionIndex === 1) {
			//     console.log("Is Question One");
			//     setIsQuestionOne(true);
			// } else {
			setIsRecording(true)
			setShowReplayButton(true)
			setShowSkipButton(true)
			//}
			handlePostQuestionAction()
		}
		// if (
		//     currentQuestionIndex >= questionTimestamps.length - 1 &&
		//     playedSeconds >= questionTimestamps[currentQuestionIndex].start_time
		// ) {
		//     console.log("Interview has ended successfully!!!");
		//     setIsListening(false);
		//     setIsRecording(false);
		//     setUpdateEndedToDatabase(true);
		// }
		if (
			currentQuestionIndex === questionTimestamps.length &&
			playedSeconds >= questionTimestamps[currentQuestionIndex].end_time
		) {
			setHasInterviewEnded(true)
			console.log('Interview has ended successfully!!!')
			setIsListening(false)
			setIsRecording(false)
			setShowReplayButton(false)
		}

		if (isListening && playedSeconds >= listeningTimestamp.end_time) {
			if (reactPlayerRef.current) {
				reactPlayerRef.current.seekTo(listeningTimestamp.start_time, 'seconds')
			}
			// setShowSkipButton(false)
			// setShowReplayButton(false)
		}
	}

	const handleEnded = () => {
		if (currentQuestionIndex <= questionTimestamps.length - 1) {
			handlePostQuestionAction()
		} else {
			setHasInterviewEnded(true)
		}
	}

	const handleListeningLoop = () => {
		if (reactPlayerRef.current) {
			reactPlayerRef.current.seekTo(listeningTimestamp.start_time, 'seconds')
		}
	}

	const goToNextQuestion = () => {
		console.log('inside next question', currentQuestionIndex)
		if (currentQuestionIndex > questionTimestamps.length) {
			setHasInterviewEnded(true)
			setIsListening(false)
			setIsRecording(false)
			setShowReplayButton(false)
			setShowSkipButton(false)
		} else {
			setIsListening(false)
			setShowReplayButton(false)
			setShowSkipButton(false)
			setIsPositiveResponse(true)
			setPositiveResponse()
			//setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
		}
	}

	const setPositiveResponse = () => {
		console.log(
			'inside positive response timestamps',
			positiveResponseTimestamp[currentQuestionIndex].start_time,
		)
		if (reactPlayerRef.current) {
			reactPlayerRef.current.seekTo(
				positiveResponseTimestamp[currentQuestionIndex].start_time,
				'seconds',
			)
		}
		//setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
	}

	const updateIsListening = (value: boolean | ((prevState: boolean) => boolean)) => {
		setIsListening(value)
		if (value) {
			setShowReplayButton(false)
			setShowSkipButton(false)
			handleListeningLoop()
		} else {
			goToNextQuestion()
		}
	}

	// const startInterview = () => {
	// 	handleClose()
	// 	setPlaying(true)
	// 	setPlaysinline(true)
	// }

	const skipQuestion = () => {
		console.log('inside skip')
		setSkip(true)
		setIsListening(false)
		setShowSkipButton(false)
		setShowReplayButton(false)
		setIsRecording(false)
		if (reactPlayerRef.current) {
			reactPlayerRef.current.seekTo(skipTimestamps[currentQuestionIndex]?.start_time, 'seconds')
		}
	}

	// useEffect(() => {
	//     setTimeout(() => {
	//         if (isQuestionZero) {
	//             setIsQuestionZero(false);
	//             updateIsListening(false);
	//         }
	//         console.log("calling after first question");
	//     }, 5000);
	// }, [isQuestionZero]);

	// useEffect(() => {
	//     setTimeout(() => {
	//         if (isQuestionOne) {
	//             setIsQuestionOne(false);
	//             updateIsListening(false);
	//         }
	//         console.log("calling after first question");
	//     }, 5000);
	// }, [isQuestionOne]);

	const replayQuestion = () => {
		if (reactPlayerRef.current) {
			reactPlayerRef.current.seekTo(questionTimestamps[currentQuestionIndex].start_time)
		}
		setPlaying(true)
		setIsListening(false)
		setIsRecording(false)
		setShowSkipButton(false)
		setShowReplayButton(false)
	}

	return (
		<div>
			<MobileView>
				<div>
					{!loading && !hasInterviewEnded && (
						<ReactPlayer
							ref={reactPlayerRef}
							url={mobileVideoUrl}
							// controls
							style={{
								zIndex: -1,
							}}
							playing={playing}
							playsinline={playsinline}
							width="100%"
							height="100vh"
							progressInterval={1000}
							onProgress={handleProgress}
							onEnded={handleEnded}
							pip={false}
						/>
					)}
					{/* {hasInterviewEnded && <EndInterview interviewKey={''} isPracticeInterview={true} />} */}
					{isRecording && !hasInterviewEnded && (
						<div>
							{/* <p>Recording...</p> */}
							{/* <ReactMic record={isRecording} onStop={handleRecordingComplete} /> */}
							<AudioRecorder
								interviewKey={''}
								handleAnswer={() => {}}
								updateIsListening={updateIsListening}
								questionId={currentQuestionIndex}
								goToNextQuestion={goToNextQuestion}
							/>
						</div>
					)}
				</div>
			</MobileView>
			<BrowserView>
				{!loading && !hasInterviewEnded && (
					<ReactPlayer
						ref={reactPlayerRef}
						url={videoUrl}
						playing={playing}
						style={{
							zIndex: -1,
						}}
						playsinline={playsinline}
						width="100%"
						height="100vh"
						progressInterval={1000}
						onProgress={handleProgress}
						onEnded={handleEnded}
						pip={false}
					/>
				)}
				{/* {hasInterviewEnded && <EndInterview interviewKey={''} isPracticeInterview={true} />} */}
				{!hasInterviewEnded && (
					<>
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
							{showReplayButton && <ReplayButton replayQuestion={replayQuestion} />}
							{/* <p>Recording...</p> */}
							{/* <ReactMic record={isRecording} onStop={handleRecordingComplete} /> */}
							{isRecording && (
								<AudioRecorder
									interviewKey={''}
									handleAnswer={() => {}}
									updateIsListening={updateIsListening}
									questionId={currentQuestionIndex}
									goToNextQuestion={goToNextQuestion}
								/>
							)}
							{/* {showSkipButton && <SkipButton skipQuestion={skipQuestion} />} */}
						</Stack>
					</>
				)}
			</BrowserView>
		</div>
	)
}

export default InterviewScreen
