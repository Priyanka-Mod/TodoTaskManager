import React, { useEffect, useState } from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';

export const Input = (props: TextInputProps) => {
    const [focus, setFocus] = useState(false)
    return (
        <View
            style={{ borderColor: focus ? "#E97DAF" : '#F9F2EE', width: '80%', borderRadius: 10, backgroundColor: 'white', borderWidth: 2 }}>
            <TextInput
                style={{
                    paddingVertical: Platform.OS === 'ios' ? 20 : 14, borderRadius: 10, paddingTop: Platform.OS === 'ios' ? 20 : 14,
                    textAlign: 'left', color: 'black', backgroundColor: 'white', paddingHorizontal: 20
                }}
                placeholder={props.placeholder}
                placeholderTextColor={focus ? 'black' : '#BDBDBD'}
                keyboardType={props.keyboardType || 'default'}
                onChange={props.onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                value={props.value}
                {...props} //any props of children will work with this seperator
            />
        </View>
    );
};
