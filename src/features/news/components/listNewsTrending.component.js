import { FlatList } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { NewsTrending } from "./newsTrending.component";

const List = styled(FlatList)``;

export const ListNewsTrending = ({ news = {} }) => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <List
        data={news}
        renderItem={({ item }) => {
          return (
            <Spacer key={item.title} position="bottom" size="large_x">
              <NewsTrending news={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
