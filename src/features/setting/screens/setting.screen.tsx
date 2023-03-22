import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Row } from "../../../components/utility/row.component";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Switch } from "react-native-paper";
import { Pressable } from "react-native";

const Block = styled.View``;

const Container = styled(SafeArea)`
  padding: ${(props) => props.theme.space[3]};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconBig = styled(Ionicons)`
  font-size: 20px;
  color: #000;
`;

const IconSmall = styled(Ionicons)`
  font-size: 10px;
  color: #000;
`;

const SwitchView = styled(Switch)`
  padding: 0;
`;

export const SettingScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const handleLogout = () => {};
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Container>
      <Header>
        <Pressable onPress={() => navigation.goBack()}>
          <IconBig name="arrow-back-outline"></IconBig>
        </Pressable>
        <Text variant="textBodyBlack">Settings</Text>
        <Block></Block>
      </Header>
      <Spacer position="top" size="medium">
        <Spacer position="bottom" size="large_xxx">
          <Row>
            <Row>
              <IconBig name="notifications-outline"></IconBig>
              <Spacer position="right" size="tiny" />
              <Text variant="textBodyBlack">Notification</Text>
            </Row>
            <IconSmall name="chevron-forward-outline"></IconSmall>
          </Row>
        </Spacer>
        <Spacer position="bottom" size="large_xxx">
          <Row>
            <Row>
              <IconBig name="lock-closed-outline"></IconBig>
              <Spacer position="right" size="tiny" />
              <Text variant="textBodyBlack">Security</Text>
            </Row>
            <IconSmall name="chevron-forward-outline"></IconSmall>
          </Row>
        </Spacer>
        <Spacer position="bottom" size="large_xxx">
          <Row>
            <Row>
              <IconBig name="help-circle-outline"></IconBig>
              <Spacer position="right" size="tiny" />
              <Text variant="textBodyBlack">Help</Text>
            </Row>
            <IconSmall name="chevron-forward-outline"></IconSmall>
          </Row>
        </Spacer>
        <Spacer position="bottom" size="large_xxx">
          <Row>
            <Row>
              <IconBig name="moon-outline"></IconBig>
              <Spacer position="right" size="tiny" />
              <Text variant="textBodyBlack">Dark Mode</Text>
            </Row>
            <SwitchView value={isSwitchOn} onValueChange={onToggleSwitch} />
          </Row>
        </Spacer>
        <Spacer position="bottom" size="large_xxx">
          <Pressable onPress={handleLogout}>
            <Row>
              <Row>
                <IconBig name="log-out-outline"></IconBig>
                <Spacer position="right" size="tiny" />
                <Text variant="textBodyBlack">Logout</Text>
              </Row>
            </Row>
          </Pressable>
        </Spacer>
      </Spacer>
    </Container>
  );
};
