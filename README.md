# BlogApp-Express-Mongo 📝

A simple BlogApp built with Node.js, Express, and MongoDB to create, read, update, and delete blog posts.

Demo Video:
https://github.com/education-tech-stack/BlogApp-Express-Mongo/assets/48860013/07c9cd16-ad18-4399-bc95-70f6f63f6d3c

## Features 🚀

- Create new blog posts.
- Read and display existing blog posts.
- Update and edit blog posts.
- Delete blog posts.
- Store posts in a MongoDB database.

## Technologies Used 🛠️

- Node.js
- Express.js
- MongoDB
- EJS (for templates)
- HTML/CSS (for views)

## Getting Started 🏁

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/education-tech-stack/BlogApp-Express-Mongo.git
   cd BlogApp-Express-Mongo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run start
   ```
   or for dev server
   ```
   npm run start:dev
   ```   

5. Open a web browser and go to `http://localhost:4000` to access the BlogApp.

## How to Use 📖

1. **View Blog Posts**:
   - Visit the homepage to see all existing blog posts.

2. **Create a New Post**:
   - Click on the "New Post" link to create a new blog post.

5. **Database**:
   - The app stores data in a MongoDB database named `blogapp`. Make sure you have and .env file containing MONGO_URL key and MongoDB is installed and running.

## Project Structure 📂

- `index.js`: The main entry point for the Express application.
- `models/`: Defines the data model for blog posts.
- `controllers/`: Handles routes controllers and CRUD operations for posts.
- `views/`: Contains the EJS templates for rendering HTML.

## Contribution 🤝

Contributions are welcome! If you have any suggestions or want to make improvements, feel free to fork this repository and create a pull request.

## License 📜

This project is open-source and available under the [MIT License](LICENSE).

Happy Blogging! 📚📰
