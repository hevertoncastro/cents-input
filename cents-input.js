class CentsInput {
  constructor(options) {
    this.digits = [0, 0, 0];
    this.formatted = null;
    this.float = null;
    this.prefix = !!options.prefix ? options.prefix : '';
    this.separator = !!options.separator ? options.separator : ',';
  }

  addDigit(digit) {
    if (this.isFirstDigitZero()) {
      this.digits.shift();
    }
    this.digits.push(parseInt(digit));
    this.setValues();
  }
  
  removeDigit() {
    if (this.hasNotEnoughDigits()) {
      this.digits.unshift(0);
    }
    this.digits.pop();
    this.setValues();
  }
  
  hasNotEnoughDigits() {
    return this.digits.length <= 3;
  }
  
  isFirstDigitZero() {
    return this.digits[0] === 0;
  }

  setValues() {
    const localDigits = [...this.digits];
    const decimal = localDigits.splice(-2);
    const leftJoin = localDigits.join('');
    const decimalJoin = decimal.join('');
    const numbers = `${leftJoin}${this.separator}${decimalJoin}`;

    this.formatted = `${this.prefix}${numbers}`;
    this.float = parseFloat(numbers.replace(",", "."));
  }

  getFormatted() {
    return this.formatted;
  }

  getFloat() {
    return this.float;
  }
}

module.exports = CentsInput;
