import React, { useEffect, useState } from "react";
import { View, FlatList, Route } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useGetPostsByUserQuery } from "../../../redux/api";
import { NewsCategory } from "../../news/components/newsCategory.component";
import { NewsCategorySkeleton } from "../../../components/utility/newsSkeleton.component";

export const Recent = (props: Route) => {
  console.log("props", props);
  let page = 1;
  const { data, isFetching } = useGetPostsByUserQuery({
    userId: props.userId,
    page: page,
  });

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => {
        return (
          <Spacer key={item.title} position="bottom" size="large">
            <NewsCategory news={item} />
          </Spacer>
        );
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
    />
  );
};
