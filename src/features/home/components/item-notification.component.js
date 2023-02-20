import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

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
  text-align: center;
`;

const Col = styled.View`
  flex-direction: column;
`;

const Desc = styled(Text)`
  width: 88%;
  line-height: 24px;
`;

export const ItemNotification = () => {
  return (
    <CardContainer>
      <Card.Content>
        <Row>
          <ImageView
            source={{
              uri: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            }}
          />
          <Spacer position="left" size="small" />
          <Col>
            <Row>
              <Desc numberOfLines={2} ellipsizeMode="tail" variant="amount">
                Name{" "}
                <Text variant="body">
                  has posted new europe news “Ukraine's President Zelesdfsdfnko
                </Text>
              </Desc>
            </Row>
            <Spacer position="top" size="tiny" />
            <Text variant="timeText">15m ago</Text>
          </Col>
        </Row>
      </Card.Content>
    </CardContainer>
  );
};
