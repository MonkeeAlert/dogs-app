import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../assets/theme';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GalleryListWrapper = ({children}: Props) => {
  const {mode} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: mode.card}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
});
