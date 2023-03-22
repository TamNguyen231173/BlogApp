import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";
import { NewsCategory } from "./newsCategory.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator } from "react-native-paper";
import { useGetAllPostsQuery } from "../../../redux/api";

const List = styled(FlatList)``;

export const ListNewsCategory = ({ tab }) => {
  const { data: news, isLoading, error } = useGetAllPostsQuery();

  return (
    <View style={{ backgroundColor: "#fff" }}>
      {isLoading && <ActivityIndicator size="large" />}
      <List
        data={news}
        renderItem={({ item }) => {
          return (
            <Spacer key={item.title} position="bottom" size="large">
              <NewsCategory news={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
