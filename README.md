# React User Registration Form with `react-hook-form`

This project demonstrates a user registration form built using the `react-hook-form` library. It showcases how to efficiently handle multiple form inputs, implement basic validation, and manage form submission with significantly less code compared to traditional `useState`-based approaches (See https://github.com/belle-kochapon/react-usestate-login-form). 

## Key Concepts Illustrated

- **`react-hook-form`:** Utilizes the `useForm` hook for streamlined form management, including:
    - **`register`:** Registers input fields with the form and enables validation rules. This example demonstrates basic `required` and `minLength` validation for the username field.
    - **`handleSubmit`:** Handles form submission and provides access to the form data.
- **TypeScript for Type Safety:** Defines the `UserRegisterInputs` type to ensure type safety for the form data.
- **Simplified Input Handling:** Eliminates the need for individual state variables and `onChange` handlers for each input field.

## Usage

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd react-hook-form-user-registration
    ```
3.  **Install dependencies:**
    ```bash
    npm install react-hook-form
    # or
    yarn add react-hook-form
    # or
    pnpm add react-hook-form
    ```
4.  **Install other project dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
5.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
6.  **View in your browser:** Open your browser and navigate to the address provided by your development server.

Interact with the registration form, paying attention to the username field which has basic validation rules. Upon submission, the form data will be logged to your browser's console.

![image](https://github.com/user-attachments/assets/b858907b-0f23-47ff-bf65-cef6dfdb5e45)


## Potential Further Enhancements

- Implement more comprehensive validation rules for all fields (e.g., email format, password strength, password confirmation matching).
- Display user-friendly error messages for validation failures.
- Integrate with an API endpoint to handle the actual user registration process.
- Explore advanced features of `react-hook-form` such as custom validation, form state management, and performance optimizations.

This example provides a solid foundation for building complex forms in React with the help of the `react-hook-form` library.
