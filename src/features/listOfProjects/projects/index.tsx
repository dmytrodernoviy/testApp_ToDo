import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './styles';
import ListOfProjects from './list';
import { normalize } from '@src/utils';
import NewProjectModal from './newProjectModal';

const ProjectsScreen: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  return (
    <View style={styles.container}>
      <ListOfProjects />
      <IconButton
        icon="plus"
        size={normalize(40)}
        style={styles.button}
        animated
        onPress={toggleModal}
      />
      <NewProjectModal isVisible={isModalVisible} toggleModal={toggleModal} />
    </View>
  );
};

export default ProjectsScreen;
