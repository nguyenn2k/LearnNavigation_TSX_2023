import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    return (
        <View style={styles.homeContainer}>
          <Text>Home Screen</Text>
        
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    homeContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})