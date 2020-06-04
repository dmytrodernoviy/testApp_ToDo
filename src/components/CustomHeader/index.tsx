import React from 'react';
import { Appbar } from 'react-native-paper';

interface Props {
  scene: any;
}

const CustomHeader: React.FC<Props> = ({ scene }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomHeader;
