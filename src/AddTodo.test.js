import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
 });

 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  
  const inputTask = screen.getByRole("textbox",{name: /Add New Item/i})
  const inputDate = screen.getByRole("textbox",{name: /Due Date/i})
  const button = screen.getByRole("button",{name: /Add/i})
  fireEvent.change(inputTask, {target:{value: "Project 3"}})
  fireEvent.change(inputDate, {target:{value: "06/24/2022"}})
  fireEvent.click(button)
  const check = screen.getByText(/Project 3/i)
  expect(check).toBeInTheDocument();



 });
