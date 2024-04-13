import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: [],
      lapStartTime: null,
      lapTimeElapsed: null,
      lapCounter: 0,
      lapButtonState: false,
    };
    this.handleStartPress = this.handleStartPress.bind(this);
    this.startStopButton = this.startStopButton.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
    this.handleResetPress = this.handleResetPress.bind(this); 
  }

  laps() {
    const reversedLaps = [...this.state.laps].reverse();
    return this.state.laps.map(function (time, index) {
      return (
        <View key={index} style={styles.lap}>
          <Text style={styles.lapText}>Lap {reversedLaps.length - index}</Text>
          <Text style={styles.lapText}>{formatTime(time)}</Text>
        </View>
      );
    });
  }

  handleStartPress() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({
        running: false,
        lapButtonState: true, 
      });
      return;
    }
    const now = new Date();
    this.setState({
      startTime: now,
      lapStartTime: now,
      lapButtonState: false, 
    });
    this.interval = setInterval(() => {
      const currentTime = new Date() - this.state.startTime;
      const lapTime = new Date() - this.state.lapStartTime;
      this.setState({
        timeElapsed: currentTime,
        lapTimeElapsed: lapTime,
        running: true,
      });
    }, 30);
  }

  handleResetPress() {
    clearInterval(this.interval);
    this.setState({
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: [],
      lapStartTime: null,
      lapTimeElapsed: null,
      lapCounter: 0,
      lapButtonState: false, 
    });
  }

  startStopButton() {
    var style = this.state.running ? styles.stopButton : styles.startButton;
    var textStyle = this.state.running ? styles.stopButtonText : styles.startButtonText;
    return (
      <TouchableHighlight onPress={this.handleStartPress} style={[styles.button, style]}>
        <View style={styles.innerStartButton}>
          <Text style={[styles.buttonText, textStyle]}>
            {this.state.running ? 'Stop' : 'Start'}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  lapButton() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="gray"
        onPress={this.state.lapButtonState ? this.handleResetPress : this.handleLapPress}>
        <View style={styles.innerLapButton}>
          <Text style={{ color: 'white' }}>{this.state.lapButtonState ? 'Reset' : 'Lap'}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  handleLapPress() {
    const lap = this.state.lapTimeElapsed;
    this.setState(prevState => ({
      laps: prevState.laps.concat([lap]),
      lapCounter: prevState.lapCounter + 1,
      lapStartTime: new Date(),
      lapTimeElapsed: 0,
    }));
  }

  render() {
    const formattedTotalTime = formatTime(this.state.timeElapsed);
    const formattedLapTime = formatTime(this.state.lapTimeElapsed);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timeWrapper}>
            <Text style={styles.timer}>{formattedTotalTime}</Text>
            
          </View>
          <View style={styles.buttonWrapper}>
            {this.lapButton()}
            {this.startStopButton()}
          </View>
        </View>
        <View style={styles.footer}>{this.laps()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timeWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '',
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1b1a1c',
    backgroundColor: 'black',
  },
  innerLapButton: {
    height: 90,
    width: 90,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1a1c',
  },
  innerStartButton: {
    height: 90,
    width: 90,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#092910',
  },
  startButton: {
    borderColor: '#0d2014',
    backgroundColor: '#092910',
    color: '#3aad52',
  },
  stopButton: {
    borderColor: 'red',
    backgroundColor: '#340e0d',
  },
  timer: {
    fontSize: 60,
    color: 'white',
  },
  lapText: {
    fontSize: 20,
    color: 'white',
  },
  startButtonText: {
    color: 'green',
  },

  stopButtonText: {
    color: 'red',
  },
});
