import React, { useEffect, useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SearchbarView,
  SearchContainer,
} from "../../home/components/home.style";
import IonIcons from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { NewsCategory } from "../../news/components/newsCategory.component";
import { useGetAllPostsQuery } from "../../../redux/api";

const ListContainer = styled.View`
  background-color: #fff;
`;

const Container = styled(SafeArea)`
  padding: ${(props) => props.theme.space[3]};
`;

export const BookmarkScreen = () => {
  const { data: news, isLoading } = useGetAllPostsQuery();
  return (
    <Container>
      <Text variant="TitleTab">Bookmark</Text>
      <Spacer position="top" size="medium">
        <SearchContainer>
          <SearchbarView
            elevation="0"
            placeholder="Search"
            placeholderTextColor="#A0A3BD"
          />
          <IonIcons name="options-outline" size={20} />
        </SearchContainer>
      </Spacer>
      <Spacer position="top" size="large">
        <ListContainer>
          <FlatList
            data={news}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <NewsCategory key={item.title} news={item} />
                </Spacer>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </ListContainer>
      </Spacer>
    </Container>
  );
};
