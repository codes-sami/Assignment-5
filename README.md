# Dev Stack

## About The Project

This is a simple Dev Stack project made with React and TypeScript.

In this project, users can see different technologies and add them to their own stack. They can also remove a technology from the stack. I also added toast messages when a technology is added or removed.

## Technologies I Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- React Icons
- Vite

## Main Features

### 1. Add Technology to Stack
Users can click the "Add to Stack" button to add a technology to their stack. After adding it, the button becomes disabled.

### 2. Remove Technology
Users can remove any technology from their stack by clicking the remove button. They can also remove all technologies at once.

### 3. Toast Notifications
I added toast notifications using React Toastify. A success message appears when a technology is added, and a red error message appears when a technology is removed.



# React Questions and Answers

## 1. What is JSX, and why is it used in React?

JSX is a way to write HTML like code inside JavaScript or TypeScript.

It makes React code easier to write and understand. I used JSX to create my components and UI.



## 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.

State is used to store data that can change inside a component.



## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store data that can change in a React component.

I used `useState` in `MainLayout` to store the selected technologies.


const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after a component renders, often for things like API calls.

But I did not use useEffect in this project to load the JSON data. I used fetch() with a Promise, and then used Suspense and React use() to get the data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to know which item was changed, added, or removed.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in my YourStack component.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent can send data to a child using props.

In my project, `MainLayout` sends `selectedTech` to `YourStack`.

A child can send something back by calling a function that the parent passed as a prop.


