# Task List Application

This is a task list application built with a **React frontend** and a **Node.js backend**, designed as a code challenge for a full-stack senior developer role.

---

## **Frontend (React)**

The frontend is built with React, as part of the challenge, create the following features:

1. **Homepage**:  
   - A link to the homepage is provided for easy navigation.

2. **Task List**:  
   - Fetches and displays a list of all tasks.  
   - Each task includes a **delete button** to remove it from the list.

3. **Add Task**:  
   - Includes an **input field** and a **button** to add a new task.  
   - Submitting the form sends a `POST` request to the backend to create the task.

4. **Task Detail**:  
   - A dedicated route (`/tasks/:id`) displays detailed information about a specific task.  
   - Fetches task details using the task ID from the backend.

5. **Routing**:  
   - Uses React Router to navigate between the homepage, task list, and task detail pages.

---

## **Backend (Node.js)**

The backend is built with Node.js as part of the challenge, create the following RESTful API endpoints:

- **GET `/tasks/:id`**:  
  Fetches a specific task by its unique ID.  
  *Example:* `GET /tasks/123` returns the task with ID `123`.

- **POST `/tasks`**:  
  Adds a new task to the list.  
  *Request Body:* `{ "title": "Task Title" }`  
  *Example:* `POST /tasks` with the above body creates a new task.

- **DELETE `/tasks/:id`**:  
  Deletes a task by its unique ID.  
  *Example:* `DELETE /tasks/123` removes the task with ID `123`.

---

## **How to Run**

1. **Backend**:  
   - Navigate to the `server` directory and run `npm install` to install dependencies.  
   - Start the server with `npm run dev`. The API will be available at `http://localhost:8080`.

2. **Frontend**:  
   - Navigate to the `client` directory and run `npm install` to install dependencies.  
   - Start the development server with `npm run dev`. The app will be available at `http://localhost:3000`.

---

## **Expected Behavior**

- The homepage should link to the task list.  
- The task list should display all tasks fetched from the backend.  
- Clicking the delete button should remove the task from the list.  
- The "Add Task" feature should allow users to create new tasks.  
- Clicking on a task should navigate to its detail page, displaying its full information.

---

This challenge evaluates your ability to build a full-stack application with clean, maintainable code, proper API integration, and a user-friendly interface. Good luck! 🚀