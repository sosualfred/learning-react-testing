import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter/>);
    getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {

    const headerEl = getByTestId("header");
    expect(headerEl.textContent).toBe('My Counter');

});

test("counter initially start with text of 0", () => {

    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

});

test("input contains initial value of 1", () => {

    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

});

test("add button renders with + sign", () => {

    const addButton = getByTestId("add-button");

    expect(addButton.textContent).toBe("+");

});

test("substract button renders with - sign", () => {

    const substractButton = getByTestId("substract-button");

    expect(substractButton.textContent).toBe("-");

});

test("change value of input works correctly", () => {

    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");

});

test("clicking on add button adds 1 to counter", () => {

    const addButton = getByTestId("add-button");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addButton);

    expect(counterEl.textContent).toBe("1");

});

test("clicking on substract button substracts 1 from the counter", () => {

    const substractButton = getByTestId("substract-button");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(substractButton);

    expect(counterEl.textContent).toBe("-1");

});

test("changing input value then clicking on add button works correctly", () => {

    const addButton = getByTestId("add-button");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");

    fireEvent.click(addButton);

    expect(counterEl.textContent).toBe("5");

});

test("changing input value then clicking on substract button works correctly", () => {

    const substractButton = getByTestId("substract-button");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");

    fireEvent.click(substractButton);

    expect(counterEl.textContent).toBe("-5");

});

test("adding and then substracting leads to the correct counter number", () => {

    const addButton = getByTestId("add-button");
    const substractButton = getByTestId("substract-button");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    });


    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(substractButton);
    fireEvent.click(substractButton);

    expect(counterEl.textContent).toBe("20");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(addButton);
    fireEvent.click(substractButton);
    fireEvent.click(substractButton);

    expect(counterEl.textContent).toBe("15");

});

test("counter has the right color", () => {

    const counterEl = getByTestId("counter");
    const addButton = getByTestId("add-button");
    const substractButton = getByTestId("substract-button");
    const inputEl = getByTestId("input");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "150"
        }
    });

    fireEvent.click(addButton);
    expect(counterEl.className).toBe("green");

    fireEvent.click(substractButton);
    fireEvent.click(substractButton);
    expect(counterEl.className).toBe("red");

});