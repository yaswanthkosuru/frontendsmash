import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Interview from './pages/Interview.tsx'
import { v4 as uuidv4 } from 'uuid'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider>
		<Interview name="test" smashUserId={uuidv4()} botPreference="male" />
	</ChakraProvider>,
)
