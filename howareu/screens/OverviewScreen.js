import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const OverviewScreen = () => {
    const [selected, setSelected] = useState('');

    return (
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
      />
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default OverviewScreen;