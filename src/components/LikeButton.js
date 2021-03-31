import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.isLike,
    };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: this.state.color ? 'red' : 'green',
        padding: 8,
        borderRadius: 50,
      },
      icon: {color: 'white'},
    });

    return (
      <TouchableWithoutFeedback
        onPress={() => this.setState({color: !this.state.color})}>
        <View style={styles.container}>
          <FontAwesomeIcon style={styles.icon} icon={faHeart} size={24} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default LikeButton;
