import { Pressable } from "react-native";
import styled from "styled-components/native";

export const ButtonPrimary = styled(Pressable)`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[0]} ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.radius[0]};
  border: 1px solid ${(props) => props.theme.colors.ui.primary};
`;
