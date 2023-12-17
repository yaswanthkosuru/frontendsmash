import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Interview from './pages/Interview.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider>
			<Interview name="test" smashUserId="0" botPreference="male" />
		</ChakraProvider>
	</React.StrictMode>,
)
