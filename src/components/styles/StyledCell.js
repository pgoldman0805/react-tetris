import styled, { css, keyframes } from "styled-components";

export const boxShadowSweepEffect = keyframes`
	0% {
		box-shadow: 4px 4px 16px green;
	}
	50%{
		box-shadow: 4px 4px 16px red;
	}
	100% {
		box-shadow: 4px 4px 16px green;
	}
`;

const animation = css`
	animation: ${boxShadowSweepEffect} 3s ease-in infinite;
`;
export const StyledCell = styled.div`
	width: auto;
	background: rgba(${(props) => props.color}, 0.7);
	border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
	border-bottom-color: rgba(${(props) => props.color}, 0.1);
	border-right-color: rgba(${(props) => props.color}, 1);
	border-top-color: rgba(${(props) => props.color}, 1);
	border-left-color: rgba(${(props) => props.color}, 0.3);
	animation: ${animation};
`;
