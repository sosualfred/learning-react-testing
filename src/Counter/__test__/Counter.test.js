import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {

    const component = render(<Counter/>);
    const headerEl = component.getByTestId("header");

    expect(headerEl.textContent).toBe('My Counter');

});

test("counter initially start with text of 0", () => {

    const component = render(<Counter />);
    const counterEl = component.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

});

test("input contains initial value of 1", () => {

    const component = render(<Counter />);
    const inputEl = component.getByTestId("input");

    expect(inputEl.value).toBe("1");

});

test("add button renders with + sign", () => {

    const component = render(<Counter />);
    const addButton = component.getByTestId("add-button");

    expect(addButton.textContent).toBe("+");

});

test("substract button renders with - sign", () => {

    const component = render(<Counter />);
    const substractButton = component.getByTestId("substract-button");

    expect(substractButton.textContent).toBe("-");

});

test("change value of input works correctly", () => {

    const component = render(<Counter />);
    const inputEl = component.getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");

});

test("clicking on add button adds 1 to counter", () => {

    const component = render(<Counter />);
    const addButton = component.getByTestId("add-button");
    const counterEl = component.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addButton);

    expect(counterEl.textContent).toBe("1");

});

test("clicking on substract button substracts 1 from the counter", () => {

    const component = render(<Counter />);
    const substractButton = component.getByTestId("substract-button");
    const counterEl = component.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(substractButton);

    expect(counterEl.textContent).toBe("-1");

});