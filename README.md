# Employee Management System (EMS)

This project is an **Employee Management System** built with Angular. It is designed to manage employee, client, and project data with a login feature.

## Features

- **Login**: Users can log in with a username and password.
- **Employee Management**: Add and view employees, including their name, position, and department.
- **Client Management**: Manage client details.
- **Project Management**: Manage projects associated with employees.
  
## Technologies Used

- **Frontend**: Angular
- **Backend**: This is a frontend application. The backend can be developed using any technology (e.g., Node.js, Python, Java, etc.).
- **Styling**: CSS, Flexbox, and animations.

## Project Structure

Employee-Management-System/ 
│ ├── src/
│ ├── app/
│ │ ├── employee/
│ │ │ ├── employee.component.ts
│ │ │ ├── employee.component.html 
│ │ │ ├── employee.component.css # Employee component CSS │ │ │ └── employee.component.spec.ts # Employee component test file │ │ ├── client/ # Client module │ │ │ ├── client.component.ts # Client component logic │ │ │ ├── client.component.html # Client component HTML │ │ │ ├── client.component.css # Client component CSS │ │ │ └── client.component.spec.ts # Client component test file │ │ ├── project/ # Project module │ │ │ ├── project.component.ts # Project component logic │ │ │ ├── project.component.html # Project component HTML │ │ │ ├── project.component.css # Project component CSS │ │ │ └── project.component.spec.ts # Project component test file │ │ ├── login/ # Login module │ │ │ ├── login.component.ts # Login component logic │ │ │ ├── login.component.html # Login component HTML │ │ │ ├── login.component.css # Login component CSS │ │ │ └── login.component.spec.ts # Login component test file │ │ ├── app.component.ts # Main application component logic │ │ ├── app.component.html # Main application HTML │ │ ├── app.component.css # Main application CSS │ │ ├── app.module.ts # Main module file │ │ ├── app-routing.module.ts # Routing module for navigation │ │ └── app.component.spec.ts # Application test file │ └── assets/ # Assets folder │ └── images/ # Folder for image assets │ └── logo.png # Logo image │ ├── angular.json # Angular CLI configuration file ├── package.json # Project metadata and dependencies ├── tsconfig.json # TypeScript configuration file └── README.md # Project README file


## Setup Instructions

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/employee-management-system.git
    cd employee-management-system
    ```

2. **Install Dependencies**:

    Run the following command to install all the required dependencies:

    ```bash
    npm install
    ```

3. **Run the Development Server**:

    To start a local development server, use the following command:

    ```bash
    ng serve
    ```

    Navigate to `http://localhost:4200/` in your browser to view the application.

4. **Build the Project**:

    To build the project for production, run:

    ```bash
    ng build
    ```

    This will create a production-ready build in the `dist/` folder.

## Running Tests

### Unit Tests:

To run the unit tests with Karma, use:

```bash
ng test
```

### End-to-End Tests:

To run the unit tests with Karma, use:

```bash
ng test
```

## Additional Resources
For more information on how to use the Angular CLI, visit the official Angular CLI Documentation.

# Author: Othmane Abderrazik
GitHub: [https://github.com/OthmaneAbder2303}

