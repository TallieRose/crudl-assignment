import { createDrawerNavigator } from '@react-navigation/drawer';
import ModulesStack from './ModulesStack';
import UsersStack from './UsersStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
      }}
    >
      {/* Stack 1 → Modules CRUDL */}
      <Drawer.Screen
        name="Modules"
        component={ModulesStack}
        options={{ title: 'Modules' }}
      />

      {/* Stack 2 → Users CRUDL */}
      <Drawer.Screen
        name="Users"
        component={UsersStack}
        options={{ title: 'Users' }}
      />
    </Drawer.Navigator>
  );
}
