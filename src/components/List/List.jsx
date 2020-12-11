import styled from "styled-components/macro";

const List = (props) => <ScList>{props.children}</ScList>;

export default List;

const ScList = styled.ul`
	width: 49.5%;
	display: inline-block;

	vertical-align: top;
	@media (max-width:500px) {
		width: 100%;
		margin-top: 24px;

		&:first-child {
			margin-top: 0;
		}
	}
`;
