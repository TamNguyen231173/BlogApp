import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const TextInputView = styled(TextInput).attrs({
  mode: "outlined",
  outlineColor: "#4E4B66",
  activeOutlineColor: "#1877F2",
  wordBreak: "break-word",
})`
  height: 40px;
  margin-top: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
`;
