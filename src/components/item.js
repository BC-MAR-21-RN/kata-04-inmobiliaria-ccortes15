import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import InfoItem from './InfoItem';
import CoverItem from './CoverItem';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <CoverItem item={item} />
          <InfoItem item={item} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 7,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E6F0EE',
  },
});

export default Item;
