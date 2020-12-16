import styled from 'styled-components';

const Link = (props) => (
	<ScLink
		href={props.href}
		target={props.target}
		rel={props.rel}
		title={props.title}
	>
		{props.children}
	</ScLink>
);

export default Link;

const ScLink = styled.a`
	border-bottom: 1px dotted var(--color-link);
	box-shadow: none;
	transition-duration: 0.5s;

	color: var(--color-link);
	text-decoration: none;
	cursor: pointer;

	:hover {
		box-shadow: none;
		border-bottom: 1px dotted var(--color-link-hover);
		transition-duration: 0.1s;

		color: var(--color-link-hover);
		text-decoration: none;
	}
`;
