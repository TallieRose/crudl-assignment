import { StyleSheet, Text, View } from 'react-native';
import Selector from '../../UI/Selector';
import Favourite from '../../UI/Favourite';

const UserItem = ({ user, onSelect, onFavourite }) => {
  const handleSelect = () => onSelect(user);
  const handleFavourite = () => onFavourite(user);

  return (
    <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Favourite
          isFavourite={user.UserFavourite}
          onSelect={handleFavourite}
        />
        <View style={styles.textTray}>
          <Text style={styles.name}>
            {user.UserFirstname} {user.UserLastname}
          </Text>
          <Text style={styles.sub}>{user.UserEmail}</Text>
        </View>
      </View>
    </Selector>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textTray: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
  },
  sub: {
    fontSize: 13,
    color: 'grey',
  },
  pressedItem: {
    backgroundColor: 'azure',
  },
});

export default UserItem;
