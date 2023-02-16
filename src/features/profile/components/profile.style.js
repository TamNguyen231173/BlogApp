import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/text.component";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[4]};
  position: relative;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const HeaderText = styled(Text)`
  text-align: center;
`;

export const SvgContainer = styled(SvgXml)``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Col2 = styled.View`
  width: 47.5%;
`;

export const FollowContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const AddButton = styled(ButtonPrimary)`
  position: absolute;
  bottom: 12;
  right: 24;
  width: 54px;
  height: 54px;
  border-radius: 27px;
`;
