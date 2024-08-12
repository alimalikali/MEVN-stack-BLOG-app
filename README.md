# MEVN-stack-BLOG-app

## Overview

This is a MEVN (MongoDB, Express, Vue.js, Node.js) stack project that combines a powerful front-end built with Vue.js and a back-end API powered by Express.js. The project includes a modern, responsive UI using Vue.js and Tailwind CSS, along with a scalable RESTful API for server-side functionality.

## Project Structure

```
mevnstack/
│
├── frontend/              # Front-end Vue.js application
│   ├── src/               # Source files for the Vue.js app
│   ├── public/            # Static assets
│   ├── vite.config.js     # Vite configuration file
│   ├── package.json       # Front-end dependencies and scripts
│   └── ...
│
└── backend/               # Back-end Express.js application
    ├── src/               # Source files for the Express.js app
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    ├── controllers/       # API controllers
    ├── middlewares/       # Middleware functions
    ├── utils/             # Utility functions
    ├── config/            # Configuration files (e.g., environment variables)
    ├── index.js           # Entry point for the Node.js server
    ├── package.json       # Back-end dependencies and scripts
    └── ...
```

## Front-end Setup

1. **Navigate to the front-end directory**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. **Build for production**:
    ```bash
    npm run build
    ```

5. **Preview the production build**:
    ```bash
    npm run preview
    ```

## Back-end Setup

1. **Navigate to the back-end directory**:
    ```bash
    cd backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Start the production server**:
    ```bash
    npm start
    ```

## Features

### Front-end
- **Vue.js 3**: The latest version of Vue.js is used for building the user interface.
- **Vue Router**: Manage the application's routes.
- **Pinia**: State management for Vue.js applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.
- **Form Validation**: VeeValidate and Yup are used for client-side form validation.
- **Markdown Editor**: Integrated markdown editor with syntax highlighting using Prism.js.
- **Notifications**: Toast notifications using vue3-toastify.

### Back-end
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data, managed using Mongoose.
- **User Authentication**: Secure user authentication with JWT.
- **File Uploads**: Manage file uploads using Multer and Cloudinary.
- **Environment Configuration**: Managed using dotenv.
- **Logging**: Application logging using Winston.
- **Error Handling**: Standardized error handling using http-status.

## Environment Variables

Ensure to set up the following environment variables in your `.env` file for the back-end application:

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication
- `CLOUDINARY_NAME`: Cloudinary cloud name for file uploads
- `CLOUDINARY_API_KEY`: Cloudinary API key
- `CLOUDINARY_API_SECRET`: Cloudinary API secret

---

