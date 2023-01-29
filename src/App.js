import { ThemeProvider } from 'styled-components';
import Header from './components/Header.js';
import { Container } from './styles/Container.styled';
import GlobalStyles from './styles/Global.js';
import Footer from './components/Footer';
import { useState } from 'react';

import { UrlContainer } from './components/UrlContainer.js';
import QrContainer from './components/QrContainer.js';

const theme = {
	colors: {
		header: '#E6F0E6',
		body: '#fff',
		footer: '#003333',
	},
	mobile: '768px',
};

function App() {
	const [inputValue, setInputValue] = useState();
	const [qrInputValue, setQrInputValue] = useState();
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container id='shorten'>
					<UrlContainer
						setInputValue={setInputValue}
						inputValue={inputValue}
					/>
					<QrContainer
						setQrInputValue={setQrInputValue}
						qrInputValue={qrInputValue}
					/>
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;
