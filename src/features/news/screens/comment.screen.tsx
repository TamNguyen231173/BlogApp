import React, { useEffect, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CommentBox } from "../../../components/utility/comment-box.component";
import { useLazyGetCommentsQuery } from "../../../redux/api";
import { Comment } from "../../../redux/types";
import { FlatList } from "react-native";
import { TextInputView } from "../../../components/utility/text-input.component";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";

const Container = styled.View`
  flex: 1;
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  padding: ${(props: any) => props.theme.space[3]};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FooterContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 12px;
`;

const InputContainer = styled.View`
  width: 80%;
`;

const ButtonContainer = styled.View`
  width: 15%;
`;

const Block = styled.View``;

export const CommentScreen = ({ navigation }) => {
  const [getComments, { isLoading, isError, isSuccess }] =
    useLazyGetCommentsQuery();
  const [data, setData] = useState<Comment[]>([]);

  const fetchComments = async () => {
    const response = await getComments(1);
    setData(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Container>
      <Header>
        <IonIcons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text variant="textBodyBlack">Comments</Text>
        <Block />
      </Header>
      <Spacer position="bottom" size="large" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CommentBox
            avatar={item?.userInfo.avatar}
            name={item?.userInfo.name}
            comment={item?.content}
            time={item?.created_at}
            likes={item?.likes}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
        ListEmptyComponent={() => (
          <Text variant="textBodyBlack">No comments</Text>
        )}
      />
      <FooterContainer>
        <InputContainer>
          <TextInputView placeholder="Write a comment..." />
        </InputContainer>
        <ButtonContainer>
          <ButtonPrimary>
            <IonIcons name="send" size={20} color="#fff" />
          </ButtonPrimary>
        </ButtonContainer>
      </FooterContainer>
    </Container>
  );
};
