# Angular People Table

This project is an Angular application that displays a list of people in a table format. The data is hardcoded in JSON format and follows a structured approach adhering to SOLID principles.

## Project Structure

The project is organized as follows:

```
gitflow-people
├── src
│   ├── app
│   │   ├── app.component.html        # Main application component template
│   │   ├── app.component.scss        # Styles for the main application component
│   │   ├── app.component.spec.ts     # Unit tests for the main application component
│   │   ├── app.component.ts          # Main application component logic
│   │   ├── app.module.ts             # Root module of the application
│   │   ├── core
│   │   │   ├── models
│   │   │   │   └── person.model.ts    # Defines the structure of a person object
│   │   │   └── services
│   │   │       └── people.service.ts   # Service to fetch the list of people
│   │   ├── features
│   │   │   └── people-table
│   │   │       ├── components
│   │   │       │   └── people-table
│   │   │       │       ├── people-table.component.html  # Template for the people table component
│   │   │       │       ├── people-table.component.scss  # Styles for the people table component
│   │   │       │       ├── people-table.component.spec.ts # Unit tests for the people table component
│   │   │       │       └── people-table.component.ts      # Logic for displaying the list of people
│   │   │       └── people-table.module.ts                 # Feature module for the people table component
│   │   └── shared
│   │       ├── data
│   │       │   └── people.json          # Hardcoded JSON data for the list of people
│   │       └── shared.module.ts          # Shared module for common components and services
│   ├── assets                             # Directory for static assets
│   ├── environments
│   │   ├── environment.prod.ts           # Production environment settings
│   │   └── environment.ts                 # Development environment settings
│   ├── index.html                        # Main HTML file for the application
│   ├── main.ts                           # Entry point for the Angular application
│   └── styles.scss                       # Global styles for the application
├── angular.json                          # Angular CLI configuration file
├── package.json                          # npm configuration file
├── tsconfig.json                         # TypeScript configuration file
└── README.md                             # Documentation for the project
```

## Getting Started

To run the application, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the application using `ng serve`.
5. Open your browser and navigate to `http://localhost:4200`.

## Features

- Displays a list of people in a table format.
- Uses Angular services to manage data.
- Follows best practices and design principles for maintainability and scalability.

## License

This project is licensed under the MIT License.