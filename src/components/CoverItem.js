import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

class CoverItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    return (
      <ImageBackground
        imageStyle={styles.image}
        style={styles.logo}
        source={require('../../img/house.jpg')}>
        <View style={styles.viewText}>
          <FontAwesomeIcon style={styles.icon} icon={faStar} />
          <Text style={styles.text}>{item.score}</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: '95%',
  },
  image: {
    borderRadius: 10,
  },
  viewText: {
    position: 'absolute',
    bottom: 15,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#EBC965',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    marginLeft: 5,
    color: '#78530B',
    fontWeight: 'bold'
  },
  icon: {
    color: '#EBA315',
  },
});

export default CoverItem;
