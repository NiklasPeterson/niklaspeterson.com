import styled from 'styled-components';

const Heading1 = (props) => <ScH1>{props.text}</ScH1>;

export default Heading1;

const ScH1 = styled.h1`
	color: var(--color-highlight);
	font-size: 16px;
	line-height: 1.5;
	letter-spacing: 0.4px;
	text-transform: uppercase;
`;