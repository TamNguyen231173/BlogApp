import styled from "styled-components/native";
import { Checkbox } from "react-native-paper";

export const ContainerView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const InputContainer = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxView = styled(Checkbox)`
  width: 20px;
  height: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  line-height: 21px;
  letter-spacing: 0.12px;
`;

export const Col2 = styled.View`
  width: 45%;
`;
