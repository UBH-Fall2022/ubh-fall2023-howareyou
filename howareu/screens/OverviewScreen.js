import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import {Calendar} from 'react-native-calendars';

import { db } from '../handlers';

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

bucktoothImages.reverse(); // I DIDNT EXPECT TO USE THESE AGAIN LMAO


const OverviewScreen = () => {
    const [selected, setSelected] = useState('');
    const [entries, setEntries] = useState([]);
    const [firstEntry, setFirstEntry] = useState(null);
    const [dayEntries, setDayEntries] = useState([]);
    const [averageEntry, setAverageEntry] = useState(0);
    const [displayAverage, setDisplayAverage] = useState(false);

    const fetchEntries = async () => {
        try {
            const allEntries = await db.getAllEntries(db.db);
            setEntries(allEntries);

            if (allEntries.length > 0) { // for debugging
                setFirstEntry(allEntries[0]);
            }
        } catch (error) {
            console.error('error fetching entries')
            throw error;
        }
    };


    useEffect(() => { // fetch all entries when screen selected
        fetchEntries();
    }, []);

    useEffect(() => {
        const entriesForDay = entries.filter(entry => {
            const entryDate = new Date(entry.created_at);    // YYYY-MM-DDTHH:MM:SS.sss
            const entryDateString = entryDate.toISOString().split('T')[0]; // get only the date part
            return entryDateString == selected;
        });
        
        let total = 0;
        let i;
        for (i = 0; i < entriesForDay.length; i++) { // 13 hours in and i miss C
            total += entriesForDay[i].feeling;
        }

        setAverageEntry(i > 0 ? total/entriesForDay.length : 0)
        setDisplayAverage(true);
        setDayEntries(entriesForDay);
    }, [selected, entries]);

    // format list of entries for empty day
    const formatEntries = () => {
        if (dayEntries.length > 0) {
            return dayEntries.map((entry, i) => (
                <View key={i} style={styles.entryContainer}>
                    <Image style={styles.image} source={bucktoothImages[entry.feeling]}></Image>
                    <Text style={styles.entry}>{entry.reasoning}</Text>
                </View>
            ))
        } else {
            return (
                <View>
                    <Text style={styles.noEntriesText}>No entries for this day. It is up to you if you had a good day! :)</Text>
                </View>
            )
        }
    }
    
    const mood = () => {
        if (displayAverage) {
            if (averageEntry > 11) {
                return <Text style={styles.mood}>You had a great day!</Text>;
            } else if (averageEntry > 7) {
                return <Text style={styles.mood}>You had a pretty good day!</Text>;
            } else if (averageEntry > 5) {
                return <Text style={styles.mood}>You had a pretty mediocre day. It's okay, I'm sure some good stuff happened too.</Text>;
            } else if (averageEntry > 3) {
                return <Text style={styles.mood}>This day wasn't great... There's always another day!</Text>;
            } else if (averageEntry > 0) {
                return <Text style={styles.mood}>Sorry...</Text>;
            } else {
                return
            }
        }
        return null; // render nothing 
    };

    return ( // static part of screen ------------------------------------------------------------------------------------------
        <View>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: '#EA80FC'}
                }}
            />
            <ScrollView>
                {mood()}
                {formatEntries()}
            </ScrollView>
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
  entryContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5
  },
  entry: {
    padding: 1,
    fontSize: 15
  },
  noEntriesText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  },
  mood: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  },
  image: {
    width: 20,
    height: 20,
    margin: 5,
  }
});

export default OverviewScreen;