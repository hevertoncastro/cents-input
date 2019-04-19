# **Cents Input**

Handle money with cents input when it must start filling from decimal part.

Example:

![A keyboard with money value being inputed](https://i.imgur.com/1PBZiGg.gif)

---

### **How to use it**

First, install [`cents-input`](https://www.npmjs.com/package/cents-input) package:

```
npm install cents-input

         or

yarn add cents-input
```

Then import it in your project:

```javascript
import CentsInput from 'cents-input';
```

Create an instance of the CentsInput class:

```javascript
const instance = new CentsInput();
```

---

### **Options**

You can set a prefix and separator as options:

```javascript
const instance = new CentsInput({
  prefix: 'R$ ', // default is empty
  separator: '.',  // default is comma
});
```

---

### **Methods**

There are some methods available:

```javascript
instance.addDigit(1);
```
> Add a digit to the current value. Put the value you want to add as a parameter.


```javascript
instance.removeDigit();
```
> Remove a digit from the end of the current value.


```javascript
instance.getFormatted();
```
> Return the formatted value, including the prefix.


```javascript
instance.getFloat();
```
> Return the float value, without the prefix.


```javascript
instance.reset();
```
> Reset the value.