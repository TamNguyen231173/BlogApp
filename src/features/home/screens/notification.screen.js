import React from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Text } from "../../../components/typography/text.component";
import { ItemNotification } from "../components/item-notification.component";
import { Row } from "../components/home.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ItemNotificationFollow } from "../components/item-notification-follow.component";

const Container = styled(SafeArea)`
  padding: 20px;
`;

const Icon = styled(IonIcons)`
  font-size: 20px;
`;

export const NotificationScreen = () => {
  return (
    <Container>
      <Row>
        <Icon name="arrow-back-outline" />
        <Text variant="amount">Notification</Text>
        <Icon name="ellipsis-vertical-outline" />
      </Row>
      <Spacer position="top" size="medium">
        <Text variant="amount">Today, April 22</Text>
      </Spacer>
      <Spacer position="top" size="medium">
        <ItemNotification />
      </Spacer>
      <Spacer position="top" size="medium">
        <ItemNotificationFollow />
      </Spacer>
    </Container>
  );
};
