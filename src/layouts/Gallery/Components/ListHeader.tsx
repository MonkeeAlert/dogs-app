import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors, text} from '../../../utils/constants';
import ShareButton from '../../../components/buttons/ShareButton';
import DefaultButton from '../../../components/buttons/DefaultButton';
import {useDispatch, useSelector} from 'react-redux';
import {getDogsCatalog} from '../../../redux/rootSelector';
import {saveToBookmarks} from '../../../redux/actions/listActions';
import {Icon} from 'react-native-elements';
import {MainStyles} from '../../../assets/styles/MainStyles';

interface Props {
  uri: string;
}

export const ListHeader = ({uri}: Props) => {
  const {bookmarks} = useSelector(getDogsCatalog);

  const handleToogleBookmark = () => dispatch(saveToBookmarks(uri));
  const dispatch = useDispatch();

  const isBookmark = bookmarks.indexOf(uri) !== -1;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Same pictures</Text>

      <View style={styles.headerButtons}>
        <DefaultButton
          onPress={handleToogleBookmark}
          color={isBookmark ? colors.turquoise : colors.lightGray}>
          <Icon
            type={'ionicon'}
            name={`bookmarks`}
            color={isBookmark ? colors.white : colors.turquoise}
            size={18}
            tvParallaxProperties={false}
          />
        </DefaultButton>
        <ShareButton uri={uri} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...MainStyles.rowFull,
    borderRadius: 14,
    backgroundColor: colors.white,
    paddingLeft: 14,
    paddingRight: 11.5,
    paddingVertical: 7,
  },
  headerText: {
    fontSize: text.m,
    fontWeight: '900',
    paddingVertical: 14,
    color: colors.darkGray,
  },
  headerButtons: {
    flexDirection: 'row',
  },
});
