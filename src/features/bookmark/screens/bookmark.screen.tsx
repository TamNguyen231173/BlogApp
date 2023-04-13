import React, { useEffect, useState } from "react";
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
import { useGetUserBookmarksQuery } from "../../../redux/api";
import { NewsTrending } from "../../news/components/newsTrending.component";
import { NewsTrendingSkeleton } from "../../../components/utility/newsSkeleton.component";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const ListContainer = styled.View`
  background-color: #fff;
  height: ${height * 0.67}px};
`;

const Container = styled(SafeArea)`
  padding: ${(props) => props.theme.space[3]};
`;

export const BookmarkScreen = () => {
  let page = 1;
  const { data, isLoading, refetch } = useGetUserBookmarksQuery(page);

  useEffect(() => {
    refetch();
  }, []);

  // Search post functionality
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Text variant="TitleTab">Bookmark</Text>
      <Spacer position="top" size="medium">
        <SearchContainer>
          <SearchbarView
            elevation="0"
            placeholder="Search"
            placeholderTextColor="#A0A3BD"
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
          />
          <IonIcons name="options-outline" size={20} />
        </SearchContainer>
      </Spacer>

      <Spacer position="top" size="large">
        <ListContainer>
          {/* Filter the data based on the search query and pass the filtered data to the FlatList */}
          <FlatList
            style={{ flex: 1, backgroundColor: "#fff" }}
            showsVerticalScrollIndicator={false}
            data={
              data &&
              data.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            }
            renderItem={({ item }) => {
              return (
                <Spacer key={item.title} position="bottom" size="large">
                  <NewsTrending news={item} />
                </Spacer>
              );
            }}
            keyExtractor={(item) => item._id.toString()}
            ListEmptyComponent={() => {
              return (
                <>
                  <NewsTrendingSkeleton />
                  <NewsTrendingSkeleton />
                </>
              );
            }}
          />
        </ListContainer>
      </Spacer>
    </Container>
  );
};
