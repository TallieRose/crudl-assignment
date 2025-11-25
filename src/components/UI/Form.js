import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ButtonTray, Button } from './Button.js';
import Icons from './Icons.js'; 

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  return (
   
    <KeyboardAvoidingView style={styles.formContainer}>         
      <ScrollView contentContainerStyle={styles.formItems}>{children}</ScrollView>
      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
        <Button label='Cancel' icon={<Icons.Cancel/>} onClick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange }) => {             
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput value={value} onChangeText={onChange} style={styles.itemTextInput} />
    </View>
  );
};

const InputSelect = ({ label, value, onChange, prompt, options, isLoading = false}) => { 
  
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      {isLoading ? (
        <View style={styles.itemLoading}>
          <Text style={styles.itemLoadingText}>Loading records ...</Text>
          </View>
      ): (
      <Picker
        mode={'dropdown'}
        selectedValue={value}
        onValueChange={onChange}
        style={styles.itemPicker}
                                       
      >
        <Picker.Item label={prompt} value={null} style={styles.itemPickerPrompt} />
        {options.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
      )}
    </View>
  );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;

const styles = StyleSheet.create({
  formContainer: { gap: 20 },
  formItems: { gap: 10 },      
  
  itemLabel: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 5,
  },

  itemLoading: {
    height: 50,
    backgroundColor: 'mistyrose',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  itemLoadingText: {
    fontSize: 16,  
  },

  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'lightgray',
  },

  itemPicker: {
    height: 50,
    backgroundColor: 'whitesmoke',
  },


  itemPickerPrompt: {  
    color: 'gray',
  },
});

export default Form;
