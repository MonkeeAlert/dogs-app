import BookmarksScreen from '../Catalog/BookmarksScreen';
import CatalogScreen from '../Catalog/CatalogScreen';
import UserScreen from '../User/Screen';

export const tabs = [
  {
    name: 'Catalog',
    component: CatalogScreen,
    icon: {
      activeName: 'image',
      defaultName: 'image-outline',
      type: 'ionicon',
      size: 28,
    },
  },
  {
    name: 'Bookmarks',
    component: BookmarksScreen,
    icon: {
      activeName: 'bookmarks',
      defaultName: 'bookmarks-outline',
      type: 'ionicon',
      size: 21,
    },
  },
  {
    name: 'User',
    component: UserScreen,
    icon: {
      activeName: 'user',
      defaultName: 'user',
      type: 'feather',
      size: 21,
    },
  },
];
