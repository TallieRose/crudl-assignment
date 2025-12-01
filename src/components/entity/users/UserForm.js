import { useState } from 'react';
import { StyleSheet } from 'react-native';

import Form from '../../UI/Form';
import Icons from '../../UI/Icons';


const createDefaultUser = () => ({
  UserID: Math.floor(100000 + Math.random() * 900000),
  UserFirstname: '',
  UserLastname: '',
  UserEmail: '',
  UserType: 'Student',
  UserYear: '2022-23',
  UserImageURL:
    'https://images.generated.photos/Zx-gNUWFq9NPQDPRLEJQQPWx19QhpKGSAnzIPFUDz3k/rs:fit:256:256/czM6Ly9pY29uczguZ3Bob3Rvcy1wcm9kLnBob3Rvcy92Ml8wMDAzODI3MS5qcGc.jpg',
  UserFavourite: false,
});

const userTypes = [
  { value: 'Student', label: 'Student' },
  { value: 'Staff', label: 'Staff' },
];

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  const [user, setUser] = useState(originalUser || createDefaultUser());

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const handleSubmit = () => onSubmit(user);

  const submitLabel = originalUser ? 'Modify' : 'Add';
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="First name"
        value={user.UserFirstname}
        onChange={(val) => handleChange('UserFirstname', val)}
      />

      <Form.InputText
        label="Last name"
        value={user.UserLastname}
        onChange={(val) => handleChange('UserLastname', val)}
      />

      <Form.InputText
        label="Email"
        value={user.UserEmail}
        onChange={(val) => handleChange('UserEmail', val)}
      />

      <Form.InputSelect
        label="User type"
        value={user.UserType}
        onChange={(val) => handleChange('UserType', val)}
        options={userTypes}
        prompt="Select user type..."
      />

      <Form.InputText
        label="Year"
        value={user.UserYear}
        onChange={(val) => handleChange('UserYear', val)}
      />

      <Form.InputText
        label="Image URL"
        value={user.UserImageURL}
        onChange={(val) => handleChange('UserImageURL', val)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
