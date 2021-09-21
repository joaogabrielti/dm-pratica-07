import React from 'react'
import { View, Animated } from 'react-native'
import styles from './styles'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      o1: new Animated.Value(1),
      o2: new Animated.Value(1),
      o3: new Animated.Value(1),
      o4: new Animated.Value(1),
      o5: new Animated.Value(1),
      o6: new Animated.Value(1),
      o7: new Animated.Value(1),
      o8: new Animated.Value(1),
    }

    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.o1, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o2, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o3, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o4, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o5, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o6, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o7, {
            toValue: 0,
            duration: 2200,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o8, {
            toValue: 0,
            duration: 3200,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          Animated.timing(this.state.o1, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o2, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o3, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o4, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o5, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o6, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o7, {
            toValue: 1,
            duration: 2200,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.o8, {
            toValue: 1,
            duration: 3200,
            useNativeDriver: false,
          }),
        ]),
      ]),
    ).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <Animated.View style={[styles.ball, { backgroundColor: '#e53935', opacity: this.state.o1 }]}/>
        </View>
        <View style={styles.line}>
          <Animated.View style={[styles.ball, { backgroundColor: '#8e24aa', opacity: this.state.o2 }]}/>
          <Animated.View style={[styles.ball, { backgroundColor: '#3949ab', opacity: this.state.o3 }]}/>
        </View>
        <View style={styles.line}>
          <Animated.View style={[styles.ball, { backgroundColor: '#00acc1', opacity: this.state.o2 }]}/>
          <Animated.View style={[styles.ball, { backgroundColor: '#43a047', opacity: this.state.o4 }]}/>
          <Animated.View style={[styles.ball, { backgroundColor: '#00897b', opacity: this.state.o5 }]}/>
        </View>
        <View style={styles.line}>
          <Animated.View style={[styles.ball, { backgroundColor: '#fb8c00', opacity: this.state.o6 }]}/>
          <Animated.View style={[styles.ball, { backgroundColor: '#f4511e', opacity: this.state.o5 }]}/>
          <Animated.View style={[styles.ball, { backgroundColor: '#546e7a', opacity: this.state.o7 }]}/>
          <Animated.View style={[styles.ball, { backgroundColor: '#d81b60', opacity: this.state.o8 }]}/>
        </View>
      </View>
    )
  }
}

export default App