import styled, { useTheme } from "styled-components/native";
import { ViewProps } from "react-native";
import React from "react";

const sizeVarient = {
  tiny: 1,
  small: 2,
  medium: 3,
  large: 4,
  large_x: 5,
  large_xx: 6,
  large_xxx: 7,
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

interface SpacerProps extends ViewProps {
  position: "top" | "left" | "right" | "bottom";
  size:
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "large_x"
    | "large_xx"
    | "large_xxx";
}

const SpacerView = styled.View<SpacerProps>`
  ${({ position, size, theme }) => getVarient(position, size, theme)}
`;

export const Spacer = ({ position, size }: SpacerProps) => {
  const theme = useTheme();
  return <SpacerView position={position} size={size} theme={theme} />;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
