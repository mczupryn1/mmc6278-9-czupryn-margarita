USE mysql_project_db;

-- Users table
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE MealPlans (
    planId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ALTER TABLE MealPlans MODIFY userId INT;
    date DATE NOT NULL,
    recipeId INT NOT NULL,
    recipeName VARCHAR(255) NOT NULL,
    recipeImageURL VARCHAR(1000),  -- Allowing a larger varchar to accommodate potential long URLs
    ingredients TEXT,  -- Using TEXT type for possibly long ingredient lists
    instructions TEXT,  -- Using TEXT type for detailed instructions
    FOREIGN KEY (userId) REFERENCES users(id)
);


