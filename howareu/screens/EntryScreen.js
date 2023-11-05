import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { BUCKTOOTH } from '../assets'; // original bucktooth gif
import { db } from '../handlers';

// bucktooth be like
import { BUCKTOOTH00 } from '../assets';
import { BUCKTOOTH01 } from '../assets';
import { BUCKTOOTH02 } from '../assets';
import { BUCKTOOTH03 } from '../assets';
import { BUCKTOOTH04 } from '../assets';
import { BUCKTOOTH05 } from '../assets';
import { BUCKTOOTH06 } from '../assets';
import { BUCKTOOTH07 } from '../assets';
import { BUCKTOOTH08 } from '../assets';
import { BUCKTOOTH09 } from '../assets';
import { BUCKTOOTH10 } from '../assets';
import { BUCKTOOTH11 } from '../assets';

let bucktoothImages = [
  BUCKTOOTH00, BUCKTOOTH01, BUCKTOOTH02, BUCKTOOTH03, BUCKTOOTH04, BUCKTOOTH05, 
  BUCKTOOTH06, BUCKTOOTH07, BUCKTOOTH08, BUCKTOOTH09, BUCKTOOTH10, BUCKTOOTH11
];

bucktoothImages.reverse(); // OOPS THEY ARE BACKWARDS.


const EntryScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [textInputValue, setTextInputValue] = useState('');
  const [currentImage, setCurrentImage] = useState(bucktoothImages[11]);

  const sliderUpdate = (value) => {
    setSliderValue(value);
    setCurrentImage(bucktoothImages[value]);
  }

  const handleSubmit = () =>{
    if (textInputValue == '') {
      return;
    }
    db.addEntry(db.db, textInputValue, sliderValue)

    setTextInputValue('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How do you feel?</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={11}
        onValueChange={(value) => (sliderUpdate(value))}
        value={sliderValue}
        step={1}
        thumbTintColor='#EA80FC'
        minimumTrackTintColor='#EA80FC'
        maximumTrackTintColor='#D500F9'
      />
      <Image style={styles.image} source={currentImage}/>
      <Text style={styles.whyText}>Why do you feel this way?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="I just ate Tim Hortons!"
        numberOfLines={4}
        value={textInputValue}
        onChangeText={setTextInputValue}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Create Entry</Text>
        </View>
    </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
  },
  slider: {
    width: '100%',
    height: 40,
    color: "#EA80FC"
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#EA80FC', 
    padding: 10, 
    margin: 10,
    borderRadius: 5 
  },
  buttonText: {
    color: '#181818',
    fontWeight: "bold"
  },
  heading: {
    fontSize: 20,
    margin: 10,
  },
  whyText: {
    padding: 0, 
    margin: 0, 
    fontSize: 20
  }
});
export default EntryScreen;