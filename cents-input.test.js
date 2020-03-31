const CentsInput = require('./cents-input');
const options = {
  prefix: 'R$ ',
  separator: ',',
};
const instance = new CentsInput(options);

test('adds a digit to the initial value', () => {
  instance.addDigit(1)

  let floatNumber = instance.getFloat();
  let formatedNumber = instance.getFormatted();

  expect(floatNumber).toEqual(0.01);
  expect(formatedNumber).toEqual('R$ 0,01');
});

test('adds the number 5 after the number 1', () => {
  instance.addDigit(5)

  let floatNumber = instance.getFloat();
  let formatedNumber = instance.getFormatted();

  expect(floatNumber).toEqual(0.15);
  expect(formatedNumber).toEqual('R$ 0,15');
});

test('remove the last digit from the end of the current value', () => {
  instance.removeDigit();

  let floatNumber = instance.getFloat();
  let formatedNumber = instance.getFormatted();

  expect(floatNumber).toEqual(0.01);
  expect(formatedNumber).toEqual('R$ 0,01');
});

test('adds the number 2 after the number 1', () => {
  instance.addDigit(2)

  let floatNumber = instance.getFloat();
  let formatedNumber = instance.getFormatted();

  expect(floatNumber).toEqual(0.12);
  expect(formatedNumber).toEqual('R$ 0,12');
});
