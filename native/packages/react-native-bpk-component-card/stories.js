import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StyleSheet, View, Platform } from 'react-native';
import BpkText from 'react-native-bpk-component-text';
import BpkCard from './index';


const tokens = Platform.select({
  ios: () => require('bpk-tokens/tokens/ios/base.react.native.common.js'), // eslint-disable-line global-require
  android: () => require('bpk-tokens/tokens/android/base.react.native.common.js'), // eslint-disable-line global-require
})();

const styles = StyleSheet.create({
  container: {
    marginBottom: tokens.spacingBase,
  },
});

const cardContent = (
  <View>
    <BpkText>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus.
    </BpkText>
  </View>
);

const press = () => null;

storiesOf('BpkCard', module)
  .add('docs:default', () => (
    <BpkCard onPress={press}>{cardContent}</BpkCard>
  ))
  .add('docs:without-padding', () => (
    <BpkCard onPress={press} padded={false}>{cardContent}</BpkCard>
  ))
  .add('docs:focused', () => (
    <BpkCard onPress={press} focused>{cardContent}</BpkCard>
  ))
  .add('All Cards', () => (
    <View>
      <View>
        <BpkCard
          onPress={press}
          style={styles.container}
          accessibilityLabel="Example Card"
        >
          {cardContent}
        </BpkCard>
      </View>
      <View>
        <BpkCard
          onPress={press}
          padded={false}
          style={styles.container}
          accessibilityLabel="Example Card"
        >
          {cardContent}
        </BpkCard>
      </View>
      <View>
        <BpkCard
          onPress={press}
          style={styles.container}
          focused
          accessibilityLabel="Example Card"
        >
          {cardContent}
        </BpkCard>
      </View>
    </View>
  ));
