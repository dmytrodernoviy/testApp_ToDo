import React, { useState, useCallback } from 'react';
import { List, RadioButton, IconButton } from 'react-native-paper';
import { Menu, Divider } from 'react-native-paper';
import styles from './styles';
import { translation, colors } from '@src/constants';
import { normalize } from '@src/utils';

const TasksList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const data = [1, 2];

  const toggleMenu = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <List.Section
      title={translation.tasks}
      style={styles.container}
      titleStyle={styles.title}>
      {data.map(() => (
        <List.Item
          title="Item"
          titleStyle={styles.title}
          left={() => <RadioButton status="checked" />}
          right={() => (
            <Menu
              visible={isVisible}
              onDismiss={toggleMenu}
              anchor={
                <IconButton
                  size={normalize(25)}
                  color={colors.white}
                  onPress={toggleMenu}
                  icon="dots-vertical"
                />
              }>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 1" />
            </Menu>
          )}
        />
      ))}
    </List.Section>
  );
};

export default TasksList;
