import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class IconItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const icon = this.props.icon;
    const isBold = this.props.isBold;

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: isBold ? 'bold' : null,
      },
    });

    return (
      <View style={styles.container}>
        <FontAwesomeIcon icon={icon} size={18} />
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }
}

export default IconItem;
