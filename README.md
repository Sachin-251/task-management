# Priorota - Task Management Web App

Welcome to Priorota, your ultimate task management solution! 📝✨

## Overview

Priorota is a powerful Task Management Web App built using React.js for the frontend and Node.js with Express.js for the backend. It leverages MySQL as the database and is styled using Tailwind CSS with DaisyUI components. The project integrates various libraries such as Express.js, cors, dotenv, mysql2, React Hot Toast, and React Icons to enhance functionality and user experience.

## Features

- **Task Creation:** Easily create new tasks and assign them to categories.
- **All Tasks Fetching:** Retrieve a list of all tasks for efficient management.
- **Updating Task:** Seamlessly update task details or mark them as completed.
- **Deletion of Tasks:** Effortlessly delete unwanted tasks to keep your list organized.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Node.js:** A JavaScript runtime environment for server-side development.
- **Express.js:** A web application framework for Node.js.
- **MySQL:** A powerful relational database management system.
- **Tailwind CSS:** A utility-first CSS framework for building modern designs.
- **DaisyUI:** A component library for Tailwind CSS with built-in dark mode support.
- **Express Middleware:**
  - **cors:** Enables Cross-Origin Resource Sharing for secure API communication.
  - **dotenv:** Loads environment variables from a `.env` file into `process.env`.
  - **mysql2:** Provides MySQL database connectivity for Node.js applications.
- **React Libraries:**
  - **React Hot Toast:** A minimalistic toast notification library for React.
  - **React Icons:** A library of popular icons for React projects.

## API Endpoints

- **POST: /api/addtask:** Add a new task to the database.
- **GET: /api/tasks:** Retrieve a list of all tasks.
- **PUT: /api/tasks/:id:** Update task details by ID.
- **DELETE: /api/tasks/:id:** Delete a task by ID.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Priorota.git
   ```

2. Install dependencies:

   ```bash
   cd Priorota
   npm install
   ```

3. Configure the database:

   - Set up a MySQL database and update the connection details in `.env` file.

4. Run the development server:

   ```bash
   npm start
   ```

5. Access the web app at [http://localhost:3000](http://localhost:3000).

## Screenshots

![Screenshot_1](https://github.com/Sachin-251/task-management/blob/main/frontend/Screenshots/01.png)
![Screenshot_1](https://github.com/Sachin-251/task-management/blob/main/frontend/Screenshots/02.png)
![Screenshot_1](https://github.com/Sachin-251/task-management/blob/main/frontend/Screenshots/03.png)
![Screenshot_1](https://github.com/Sachin-251/task-management/blob/main/frontend/Screenshots/04.png)

## Contributions

Contributions are welcome! Feel free to open issues and submit pull requests to help improve Priorota.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
