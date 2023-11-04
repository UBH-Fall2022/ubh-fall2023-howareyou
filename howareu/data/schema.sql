CREATE TABLE IF NOT EXISTS entries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  creation DATETIME DEFAULT CURRENT_TIMESTAMP,
  feeling INT,
  description VARCHAR(240)
);

INSERT INTO entries (id, creation, feeling, description) VALUES (NULL, NULL, 3, "like garbage");
INSERT INTO entries (id, creation, feeling, description) VALUES (NULL, NULL, 10, "SO GOOD!");