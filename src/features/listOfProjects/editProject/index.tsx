import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TasksList from './TasksAccordion';

const EditProjectScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TasksList />
    </View>
  );
};

export default EditProjectScreen;
