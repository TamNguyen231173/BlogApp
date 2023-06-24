import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonPrimary = styled(TouchableOpacity)`
  width: 90%;
  height: 42px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[0]} ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.radius[0]};
  border: 1px solid ${(props) => props.theme.colors.ui.primary};
`;
