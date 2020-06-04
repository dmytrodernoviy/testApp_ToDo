import React from 'react';
import Modal from 'react-native-modal';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import { normalize } from '@src/utils';
import { IconButton } from 'react-native-paper';
import NewProjectForm from '../newProjectForm';

interface Props {
  isVisible: boolean;
  toggleModal: () => void;
}

const NewProjectModal: React.FC<Props> = ({ isVisible, toggleModal }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Modal isVisible={isVisible} style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          keyboardVerticalOffset={-normalize(130, 'height')}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.content}>
            <NewProjectForm />
            <IconButton
              icon="plus"
              size={normalize(30)}
              style={styles.closeButton}
              animated
              onPress={toggleModal}
            />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

export default NewProjectModal;
