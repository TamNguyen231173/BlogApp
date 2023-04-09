import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useGetAllPostsQuery } from "../../../redux/api";
import { NewsCategory } from "../../news/components/newsCategory.component";
import { NewsCategorySkeleton } from "../../../components/utility/newsSkeleton.component";

export const News = () => {
  let page = 1;
  const { data, isFetching } = useGetAllPostsQuery(page);

  return (
    <FlatList
      style={{ backgroundColor: "#fff", flex: 1 }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => {
        return <NewsCategory news={item} />;
      }}
      keyExtractor={(item) => item._id.toString()}
      ListEmptyComponent={() => {
        return (
          <>
            <NewsCategorySkeleton />
            <NewsCategorySkeleton />
          </>
        );
      }}
      onEndReachedThreshold={0.5}
    />
  );
};
