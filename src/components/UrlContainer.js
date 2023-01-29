import React from 'react';
import StyledCard from '../styles/Card.styed';
import LinkResult from './LinkResult';
import UrlShortener from './UrlShortener';

export const UrlContainer = ({ inputValue, setInputValue }) => {
	return (
		<StyledCard>
			<div>
				<UrlShortener setInputValue={setInputValue} />
			</div>
			<div>
				<LinkResult inputValue={inputValue} />
			</div>
		</StyledCard>
	);
};
