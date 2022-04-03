import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import DogImageListItem from '../../components/lists/DogImageListItem';
import {colors, text} from '../../utils/constants';
import CustomStatusBar from '../../components/CustomStatusBar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDogsList} from '../../redux/actions/listActions';
import {getDogsCatalog} from '../../redux/rootSelector';
import {parseImage} from '../../utils/functions';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../Navigator/routes';
import FakeInputButton from '../../components/buttons/FakeInputButton';
import SearchInput from '../../components/inputs/SearchInput';

const renderItem = (uri: string, idx: number) => {
  return <DogImageListItem uri={uri} idx={idx} />;
};

const CatalogScreen = () => {
  const dispatch = useDispatch();
  const {navigate} =
    useNavigation<NavigationProp<RootStackParamList, 'Search'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'CatalogTabs'>>();
  const {list} = useSelector(getDogsCatalog);

  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>([]);

  const handleEndReached = () => {
    if (search) {
      dispatch(fetchDogsList(search, true));
    } else {
      dispatch(fetchDogsList());
    }
  };

  const redirectToSearch = () => {
    navigate('Search', {search});
  };

  useEffect(() => {
    dispatch(fetchDogsList('', false, true));
  }, []);

  useEffect(() => {
    if (!list.loading) {
      if (list.data.length > 4 && list.data.length < 7) {
        setData([...list.data, '', '']);
      } else {
        setData(list.data);
      }
    }
  }, [list]);

  useEffect(() => {
    if (route.params?.search) {
      setSearch(route.params?.search);
      dispatch(fetchDogsList(route.params?.search, true, true));
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={colors.turquoise}
        barStyle={'dark-content'}
      />
      <FakeInputButton action={redirectToSearch}>
        <View style={styles.searchBar}>
          <SearchInput
            value={search}
            isDisabled={true}
            placeholder={"Write dog's breed here"}
          />
        </View>
      </FakeInputButton>

      <FlatList
        data={data}
        numColumns={2}
        testID={'CatalogScreen_List'}
        showsVerticalScrollIndicator={false}
        keyExtractor={parseImage}
        contentContainerStyle={[
          styles.list,
          data.length === 0
            ? styles.emptyList
            : data.length < 7
            ? {height: '100%'}
            : {},
        ]}
        renderItem={({item, index}) => renderItem(item, index)}
        bounces={false}
        onEndReached={handleEndReached}
        scrollEventThrottle={16}
        ListFooterComponent={() =>
          list.loading ? (
            <ActivityIndicator
              testID={'ActivityIndicator_Loading'}
              size={'small'}
              style={styles.indicator}
            />
          ) : (
            <View testID={'ActivityIndicator_Blank'} style={styles.indicator} />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.turquoise,
  },
  text: {
    fontSize: text.l,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 7,
    color: colors.white,
  },
  list: {
    paddingHorizontal: 7,
    paddingTop: 7,
    paddingBottom: 49,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    backgroundColor: colors.white,
  },
  emptyList: {
    flex: 1,
    paddingBottom: 0,
    justifyContent: 'center',
  },
  indicator: {
    paddingTop: 35,
  },
  searchBar: {
    marginHorizontal: 7,
  },
});

export default CatalogScreen;
