import styled from 'styled-components';

import Link from '@/components/Link';
import Heading3 from '@/components/Heading/Heading3';
import Heading4 from '@/components/Heading/Heading4';

const ListItem = (props) => (
	<ScListItem>
		{props.heading && <Heading3 text={props.heading} />}
		{props.title && <Heading4 text={props.title} />}
		{props.text && <span>{props.text}</span>}
		{props.linkText && props.linkUrl && (
			<Link
				href={props.linkUrl}
				title={props.linkTitle}
				target={props.target}
				rel={props.linkRel}
			>
				{props.linkText}
			</Link>
		)}
		{props.afterText && <ScAfterText>{props.afterText}</ScAfterText>}
	</ScListItem>
);

export default ListItem;

const ScListItem = styled.li`
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;

const ScAfterText = styled.div`
	margin-left: 4px;
	display: inline-block;
`;
