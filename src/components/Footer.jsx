import styled from "styled-components/macro";

const Footer = (props) => (
	<ScFooter>{props.children}</ScFooter>
);

export default Footer;

const ScFooter = styled.article`
	margin-top: 40px;
`;
