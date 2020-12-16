import styled from 'styled-components';

const Heading4 = (props) => <ScH4>{props.text}</ScH4>;

export default Heading4;

const ScH4 = styled.h4`
	color: var(--color-highlight);
	font-weight: 400;
`;
