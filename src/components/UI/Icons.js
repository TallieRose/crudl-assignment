import { MaterialIcons } from '@expo/vector-icons';

const Icons = {};

const Add = () => <MaterialIcons name='add' size={16} />;
const Cancel = () => <MaterialIcons name='close' size={16} />;
const Delete = () => <MaterialIcons name='delete' size={16} />;
const Edit = () => <MaterialIcons name='edit' size={16} />;
const Favourite = () => <MaterialIcons name='favorite' size={18} color='crimson' />;
const Notfavourite = () => <MaterialIcons name='favorite-border' size={18} color='grey' />;
const Sync = () => <MaterialIcons name='sync' size={16} />;

Icons.Add = Add;
Icons.Cancel = Cancel;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Favourite = Favourite;
Icons.Notfavourite = Notfavourite;
Icons.Sync = Sync;

export default Icons;
