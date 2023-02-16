import styled from "styled-components/native";
import { Pressables } from "react-native";

export const ButtonFollow = styled(Pressables)`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.radius[0]};
`;
