import React from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import styles from './styles';
import { colors, screenNames } from '@src/constants';
import { normalize } from '@src/utils';
import { NavigationService } from '@src/services';

const ListOfProjects: React.FC = () => {
  return (
    <FlatList
      data={[1, 2, 5, 6, 7, 7, 7, 7]}
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={false} tintColor={colors.white} />
      }
      renderItem={() => (
        <List.Item
          titleStyle={styles.title}
          descriptionStyle={styles.title}
          style={styles.item}
          title="Title"
          description="Item description"
          left={(props) => (
            <List.Icon {...props} icon="folder" color={colors.white} />
          )}
          right={() => (
            <IconButton
              icon="pencil"
              size={normalize(30)}
              animated
              color={colors.white}
              onPress={() => {
                NavigationService.navigate(screenNames.EditProject);
              }}
            />
          )}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separate} />}
    />
  );
};

export default ListOfProjects;
