import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from 'react-native';

const CustomButton = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={{...styles.container, ...props.style}}>
      <TouchableComponent useForeground onPress={props.onPress}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title.toUpperCase()}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    backgroundColor: 'orange',
    overflow: 'hidden',
    borderRadius: 17,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
});

export default CustomButton;
