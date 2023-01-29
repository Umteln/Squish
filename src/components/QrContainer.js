import React, { useEffect, useState } from 'react';
import StyledCard from '../styles/Card.styed';
import QRCode from 'qrcode';
import '../styles/InputForm.css';
import { Button } from '../styles/Button.styled';
import { saveAs } from 'file-saver';

const QrContainer = ({ qrInputValue, setQrInputValue }) => {
	const [src, setSrc] = useState('');
	const [codeImg, setCodeImg] = useState(false);
	const [downloaded, setDownloaded] = useState(false);

	useEffect(() => {
		QRCode.toDataURL(qrInputValue).then((data) => setSrc(data));
	}, [qrInputValue]);

	const handleClick = () => {
		setCodeImg(true);
	};
	const handleDownloadImage = () => {
		setDownloaded(true);
		saveAs(src, 'qrCode.png');
	};

	return (
		<StyledCard>
			<div className='inputContainer'>
				<h2>
					QR <span>Generator</span>
				</h2>
				<p>Create you unique QR Code by entering your URL below.</p>
				<div>
					<input
						type='url'
						placeholder='https://example.com'
						onChange={(e) => setQrInputValue(e.target.value)}
					/>
					<button onClick={handleClick}> Generate QR Code</button>
				</div>
			</div>
			<div>
				{codeImg ? (
					<div className='qrCode'>
						<img
							src={src}
							alt='qrCode'
						/>

						<Button
							onClick={handleDownloadImage}
							className={downloaded ? 'downloaded' : ''}
						>
							Download
						</Button>
					</div>
				) : (
					<div className='qrCode'>
						<p>Your QR Code will display here</p>

						<Button> Disabled</Button>
					</div>
				)}
			</div>
		</StyledCard>
	);
};

export default QrContainer;
