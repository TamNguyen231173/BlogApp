import React from "react";
import { Modal, View, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.View`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.05);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ModalContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
`;

const ModalPopup: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalBackground>
        <TouchableWithoutFeedback onPress={onClose}>
          <ModalOverlay />
        </TouchableWithoutFeedback>
        <ModalContainer>
          <Title>{title}</Title>
          {children}
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default ModalPopup;
