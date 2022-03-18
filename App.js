import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from "expo-av";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.sound 
    this.state = {
      isPlaying: false,
      soundOBJ: null,
      URI: 'http://streaming.livespanel.com:20000/live',
      rate: 1.0,
      volume: 1.0,
      isMuted: false,
  };
  this.playSound = this.playSound.bind(this)
}

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });
    // (async () => {
    //   await Font.loadAsync({
    //     ...MaterialIcons.font,
    //     "cutive-mono-regular": require("./assets/fonts/CutiveMono-Regular.ttf")
    //   });
    //   this.setState({ fontLoaded: true });
    // })();
  }

    
  render(){
    return (
      <View style={styles.container}>
        <Button title="Play Sound" onPress={this.playSound} />
        <StatusBar style="auto" />
      </View>
    );
  }
  

  playSound() {
    if(!this.state.isPlaying){
      console.log('Loading Sound');
      const { sound } = Audio.Sound.createAsync(
        {uri: this.state.URI,
          shouldPlay: true,
          //volume: 1.0,
          isMuted: false}
      );
      this.state.isPlaying = true
      this.soundOBJ = sound
      console.log('Playing: ' + this.state.URI);
    }else{
      console.log("already playing")
    }
    
    //sound.playAsync(); 
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
