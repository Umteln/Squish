import React from 'react';
import { StyledHeader, Nav, Logo, Image } from '../styles/Header.styled';
import { Container } from '../styles/Container.styled';
import { Button } from '../styles/Button.styled';
import logo from '../images/SquishOutline.svg';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo
						src={logo}
						alt='logo'
					/>
				</Nav>

				<div>
					<h1>Squish URLs. Generate QR Codes</h1>

					<p>
						Shorten URLs and create unique QR Codes for businesses, customers,
						and to even help build your brand.
					</p>

					<a href='#shorten'>
						<Button
							bg='#f99f38'
							color='#fff'
						>
							Get Started for Free
						</Button>
					</a>
				</div>
			</Container>
		</StyledHeader>
	);
};
export default Header;
