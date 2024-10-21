# TodoList App

TodoList App is a simple and functional web application for managing daily tasks. The application allows users to register, log in, add todos, edit and delete tasks, and mark tasks as completed.

## Features

### 1. Home Page
- **Navbar**
  - Menu navigation: Todos, Profile, Home, Log Out (visible if logged in)
- **Introduction Section**
  - Title and a brief description of the application
- **Buttons**
  - `Mulai`: Redirects to login page
  - `Daftar`: Redirects to registration page

### 2. Register Page
- **Input Fields**
  - Username, Email, and Password
- **Password Toggle**
  - Show/Hide password option
- **Form Validation**
  - Required fields: Username, Email, and Password
- **Button**
  - `Register`: Submits registration form
- **Login Option**
  - Redirect to login page if the user already has an account

### 3. Login Page
- **Input Fields**
  - Username and Password
- **Password Toggle**
  - Show/Hide password option
- **Basic Validation**
  - Validates if both fields are filled
- **Button**
  - `Login`: Submits login form

### 4. Todos Page
- **Title**: Displays the page title
- **Add Todos**
  - Input field to add new todos
- **Task List**
  - Displays the list of todos
- **Buttons**
  - `Edit`: Edit a specific todo
  - `Delete`: Remove a specific todo
  - `Toggle Complete`: Mark a task as completed or incomplete

### 5. Profile Page
- **Title**: Displays page title
- **Greeting Section**
  - Greets the user by their username
- **User Email**
  - Displays the logged-in user's email

### 6. Log Out
- **Redirect**
  - Logs out the user and redirects to the home page
- **Session Management**
  - Clears login status

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todolist-app.git
