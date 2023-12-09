/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
// import MicIcon from '@mui/icons-material/Mic'
import { Button, Text, Tooltip, useToast } from '@chakra-ui/react'
// import { API_URL } from '../../global/constants'
// import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useAudioRecorder } from 'react-audio-voice-recorder'
// import styles from './index.module.css'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import Tooltip from '@mui/material/Tooltip'
//import 'webrtc-adapter';
// import feather from 'feather-icons'
import { FiMic, FiMicOff } from 'react-icons/fi'
import axios from 'axios'
import { API_URL } from '../utils/constants'

// const audioRecorder = new MicRecorder({ bitRate: 16 });

const mimeType = 'audio/mpeg'
interface AudioRecorderProps {
	interviewKey: string
	handleAnswer: (answer: string, key: string) => void
	updateIsListening: (isListening: boolean) => void
	questionId: number
	goToNextQuestion: () => void
}
export const AudioRecorder = (props: AudioRecorderProps) => {
	const { interviewKey, updateIsListening, questionId, goToNextQuestion } = props
	const toast = useToast()
	const [recordingStatus, setRecordingStatus] = useState('inactive')
	const [isRecordingStarted, setIsRecordingStarted] = useState(false)
	const [isStopRecordingTooltip, setStopRecordingTooltip] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		setIsRecordingStarted(false)
		setError(false)
		setRecordingStatus('inactive')
	}, [questionId])

	const { startRecording, stopRecording, recordingBlob, isRecording } = useAudioRecorder()

	useEffect(() => {
		if (!recordingBlob) return
		uploadRecording(recordingBlob)
	}, [recordingBlob])

	const uploadRecording = async (recordingBlob: BlobPart) => {
		const myUuid = uuidv4()
		const key = `${myUuid}_${interviewKey}.mp3`
		const file = new File([recordingBlob], key, { type: 'audio/mpeg' })
		const formData = new FormData()
		formData.append('question_id', questionId.toString())
		formData.append('interview_key', interviewKey)
		formData.append('recording', file)
		const { data } = await axios.post(`${API_URL}/user/answer/save`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		if (data.success) {
			toast({
				title: data.message,
				status: 'success',
				duration: 3000,
			})
			goToNextQuestion()
		} else {
			toast({
				title: data.message,
				status: 'error',
				duration: 3000,
			})
		}
	}

	const start = async () => {
		try {
			updateIsListening(true)
			startRecording()
			setRecordingStatus('recording')
		} catch (error) {
			console.error('Error accessing audio:', error)
		}
	}

	const stop = async () => {
		stopRecording()
	}

	return (
		<div>
			<main>
				<div
					className={`audio-controls ${
						recordingStatus === 'recording' ? 'recording-stop-btn' : 'recording-start-btn'
					}`}
				>
					{recordingStatus !== 'recording' && !isRecording ? (
						<Tooltip label="Record your answer" placement="top" hasArrow>
							<div>
								<Button
									onClick={start}
									style={{
										borderRadius: '50%',
										border: '1px',
										width: '75px',
										height: '75px',
										// color: enabledRecording ? '#ffffff' : 'gray',
										// borderColor: '#ffffff',
									}}
								>
									<Text fontSize="1.2rem">
										<FiMic
											style={{
												width: '2em',
												height: '2em',
												fontSize: 'large',
											}}
										/>
									</Text>
								</Button>
							</div>
						</Tooltip>
					) : null}

					{recordingStatus === 'recording' && isRecording ? (
						<Tooltip label="Stop Recording" placement="top" hasArrow>
							<Button
								onClick={stop}
								style={{
									borderRadius: '50%',
									border: '1px',
									width: '75px',
									height: '75px',
									backgroundColor: 'red',
									// color: enabledRecording ? '#ffffff' : 'gray',
									// borderColor: '#ffffff',
								}}
							>
								<Text fontSize={'1.2rem'}>
									<FiMic
										style={{
											width: '2em',
											height: '2em',
											fontSize: 'large',
										}}
									/>
								</Text>
							</Button>
						</Tooltip>
					) : null}
				</div>
			</main>
		</div>
	)
}
