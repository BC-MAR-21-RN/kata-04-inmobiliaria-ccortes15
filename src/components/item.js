import React, { Component } from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBath, faBed, faBorderStyle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item;

        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{item.name}</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size={18} />
                            <Text style={styles.address}>{item.address}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesomeIcon icon={faBed} size={18} />
                                <Text>{item.rooms}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesomeIcon icon={faBath} size={18} />
                                <Text>{item.bathrooms}</Text>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesomeIcon icon={faBorderStyle} size={18} />
                                <Text>{item.area}</Text>
                            </View>
                        </View>

                        <Text>{item.rent}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
//'#E6F0EE'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 7,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#9AA19F'
    },
    logo: {
        width: 66,
        height: 80,
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 16
    },
    infoContainer: { flexShrink: 1, marginLeft: 10, justifyContent: 'center' }
})

export default Item;