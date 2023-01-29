import { useState } from 'react';
import '../styles/InputContainer.css';

const UrlShortener = ({ setInputValue }) => {
	const [value, setValue] = useState('');

	const handleClick = () => {
		setInputValue(value);
		setValue('');
	};
	return (
		<div className='inputContainer'>
            <h2>
				URL <span>Shortener</span>
			</h2>
			<p>Place your url inside the input.</p>
            <div>
				<input
					type='text'
					placeholder='Paste a link to squish...'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={handleClick}> Squish </button>
			</div>

		</div>
			
			
		
	);
};

export default UrlShortener;
