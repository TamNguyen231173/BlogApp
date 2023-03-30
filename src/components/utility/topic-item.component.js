import React from "react";
import styled from "styled-components/native";
import { Row } from "./row.component";
import { ButtonPrimary } from "./button-primary.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Col = styled.View`
  flex-direction: column;
  width: 150px;
`;

const CardImage = styled.Image`
  border-radius: 10px;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const Button = styled(ButtonPrimary)`
  width: 100px;
  padding: 5px 13px;
`;

export const TopicItem = ({ item = {} }) => {
  const {
    image = "https://images.unsplash.com/photo-1676791867988-d746dfc3b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    name = "Category Name",
  } = item;

  return (
    <Container>
      <Row>
        <CardImage source={{ uri: image }} />
        <Spacer position="left" size="small">
          <Col>
            <Text variant="textBodyBlack">{name}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail" variant="caption">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </Text>
          </Col>
        </Spacer>
      </Row>
      <Button>
        <Text variant="buttonText">Save</Text>
      </Button>
    </Container>
  );
};
