import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class ItemList extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: Colors.darker }}>
                <StatusBar barStyle={'dark-content'} />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{ backgroundColor: Colors.darker }}>
                    <View
                        style={{
                            backgroundColor: Colors.white,
                        }}>
                        <Text>Item List view</Text>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ItemList;