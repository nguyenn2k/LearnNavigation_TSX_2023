import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Details = ({navigation}) => {
    return (
        <View style={styles.detailContainer}>
          <Text>Details Screen</Text>
          <Button
            title="Go back Home"
            onPress={() => navigation.navigate('Home')}
        />
        </View>
    );
}

export default Details

const styles = StyleSheet.create({
    detailContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})