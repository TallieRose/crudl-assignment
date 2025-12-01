import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from '../layout/Screen';
import { Button, ButtonTray } from '../UI/Button';
import Icons from '../UI/Icons';
import RenderCount from '../UI/RenderCount';
import UserList from '../entity/users/UserList';

import initialUsers from '../../data/users';

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState(initialUsers);

  const handleFavourite = (user) => {
    const isFavourite = !user.UserFavourite;

    const updated = users.map((u) =>
      u.UserID === user.UserID ? { ...u, UserFavourite: isFavourite } : u
    );

    setUsers(updated);
  };

  const onAdd = (user) => {
    const newUser = { ...user, UserFavourite: false };
    setUsers([...users, newUser]);
    navigation.goBack();
  };

  const onModify = (updatedUser) => {
    const updated = users.map((u) =>
      u.UserID === updatedUser.UserID ? updatedUser : u
    );
    setUsers(updated);
    navigation.goBack();
  };

  const onDelete = (user) => {
    const filtered = users.filter((u) => u.UserID !== user.UserID);
    setUsers(filtered);
    navigation.goBack();
  };

  const gotoAddScreen = () =>
    navigation.navigate('UserAddScreen', { onAdd });

  const gotoViewScreen = (user) =>
    navigation.navigate('UserViewScreen', {
      user,
      onModify,
      onDelete,
      onFavourite: handleFavourite,
    });

  return (
    <Screen>
      <RenderCount />
      <View style={styles.container}>
        <ButtonTray>
          <Button
            label="Add User"
            icon={<Icons.Add />}
            onClick={gotoAddScreen}
          />
        </ButtonTray>

        <UserList
          users={users}
          onSelect={gotoViewScreen}
          onFavourite={handleFavourite}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});

export default UserListScreen;
