import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";

export const OTPInputContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextInputHidden = styled.TextInput`
  /* width: 300px;
  border-color: #e5e5e5;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
  margin-top: 50px;
  color: white; */
  position: absolute;
  opacity: 0;
`;

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const SplitBoxes = styled.View`
  border-color: ${colors.ui.secondary};
  border-width: 1px;
  border-radius: 6px;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

export const SplitBoxText = styled.Text`
  font-size: 40px;
  color: #000000;
  font-weight: bold;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: ${colors.ui.primary};
  border-width: 2px;
  background-color: ${colors.ui.optFocus}};
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #000000;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: black;
  font-size: 20px;
`;
