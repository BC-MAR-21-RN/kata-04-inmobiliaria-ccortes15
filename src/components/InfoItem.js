import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  faBath,
  faBed,
  faBorderStyle,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import IconItem from './IconItem';
import LikeButton from './LikeButton';

class InfoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    return (
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>

        <IconItem icon={faMapMarkerAlt} item={item.address} />

        <View style={styles.viewIcons}>
          <IconItem icon={faBed} item={item.rooms} isBold />
          <IconItem icon={faBath} item={item.bathrooms} isBold />
          <IconItem icon={faBorderStyle} item={item.area} isBold />
        </View>

        <View style={styles.viewBottom}>
          <Text style={styles.rent}>${item.rent}/m</Text>
          <LikeButton isLike={item.isLike} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
  },
  rent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexShrink: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  viewIcons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    alignItems: 'center',
  },
});

export default InfoItem;
