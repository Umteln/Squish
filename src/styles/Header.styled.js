import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.header};
	padding: 40px 0;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	width: 20%;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 50%;
		margin-bottom: 40px;
	}
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px:
  }
`;
