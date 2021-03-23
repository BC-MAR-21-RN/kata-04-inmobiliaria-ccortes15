import React, { Component } from 'react';
import { FlatList, SafeAreaView,StyleSheet } from 'react-native';
import Item from './components/item';
import { data } from './db/data';

class ItemList extends Component {
    render() {
        const renderItem = ({ item }) => (
            <Item item={item} />
        )

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ItemList;