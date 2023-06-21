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
  useCreatePostMutation,
} from "../../../redux/api";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/selector";
import { CreatePostRequest } from "../../../redux/types";
import ModalPopup from "../../../components/modal";

import { uploadImageToStorage } from "../../../FirebaseService";

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

export const ImageType = {
  CAMERA: "camera",
  GALLERY: "gallery",
};

export const CreateNewsScreen = ({ navigation }) => {
  // State
  const [visible, setVisible] = useState(false);
  const [statusImage, setStatusImage] = useState(null);
  const [value, setValue] = useState("left");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [footerVisible, setFooterVisible] = useState(true);
  // redux state
  const [createPost, { isLoading, isSuccess, error, isError }] =
    useCreatePostMutation();
  const { data: categories } = useGetAllCategoriesQuery();
  const user = useSelector(userSelector);
  const userInfo = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  };

  // Check if all input is filled
  useEffect(() => {
    if (title && content && image) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [title, content, image]);

  // Set form data
  const submitHandler = () => {
    uploadImageToStorage("posts/", image).then((url) => {
      const formData: CreatePostRequest = {
        title,
        content,
        category: {
          id: category._id,
          name: category.name,
        },
        image: url,
        userInfo,
      };
      createPost(formData);
    });
  };

  // Reset form
  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory(null);
    setImage(null);
  };

  // Check if create post success
  useEffect(() => {
    if (isSuccess) {
      resetForm();
      ToastAndroid.show("Create post success", ToastAndroid.SHORT);
      navigation.goBack();
    }
  }, [isSuccess]);

  // Header View Component
  const HeaderView = () => {
    return (
      <Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" />
        </Pressable>
        <Text variant="textBodyBlack">Create News</Text>
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
            <Text variant="buttonText">Publish</Text>
          </ButtonPrimaryView>
        ) : (
          <Button>
            <Text variant="buttonDisabledText">Publish</Text>
          </Button>
        )}
      </Footer>
    );
  };

  // On open close modal
  const onCloseModal = () => setVisible(false);
  const onOpenModal = () => setVisible(true);

  // Modal Image Picker
  const ModalImagePicker = () => {
    return (
      <ModalPopup visible={visible} onClose={onCloseModal} title="Choose Image">
        <Spacer position="top" size="medium">
          <Pressable onPress={() => pickImageAsync(ImageType.CAMERA)}>
            <Text>Camera</Text>
          </Pressable>
        </Spacer>
        <Spacer position="top" size="medium">
          <Pressable onPress={() => pickImageAsync(ImageType.GALLERY)}>
            <Text>Gallery</Text>
          </Pressable>
        </Spacer>
      </ModalPopup>
    );
  };

  // Image Picker Component
  const pickImageAsync = async (type: string) => {
    let result = null;
    if (type === ImageType.CAMERA) {
      result = await pickImageFromCamera();
    } else if (type === ImageType.GALLERY) {
      result = await pickImageFromGallery();
    }

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onCloseModal();
    } else {
      alert("You did not select any image.");
    }
  };

  // Pick Image From Camera
  const pickImageFromCamera = async () => {
    return await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
  };

  // Pick Image From Gallery
  const pickImageFromGallery = async () => {
    return await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
  };

  // Image View Component
  const ImageView = () => {
    return (
      <Spacer position="top" size="medium">
        <Pressable onPress={onOpenModal}>
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

  return (
    <Container>
      <ScrollView>
        <HeaderView />

        {/* Form section */}
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
      </ScrollView>
      {footerVisible && <FooterView />}
      <ModalImagePicker />
    </Container>
  );
};
