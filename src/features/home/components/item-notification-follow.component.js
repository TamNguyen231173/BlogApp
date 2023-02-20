import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import IonsIcons from "react-native-vector-icons/Ionicons";

const CardContainer = styled(Card)`
  background-color: #eef1f4;
  border-radius: 6px;
`;

const ImageView = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Col = styled.View`
  flex-direction: column;
  width: 43%;
`;

const Desc = styled(Text)`
  width: 100%;
  line-height: 24px;
`;

const ButtonFollow = styled(ButtonPrimary)`
  width: 30%;
  padding: 0px 4px;
  background-color: #fff;
`;

const Icon = styled(IonsIcons)`
  font-size: 20px;
`;

const TextButton = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const ItemNotificationFollow = () => {
  return (
    <CardContainer>
      <Card.Content>
        <Row>
          <Spacer position="right" size="tiny">
            <ImageView
              source={{
                uri: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
              }}
            />
          </Spacer>
          <Col>
            <Spacer position="right" size="tiny">
              <Row>
                <Desc numberOfLines={2} ellipsizeMode="tail" variant="amount">
                  Modelyn Saris <Text variant="body">is now following you</Text>
                </Desc>
              </Row>
              <Spacer position="top" size="tiny" />
              <Text variant="timeText">15m ago</Text>
            </Spacer>
          </Col>
          <ButtonFollow>
            <TextButton variant="buttonText">
              <Icon name="add-outline" />
              Follow
            </TextButton>
          </ButtonFollow>
        </Row>
      </Card.Content>
    </CardContainer>
  );
};
