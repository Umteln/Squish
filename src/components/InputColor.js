import React, { useState } from 'react';
import { BlockPicker } from 'react-color';

const InputColor = () => {
	const [color, setColor] = useState('#054080');
	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	return (
		<>
			<label style={{ fontWeight: '700', fontSize: '1rem' }}> Color </label>

			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
				}}
			>
				<div
					style={{
						backgroundColor: `${color}`,
						width: 100,
						height: 50,
						border: '2px solid white',
					}}
					onClick={() => setDisplayColorPicker(!displayColorPicker)}
				></div>
				<span style={{ marginLeft: '0.5rem' }}> {color} </span>
			</div>
			{displayColorPicker && (
				<div className=''>
					<BlockPicker
						color={color}
						onChange={(color) => {
							setColor(color.hex);
						}}
					/>
				</div>
			)}
		</>
	);
};

export default InputColor;
