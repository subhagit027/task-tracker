# Task Tracker Application

A simple React app for managing daily tasks, allowing users to add, view, edit, and delete tasks. The app leverages `useState` for state management, persists data in local storage, and includes responsive design with basic styling.

---

## Features
1. **Add Task**: A form to add a task with fields for:
   - Title
   - Description
   - Due Date
   - Status (Pending, In Progress, Completed)
   
2. **View Tasks**: Displays tasks in a responsive table with alternating row colors or cards.

3. **Edit Task**: Tasks can be edited via inline editing or a modal popup.

4. **Delete Task**: Tasks can be deleted with a confirmation step.

5. **Data Persistence**: All tasks are stored in the browser's local storage for retention across sessions.

---

## Technologies Used
- **React.js**: For building the app's interface and handling state.
- **CSS**: For styling and ensuring responsiveness.
- **LocalStorage API**: For persisting data in the browser.

---

## Installation and Setup
Follow these steps to set up and run the application:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
cd task-tracker
npm install
npm start
http://localhost:3004
npm run build


src/
├── components/
│   ├── TaskForm.js 
TaskForm.css # Component to add/edit tasks
│   ├── TaskList.js 
TaskList.css # Component to display tasks
│   ├── TaskEditModal.js 
    TaskEditModal.js        # Modal for editing tasks
├── App.js                # Main application component
├── index.js              # Application entry point
├── App.css               # Application-specific styles
├── index.css             # Global styles

