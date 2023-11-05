import {openDatabase} from 'react-native-sqlite-storage';

export const getDBConnection = async () => {
    return openDatabase({name: 'entries.db', location: 'default'});
  };
  
export const createTable = async (db) => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS entries (
      id INT KEY AUTO_INCREMENT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      reasoning VARCHAR(240),
      feeling INT
    );`;
  
    // sample entry into db
    `INSERT INTO entries (reasoning, feeling)
    VALUES ('i just ate at tim hortons', 11);`
  
    await db.executeSql(query);
};