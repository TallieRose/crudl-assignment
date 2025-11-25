import { StyleSheet } from 'react-native';

import Screen from '../layout/Screen';
import UserView from '../entity/users/UserView';

const UserViewScreen = ({ navigation, route }) => {
  const { user, onDelete, onModify, onFavourite } = route.params;

  const gotoModifyScreen = () =>
    navigation.navigate('UserModifyScreen', {
      user,
      onModify,
    });

  return (
    <Screen>
      <UserView
        user={user}
        onDelete={() => onDelete(user)}
        onModify={gotoModifyScreen}
        onFavourite={() => onFavourite(user)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
