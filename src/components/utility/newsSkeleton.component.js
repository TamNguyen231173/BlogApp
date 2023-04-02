import React from "react";
import { Text, View, Dimensions } from "react-native";
import styled from "styled-components/native";
import Skeleton from "./skeleton.component";

const cardWidth = Dimensions.get("window").width * 0.985;
const skeWidth = cardWidth - 32;

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  border-radius: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Column = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 8px;
`;

export const NewsTrendingSkeleton = () => {
  return (
    <Card>
      <Skeleton
        width={skeWidth}
        height={(skeWidth / 16) * 9}
        style={{ borderRadius: 20 }}
      />
      <Skeleton
        width={80}
        height={20}
        style={{ borderRadius: 20, marginTop: 8, marginLeft: 4 }}
      />
      <Skeleton
        width={skeWidth}
        height={20}
        style={{ borderRadius: 20, marginTop: 10, marginLeft: 4 }}
      />
      <Row style={{ marginTop: 10 }}>
        <Skeleton
          width={40}
          height={40}
          style={{ borderRadius: 20, marginLeft: 4 }}
        />
        <Skeleton
          width={100}
          height={20}
          style={{ borderRadius: 20, marginLeft: 8 }}
        />
      </Row>
    </Card>
  );
};

export const NewsCategorySkeleton = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Row>
        <Skeleton width={96} height={96} style={{ borderRadius: 6 }} />
        <Column>
          <Skeleton width={96} height={20} style={{ borderRadius: 6 }} />
          <Skeleton
            width={skeWidth - 96 - 8}
            height={20}
            style={{ borderRadius: 6, marginTop: 8 }}
          />
          <Row style={{ marginTop: 8 }}>
            <Skeleton width={30} height={30} style={{ borderRadius: 15 }} />
            <Skeleton
              width={96}
              height={20}
              style={{ borderRadius: 6, marginLeft: 8 }}
            />
          </Row>
        </Column>
      </Row>
    </Card>
  );
};
