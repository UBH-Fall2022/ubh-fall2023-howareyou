import * as SQLite from "expo-sqlite";

const connectDatabase = () => {
    const db = SQLite.openDatabase("entries.db");
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS entries (
            id INT KEY AUTO_INCREMENT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            reasoning VARCHAR(240),
            feeling INT);`
        ), [],
        () => {}, // empty b/c we dont need it to do anything (? is this gonna break???)
        () => {}
    })
    return db;
}

export const db = connectDatabase();


export const addEntry = async (db, reasoning, feeling) => {
    try {
        const results = await new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'INSERT INTO entries (reasoning, feeling) VALUES (?, ?);', [reasoning, feeling],
                    (tx, result) => resolve(result),
                    (tx, error) => reject(error)
                );
            });
        });
        return results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllEntries = async (db) => {
    try {
        const results = await new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT * FROM entries;', [],
                    (tx, result) => resolve(result.rows._array),
                    (tx, error) => reject(error)
                );
            });
        });
        return results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const dropTable = async (db) => { // silly function for resetting table -- maybe i'll add a button for this!
    try {
        db.transaction((tx) => {
            tx.executeSql('DROP TABLE entries;'), [],
            () => {}, 
            () => {}
        })
    } 
    catch (error) {
        throw error;
    }
}
