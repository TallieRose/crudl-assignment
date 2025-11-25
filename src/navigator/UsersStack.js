import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserListScreen from '../components/screens/UserListScreen';
import UserAddScreen from '../components/screens/UserAddScreen';
import UserViewScreen from '../components/screens/UserViewScreen';
import UserModifyScreen from '../components/screens/UserModifyScreen';

const Stack = createNativeStackNavigator();

const UsersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{ title: 'List Users' }}
      />

      <Stack.Screen
        name="UserAddScreen"
        component={UserAddScreen}
        options={{ title: 'Add User' }}
      />

      <Stack.Screen
        name="UserViewScreen"
        component={UserViewScreen}
        options={{ title: 'View User' }}
      />

      <Stack.Screen
        name="UserModifyScreen"
        component={UserModifyScreen}
        options={{ title: 'Modify User' }}
      />
    </Stack.Navigator>
  );
};

export default UsersStack;
