import styled, { useTheme } from "styled-components/native";

const sizeVarient = {
	tiny: 1,
	small: 2,
	medium: 3,
	large: 4,
	large_x: 5,
	large_xx: 6,
};

const positionVarient = {
	top: "margin-top",
	left: "margin-left",
	right: "margin-right",
	bottom: "margin-bottom",
};

const getVarient = (position, size, theme) => {
	const sizeIndex = sizeVarient[size];
	const property = positionVarient[position];
	const value = theme.space[sizeIndex];

	return `${property}: ${value}`;
};

const SpacerView = styled.View`
	${({ varient }) => varient};
`;

export const Spacer = ({ position, size, children }) => {
	const theme = useTheme();
	const varient = getVarient(position, size, theme);
	return <SpacerView varient={varient}>{children}</SpacerView>;
};

Spacer.defaultProps = {
	position: "top",
	size: "small",
};
