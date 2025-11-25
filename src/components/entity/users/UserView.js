import { Alert, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';

import { Button, ButtonTray } from '../../UI/Button';
import Favourite from '../../UI/Favourite';
import Icons from '../../UI/Icons';

const UserView = ({ user, onDelete, onModify, onFavourite }) => {
  const requestDelete = () =>
    Alert.alert(
      'Delete warning',
      `Are you sure you want to delete ${user.UserFirstname} ${user.UserLastname}?`,
      [
        { text: 'Cancel' },
        { text: 'Delete', onPress: () => onDelete(user) },
      ]
    );

  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: user.UserImageURL }}
        style={styles.image}
      />

      <View style={styles.infoTray}>
        <View style={styles.headerRow}>
          <Favourite
            isFavourite={user.UserFavourite}
            onSelect={() => onFavourite(user)}
          />
          <Text style={styles.boldText}>
            {user.UserFirstname} {user.UserLastname}
          </Text>
        </View>

        <Text style={styles.text}>{user.UserEmail}</Text>
        <Text style={styles.text}>Type: {user.UserType}</Text>
        <Text style={styles.text}>Year: {user.UserYear || '—'}</Text>

        <ButtonTray>
          <Button
            icon={<Icons.Edit />}
            label="Modify"
            onClick={onModify}
          />
          <Button
            icon={<Icons.Delete />}
            label="Delete"
            onClick={requestDelete}
          />
        </ButtonTray>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 10,
    paddingHorizontal: 5,
  },
  headerRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default UserView;
