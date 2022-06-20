import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IProps {}

const TestScrn = ({}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>TestScrn</Text>
    </View>
  );
};

export default TestScrn;

const styles = StyleSheet.create({
  container: {},
});
