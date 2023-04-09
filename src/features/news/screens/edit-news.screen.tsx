import React, { useEffect, useState } from "react";
import { ToastAndroid, Pressable, Keyboard, ScrollView } from "react-native";
import styled from "styled-components/native";
import { ToggleButton } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Picker } from "@react-native-picker/picker";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import IonsIcon from "react-native-vector-icons/Ionicons";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextInputView } from "../../../components/utility/text-input.component";
import imageIcon from "../../../../assets/imageIcon";
import caplize from "../../../../assets/caplize";
import more from "../../../../assets/more";
import order from "../../../../assets/order";
import { Row } from "../../../components/utility/row.component";
import { ButtonDisabled } from "../../../components/utility/button-disabled.component";
import * as ImagePicker from "expo-image-picker";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";

import {
  useGetAllCategoriesQuery,
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../../redux/api";
import { NewsTrendingSkeleton } from "../../../components/utility/newsSkeleton.component";

const Container = styled(SafeArea)`
  flex: 1;
  padding: ${(props) => props.theme.space[4]};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(IonsIcon)`
  font-size: 20px;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ContainerAddImage = styled.View`
  width: 100%;
  height: 200px;
  border: 3px dashed ${(props) => props.theme.colors.ui.secondary};
  background-color: #eef1f4;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled(TextInputView).attrs({
  mode: "flat",
  outlineColor: "#c4c4c4",
})`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text.black};
`;

const Footer = styled.View`
  width: 100%;
  margin-top: 30px;
  padding-top: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SvgView = styled(SvgXml)`
  font-size: 24px;
  margin-right: 24px;
`;

const Button = styled(ButtonDisabled)`
  width: 30%;
`;

const ButtonPrimaryView = styled(ButtonPrimary)`
  width: 30%;
`;

const FormatTextContainer = styled(ToggleButton.Row)`
  position: absolute;
  top: -30px;
  left: 10px;
  elevation: 0.6;
  border-width: 0px;
`;

const FormContainer = styled.View``;

export const EditPost = ({ navigation, route = {} }) => {
  // State
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [value, setValue] = useState("left");
  const [footerVisible, setFooterVisible] = useState(true);
  const [disabledButton, setDisabledButton] = useState(true);
  const [post, setPost] = useState(null);
  const [category, setCategory] = useState(null);
  // redux state
  const { data: postDetail, isFetching } = useGetPostQuery(route?.params.id);
  // const [updatePost] = useUpdatePostMutation();
  const { data: categories } = useGetAllCategoriesQuery();
  const [updatePost] = useUpdatePostMutation();

  useEffect(() => {
    if (postDetail) {
      setTitle(postDetail.title);
      setImage(postDetail.image);
      setContent(postDetail.content);
      setCategory(postDetail.category);
    }
  }, [postDetail]);

  // Check if the input is empty
  useEffect(() => {
    if (title !== "" && content !== "") {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [title, content]);

  // Header View Component
  const HeaderView = () => {
    return (
      <Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" />
        </Pressable>
        <Text variant="textBodyBlack">Edit News</Text>
        <Icon name="ellipsis-vertical-outline" />
      </Header>
    );
  };

  // Footer View Component
  const FooterView = () => {
    return (
      <Footer>
        <FormatTextContainer
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <ToggleButton icon="format-bold" value="bold" />
          <ToggleButton icon="format-italic" value="italic" />
          <ToggleButton icon="format-align-left" value="left" />
          <ToggleButton icon="format-align-center" value="center" />
          <ToggleButton icon="format-align-right" value="right" />
        </FormatTextContainer>
        <Row>
          <SvgView xml={caplize} />
          <SvgView xml={order} />
          <SvgView xml={imageIcon} />
          <SvgView xml={more} />
        </Row>
        {!disabledButton ? (
          <ButtonPrimaryView onPress={submitHandler}>
            <Text variant="buttonText">Save</Text>
          </ButtonPrimaryView>
        ) : (
          <Button>
            <Text variant="buttonDisabledText">Save</Text>
          </Button>
        )}
      </Footer>
    );
  };

  // Image Picker Component
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  // Image View Component
  const ImageView = () => {
    return (
      <Spacer position="top" size="medium">
        <Pressable onPress={pickImageAsync}>
          <ContainerAddImage>
            {setImage && <Image source={{ uri: image }} />}
            <Icon name="add-outline" size={30} />
            <Text variant="textBodyBlack">Add Cover Photo</Text>
          </ContainerAddImage>
        </Pressable>
      </Spacer>
    );
  };

  // Keyboard Avoiding View Component
  const _keyboardDidShow = () => {
    {
      setFooterVisible(false);
    }
  };

  const _keyboardDidHide = () => {
    {
      setFooterVisible(true);
    }
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
    };
  }, [footerVisible]);

  // Submit Handler
  const submitHandler = async () => {
    const payload = {
      id: postDetail._id,
      title: title,
      content: content,
      image: image,
      category: category,
    };
    const response = await updatePost(payload);
    if (response.error) {
      ToastAndroid.show("Something went wrong", ToastAndroid.SHORT);
      return;
    } else {
      ToastAndroid.show("Post updated successfully", ToastAndroid.SHORT);
      navigation.goBack();
    }
  };

  return (
    <Container>
      <ScrollView>
        <HeaderView />

        {/* Form section */}
        {isFetching ? (
          <NewsTrendingSkeleton />
        ) : (
          <FormContainer>
            {/* Image section */}
            <ImageView />
            {/* Text input title */}
            <Spacer position="top" size="medium">
              <InputContainer
                label="Title"
                value={title}
                onChangeText={setTitle}
              />
            </Spacer>

            {/* Text input content */}
            <Spacer position="top" size="medium">
              <InputContainer
                numberOfLines={3}
                multiline={true}
                label="Content"
                value={content}
                onChangeText={setContent}
              />
            </Spacer>

            {/* Picker section */}
            <Spacer position="top" size="medium">
              <Picker
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
              >
                {categories?.map((category) => {
                  return (
                    <Picker.Item
                      key={category._id}
                      label={category.name}
                      value={category}
                    />
                  );
                })}
              </Picker>
            </Spacer>
          </FormContainer>
        )}
      </ScrollView>
      {footerVisible && <FooterView />}
    </Container>
  );
};
