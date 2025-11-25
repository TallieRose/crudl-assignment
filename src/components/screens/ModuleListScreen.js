import { useEffect } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import useLoad from '../API/useLoad';
import useStore from '../store/useStore';
import API from '../API/API';
import Screen from '../layout/Screen';
import RenderCount from '../UI/RenderCount';
import { Button, ButtonTray } from '../UI/Button';
import Icons from '../UI/Icons';
import ModuleList from '../entity/modules/ModuleList';

const ModuleListScreen = ({ navigation }) => {

  const modulesEndpoint = 'http://softwarehub.uk/unibase/api/modules';
  const loggedinUserKey = 'loggedUser';
  const favouritesKey = 'moduleFavourites';

  const [modules, setModules, isLoading, loadModules] = useLoad(modulesEndpoint);
  const [loggedinUser] = useStore(loggedinUserKey, null);
  const [favourites, saveFavourites] = useStore(favouritesKey, []);  


  const augmentModulesWithFavourites = () => {
    const modifyModule = (module) => ({
      ...module,
      ModuleFavourite: favourites.includes(module.ModuleID),
    });
    const augmentedModules = modules.map(modifyModule);  
    augmentedModules.length > 0 && setModules(augmentedModules);
  };

  useEffect(() => {
    augmentModulesWithFavourites();
  }, [isLoading]);

  const handleFavourite = (module) => {  
  
    const isFavourite = !module.ModuleFavourite;
    const updateModule = (item) =>
      item.ModuleID == module.ModuleID ? { ...item, ModuleFavourite: isFavourite } : item;

    const updatedModuleList = modules.map(updateModule);
    setModules(updatedModuleList);

    const updatedFavouritesList = updatedModuleList
      .filter((item) => item.ModuleFavourite)
      .map((item) => item.ModuleID);

    saveFavourites(updatedFavouritesList); 
  };

  const onAdd = async (module) => {

  };

  const onModify = async (module) => {

  };

  const onDelete = async (module) => {

  };

  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });
  const gotoViewScreen = (module) =>
    navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });

  return (
    <Screen>
      <RenderCount />
      {loggedinUser && <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>}
      <View style={styles.container}>
        <ButtonTray>
          <Button label='Add Module' icon={<Icons.Add />} onClick={gotoAddScreen} />
        </ButtonTray>

        {isLoading && (
          <View style={styles.loading}>
            <Text>Retrieving records from {modulesEndpoint} ...</Text>
            <ActivityIndicator size='large' />
          </View>
        )}

        <ModuleList 
          modules={modules} 
          onSelect={gotoViewScreen} 
          onFavourite={handleFavourite}  
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcome: {
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    gap: 15,
  },
  loading: {
    height: 100,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModuleListScreen;
