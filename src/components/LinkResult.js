import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Result.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import LinkLottie from '../images/link.json';
import Lottie from 'lottie-react';

const LinkResult = ({ inputValue }) => {
	const [shortenLink, setShortenLink] = useState('');
	const [copied, setCopied] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await axios(
				`https://api.shrtco.de/v2/shorten?url=${inputValue}`
			);
			setShortenLink(res.data.result.full_short_link);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (inputValue && inputValue.length > 0) {
			fetchData();
		}
	}, [inputValue]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [copied]);

	if (loading) {
		return <p className='noData'>loading...</p>;
	}
	if (error) {
		return <p className='noData'>Uh-Oh...Something went wrong!</p>;
	}

	return (
		<>
			{!shortenLink && (
				<div className='lottie'>
					<Lottie
						loop={true}
						animationData={LinkLottie}
					/>
				</div>
			)}
			{shortenLink && (
				<div className='result'>
					<p>{shortenLink}</p>
					<CopyToClipboard
						text={shortenLink}
						onCopy={() => setCopied(true)}
					>
						<button className={copied ? 'copied' : ''}>
							Copy to Clipboard
						</button>
					</CopyToClipboard>
				</div>
			)}
		</>
	);
};

export default LinkResult;
