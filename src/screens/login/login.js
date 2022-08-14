import React, {useState} from 'react';
import { View, Text, StatusBar, Keyboard, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function LoginScreen(){    
    return(
        <KeyboardAvoidingView>
            <StatusBar style="dark" backgroundColor='#f95e56' />
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;