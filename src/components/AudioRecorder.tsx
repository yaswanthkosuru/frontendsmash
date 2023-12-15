/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
// import MicIcon from '@mui/icons-material/Mic'
import { Button, Stack, Text, Tooltip, useToast } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { useAudioRecorder } from 'react-audio-voice-recorder'
import { FiMic, FiCheck } from 'react-icons/fi'
import axios from 'axios'
import { API_URL } from '../utils/constants'

// const audioRecorder = new MicRecorder({ bitRate: 16 });

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
	const [showSubmitButton, setShowSubmitButton] = useState(false)
	const [, setIsRecordingStarted] = useState(false)
	const [, setError] = useState(false)

	useEffect(() => {
		setIsRecordingStarted(false)
		setError(false)
		setRecordingStatus('inactive')
	}, [questionId])

	const { startRecording, stopRecording, recordingBlob, isRecording } = useAudioRecorder()

	// useEffect(() => {
	// 	if (!recordingBlob) return
	// 	uploadRecording(recordingBlob)
	// }, [recordingBlob])

	const uploadRecording = async (recordingBlob: BlobPart | any) => {
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
			setShowSubmitButton(false)
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
			setShowSubmitButton(false)
		} catch (error) {
			console.error('Error accessing audio:', error)
		}
	}

	const stop = async () => {
		toast({
			title:
				'If you are happy with your answer, click the checkmark to submit. Otherwise, click the microphone to re-record.',
			status: 'info',
			duration: 3000,
		})
		stopRecording()
		setShowSubmitButton(true)
		setRecordingStatus('inactive')
	}

	return (
		<Stack direction={'row'}>
			{recordingStatus !== 'recording' && !isRecording ? (
				<Tooltip
					label={showSubmitButton ? 'Re-record your answer' : 'Record your answer'}
					placement="top"
					hasArrow
				>
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
			{showSubmitButton ? (
				<Tooltip label="Submit your answer" placement="top" hasArrow>
					<Button
						onClick={() => uploadRecording(recordingBlob)}
						style={{
							borderRadius: '50%',
							border: '1px',
							width: '75px',
							height: '75px',
							// backgroundColor: 'green',
							// color: enabledRecording ? '#ffffff' : 'gray',
							// borderColor: '#ffffff',
						}}
					>
						<Text fontSize={'1.2rem'}>
							<FiCheck
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
		</Stack>
	)
}
