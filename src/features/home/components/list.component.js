import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { NewsCategory } from "../../news/components/newsCategory.component";

// the filter
const List = (props) => {
  const renderItem = ({ item }) => {
    console.log(item.content);

    if (props.searchPhrase === "") {
      return <NewsCategory news={item} />;
    }

    if (
      item.title
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <NewsCategory news={item} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
