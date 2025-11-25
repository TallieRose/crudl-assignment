import { useState } from 'react';
import { StyleSheet } from 'react-native';
import useLoad from '../../API/useLoad';
import Icons from '../../UI/Icons';
import Form from '../../UI/Form';

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleYearID: null,
  ModuleLeaderID: null,
  ModuleImageURL: null,
};

const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImageURL = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';

  const yearsEndpoint = 'http://softwarehub.uk/unibase/api/years';
  const staffEndpoint = 'http://softwarehub.uk/unibase/api/users/staff';

  const levels = [
    { value: 3, label: '3 (Foundation)' },
    { value: 4, label: '4 (First Year)' },
    { value: 5, label: '5 (Second Year)' },
    { value: 6, label: '6 (Final Year)' },
    { value: 7, label: '7 (Masters)' },
  ];

  const [module, setModule] = useState(originalModule || defaultModule);
  const [years, , isYearsLoading] = useLoad(yearsEndpoint);
  const [leaders, , isLeadersLoading] = useLoad(staffEndpoint);

  const handleChange = (field, value) => setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module);

  const submitLabel = originalModule ? 'Modify' : 'Add';
  const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

  const cohorts = years.map((year) => ({
    value: year.YearID,
    label: year.YearName,
  }));

  const staff = leaders.map((leader) => ({
    value: leader.UserID,
    label: `${leader.UserFirstname} ${leader.UserLastname}`,   // **fixed spelling**
  }));

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label='Module code'
        value={module.ModuleCode}
        onChange={(value) => handleChange('ModuleCode', value)}
      />

      <Form.InputText
        label='Module name'
        value={module.ModuleName}
        onChange={(value) => handleChange('ModuleName', value)}
      />

      <Form.InputSelect
        label='Module level'
        value={module.ModuleLevel}
        onChange={(value) => handleChange('ModuleLevel', value)}
        prompt='Select module level ...'
        options={levels}
      />

      <Form.InputSelect
        label='Module cohort'
        value={module.ModuleYearID}
        onChange={(value) => handleChange('ModuleYearID', value)}
        prompt='Select module cohort ...'
        options={cohorts}
        isLoading={isYearsLoading}
      />

      <Form.InputSelect
        label='Module leader'
        value={module.ModuleLeaderID}
        onChange={(value) => handleChange('ModuleLeaderID', value)}
        prompt='Select module leader ...'
        options={staff}
        isLoading={isLeadersLoading}
      />

      <Form.InputText
        label='Module image URL'
        value={module.ModuleImageURL}
        onChange={(value) => handleChange('ModuleImageURL', value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});
export default ModuleForm;
