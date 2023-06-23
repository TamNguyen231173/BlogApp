import styled, { useTheme } from "styled-components/native";
import { StyledProps } from "styled-components";
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

interface SpacerProps extends StyledProps<any> {
  position: keyof typeof positionVarient;
  size: keyof typeof sizeVarient;
}

const getVarient = (position: string, size: string, theme: any) => {
  const property = positionVarient[position];
  const value = sizeVarient[size];
  const sizeIndex = value - 1;
  const sizeValue = theme.space[sizeIndex];
  return `${property}:${sizeValue}`;
};

const SpacerView = styled.View<SpacerProps>`
  ${({ varient }) => varient};
`;

export const Spacer = ({ position, size, children }: SpacerProps) => {
  const theme = useTheme();
  const varient = getVarient(position, size, theme);
  return <SpacerView varient={varient}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
