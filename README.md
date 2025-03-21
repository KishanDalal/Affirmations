# Affirmation Generator

This project is a simple web application built with React and Vite that fetches affirmations from an external API and displays them in a visually appealing user interface. It was created as a learning exercise to understand how to consume APIs in React and reinforce basic React concepts.

## Features

* **API Consumption:** Fetches random affirmations from the `https://www.affirmations.dev/` API.
* **Dynamic UI:** Displays the fetched affirmation in a centered, visually engaging layout with a background image.
* **Clean and Simple:** Focuses on core functionality and learning without unnecessary complexity.

## Technologies Used

* **React:** For building the user interface.
* **Vite:** For fast development and build process.
* **CSS Modules:** For scoped CSS styling.
* **Fetch API:** For making HTTP requests to the affirmations API.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd [project-directory]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server, and you can view the application in your browser at `http://localhost:5173`.

## Project Structure

affirmation-generator/
├── public/
│   └── ... (static assets)
├── src/
│   ├── components/
│   │   └── AffirmationComponent.jsx (Displays the affirmation)
│   │   └── Affirmation.module.css (Component styles)
│   ├── App.jsx (Main application component)
│   ├── main.jsx (Entry point)
│   └── ... (other source files)
├── vite.config.js (Vite configuration)
├── package.json
├── package-lock.json
└── README.md

## Learning Points

This project helped me understand:

* How to make API requests using the `fetch` API in React.
* How to manage state and lifecycle methods in React functional components using hooks (`useState`, `useEffect`).
* How to structure a simple React application with components.
* How to use CSS Modules for scoped styling.
* How to use Vite for rapid React development.

![image](https://github.com/user-attachments/assets/132ac4ea-a0d2-4cfd-ac7f-7474a2d90698)

