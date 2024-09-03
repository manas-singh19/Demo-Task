import { StyleSheet, Text, View, TextInput, Button,  } from 'react-native'
import React,{useState} from 'react'

import Header from '../../components/common/Header'
import { useNavigation } from '@react-navigation/native';


const FormValidation = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    nameStatus:true,
    email: '',
    emailStatus:true,
    password:'',
    passwordStatus:true
  });

  const validateName = () => {
    if (!name.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, name: 'Name is required', nameStatus:true }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, name: null, nameStatus:false }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required', emailStatus:true }));
    } else if (!emailRegex.test(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email format', emailStatus:true }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, email: null, emailStatus:false }));
    }
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Password is required',passwordStatus:true }));
    } else if (password.length < 6) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Password must be at least 6 characters' ,passwordStatus:true}));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, password: null,passwordStatus:false }));
    }
  };

  const handleSubmit = () => {
    validateName();
    validateEmail();
    validatePassword();

    if (!errors.name && !errors.email && !errors.password) {
      // Handle form submission
      alert('Form submitted successfully');
    }

  };

    return (
        <View style={styles.mainContainer}>
            <Header navigation={navigation} title="Form Validation" back={true} />
            <View style={styles.Container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => {setName(text); validateName()}}
                onBlur={validateName}
                placeholder="Enter your name"
            />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => {setEmail(text); validateEmail()}}
        onBlur={validateEmail}
        keyboardType="email-address"
        placeholder="Enter your email"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => {setPassword(text); validatePassword()}}
        onBlur={validatePassword}
        secureTextEntry
        placeholder="Enter your password"
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={Boolean(errors.nameStatus  || errors.emailStatus || errors.passwordStatus)}
      />
            </View>
        </View>
    )
}

export default FormValidation

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
      },
      Container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding:12
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      error: {
        color: 'red',
        marginBottom: 10,
      },

})