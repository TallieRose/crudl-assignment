import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModuleListScreen from '../components/screens/ModuleListScreen';
import ModuleAddScreen from '../components/screens/ModuleAddScreen';
import ModuleViewScreen from '../components/screens/ModuleViewScreen';
import ModuleModifyScreen from '../components/screens/ModuleModifyScreen';

const Stack = createNativeStackNavigator();

const ModulesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ModuleListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="ModuleListScreen"
        component={ModuleListScreen}
        options={{ title: 'List Modules' }}
      />

      <Stack.Screen
        name="ModuleAddScreen"
        component={ModuleAddScreen}
        options={{ title: 'Add Module' }}
      />

      <Stack.Screen
        name="ModuleViewScreen"
        component={ModuleViewScreen}
        options={{ title: 'View Module' }}
      />

      <Stack.Screen
        name="ModuleModifyScreen"
        component={ModuleModifyScreen}
        options={{ title: 'Modify Module' }}
      />
    </Stack.Navigator>
  );
};

export default ModulesStack;
