import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load Contact Us Component",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should Load Button inside Contact Component",()=>{
    render(<Contact/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("Should Load input name inside Contact Component",()=>{
    render(<Contact/>);
    const input = screen.getByPlaceholderText("Your Name");
    expect(input).toBeInTheDocument();
});

test("Should load 3 input boxes on the Contact Component",()=>{
    render(<Contact/>);
    const input_boxes = screen.getAllByRole("textbox");   //known as querying, i.e we are querying on the screen
    //console.log(input_boxes.length);  returns JSX element, which is React Element, which is Object at the end of the day
    expect(input_boxes.length).toBe(3);
})