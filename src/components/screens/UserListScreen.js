import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from '../layout/Screen';
import { Button, ButtonTray } from '../UI/Button';
import Icons from '../UI/Icons';
import RenderCount from '../UI/RenderCount';

import UserList from '../entity/users/UserList';


const initialUsers = [
  {
    UserID: 820,
    UserFirstname: 'Graeme',
    UserLastname: 'Jones',
    UserEmail: 'Ku06696@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/Zx-gNUWFq9NPQDPRLEJQQPWx19QhpKGSAnzIPFUDz3k/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92Ml8wMDAzODI3MS5qcGc.jpg',
    UserType: 'Staff',
    UserYear: null,
    UserFavourite: false,
  },
  {
    UserID: 824,
    UserFirstname: 'Paul',
    UserLastname: 'Knave',
    UserEmail: 'K1234567@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/IitdqDaBBrr4auYZFuuC_dplp3OtwU2cCuN4q35rN8M/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92Ml8wNDcyMTg5LmpwZw.jpg',
    UserType: 'Staff',
    UserYear: null,
    UserFavourite: false,
  },
  {
    UserID: 527,
    UserFirstname: 'Justin',
    UserLastname: 'TWUMASI',
    UserEmail: 'K3346661@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/1zzVOGo2BC7zlIbuqtT9E03KbcRrCFw0CeIkCRH-pQo/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92M18wOTU2NTI4LmpwZw.jpg',
    UserType: 'Student',
    UserYear: '2022-23',
    UserFavourite: false,
  },
  {
    UserID: 287,
    UserFirstname: 'Faris',
    UserLastname: 'AHMED',
    UserEmail: 'K3265517@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/BdRHDOlzfO2nY3cm9SJuBaf_LPCCv0tzUq3hSv6-Ub8/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92M18wNDYzODY2LmpwZw.jpg',
    UserType: 'Student',
    UserYear: '2022-23',
    UserFavourite: false,
  },
  {
    UserID: 467,
    UserFirstname: 'Tobi',
    UserLastname: 'OLU',
    UserEmail: 'K8769678@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/JaFMncOoAFAerEyw_xWIeFMjzgfkkseT_oGEyP6CgQI/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92M18wMzI5MTY3LmpwZw.jpg',
    UserType: 'Student',
    UserYear: '2022-23',
    UserFavourite: false,
  },
  {
    UserID: 534,
    UserFirstname: 'Artur',
    UserLastname: 'WAGNER',
    UserEmail: 'K6664833@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/XRfSKWBVup-KW5T_lvS0tyce6rGaEBKUDWvk6lxZ8x8/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92M18wMDIwNTQwLmpwZw.jpg',
    UserType: 'Student',
    UserYear: '2022-23',
    UserFavourite: false,
  },
  {
    UserID: 515,
    UserFirstname: 'Luke',
    UserLastname: 'STEVENS',
    UserEmail: 'K6845215@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/XtsBlRxQLgWzFAtycpalUkvVdf9tAvCfC9vEPtSVaxY/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92M18wMzQ2ODE2LmpwZw.jpg',
    UserType: 'Student',
    UserYear: '2022-23',
    UserFavourite: false,
  },
  {
    UserID: 276,
    UserFirstname: 'Hashim',
    UserLastname: 'ABDALLAH',
    UserEmail: 'K1083353@kingston.ac.uk',
    UserImageURL:
      'https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92M18wNzYwNjc0LmpwZw.jpg',
    UserType: 'Student',
    UserYear: '2022-23',
    UserFavourite: false,
  },
];

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
  };

  const onModify = (updatedUser) => {
    const updated = users.map((u) =>
      u.UserID === updatedUser.UserID ? updatedUser : u
    );
    setUsers(updated);
  };

 
  const onDelete = (user) => {
    const filtered = users.filter((u) => u.UserID !== user.UserID);
    setUsers(filtered);
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
