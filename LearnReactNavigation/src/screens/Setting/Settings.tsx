import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Settings = ({navigation}) => {
    return (
        <View style={styles.settingContainer}>
          <Text>Setting Screen</Text>
        <Button
            title="Go back Home"
            onPress={() => navigation.navigate('Home')}
        />
        <Button 
            title='Go to Details'
            onPress={()=> navigation.navigate('Details')}
        />
        </View>
    );
}

export default Settings

const styles = StyleSheet.create({
    settingContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})