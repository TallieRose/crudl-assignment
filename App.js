import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ModulesStack from './src/navigator/ModulesStack';
import UsersStack from './src/navigator/UsersStack';

const Drawer = createDrawerNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Modules"
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }}
      >
        <Drawer.Screen
          name="Modules"
          component={ModulesStack}
          options={{ title: 'Modules CRUDL' }}
        />

        <Drawer.Screen
          name="Users"
          component={UsersStack}
          options={{ title: 'Users CRUDL' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
