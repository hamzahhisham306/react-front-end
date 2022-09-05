import React from "react";
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

test('can change name', async()=>{
  render(<App/>);
  const input= screen.getByTestId('Name-input');
  const name=screen.getByTestId('Name');
  fireEvent.change(input, {target:{value:'hamzah'}});
  expect(name).toHaveTextContent('my name is hamzah');

});

test('change age',()=>{
  render (<App/>);
  const ageInput=screen.getByTestId('Age-input');
  const age=screen.getByTestId('Age');
  fireEvent.change(ageInput, {target:{value:'27'}});
  expect(age).toHaveTextContent('I am 27');

});

test('change gender',()=>{
  render(<App/>);
  const genderInput=screen.getByTestId('Gender-input');
  const gender=screen.getByTestId('Gender');
  fireEvent.change(genderInput, {target:{value:'male'}});
  expect(gender).toHaveTextContent('I am male')
})


test('change five age', async()=>{
  render(<App/>);
  const ageInput=screen.getByTestId('Age-input');
  const fiveAge=screen.getByTestId('fiveAge');
  fireEvent.change(ageInput,{target:{value:'22'}});
  const submit = screen.getByTestId('Submit');
  fireEvent.click(submit);
  setTimeout(()=>{
    expect(fiveAge).toHaveTextContent("After Add five 27")
  },1)

})