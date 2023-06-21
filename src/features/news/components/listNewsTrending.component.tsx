import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { NewsTrending } from "./newsTrending.component";
import {
  useGetAllPostsQuery,
  useLazyGetAllPostsQuery,
} from "../../../redux/api";
import { NewsTrendingSkeleton } from "../../../components/utility/newsSkeleton.component";

const List = styled(FlatList)``;

export const ListNewsTrending = () => {
  let page = 1;
  const [getAllPosts] = useLazyGetAllPostsQuery();
  const [news, setNews] = useState([]);

  const getApi = async () => {
    const { data } = await getAllPosts(page);
    if (data) {
      setNews(...news, data);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <List
        data={news}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Spacer key={item.title} position="bottom" size="large_x">
              <NewsTrending news={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => {
          return (
            <>
              <NewsTrendingSkeleton />
              <NewsTrendingSkeleton />
              <NewsTrendingSkeleton />
            </>
          );
        }}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          page++;
          getApi();
        }}
      />
    </View>
  );
};
