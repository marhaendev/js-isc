# Infinite Scroll Animation with JavaScript (ISC)

This project implements a horizontal scrolling effect based on attributes (`data-isc`) provided in HTML elements.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Author](#author)

## Description
The JavaScript code adds a horizontal scrolling animation to elements specified with `data-isc` attributes in the HTML. It dynamically adjusts the width, height, duration, and color of the scrolling container based on these attributes.

## Installation
To integrate this code into your project, follow these steps:
### Local
1. Download the `isc.js` file and add it to your project directory.
2. Include the script in your HTML file:
   ```html
   <script src="isc.js"></script>

### CDN
Include the script in your HTML file
<script src="https://cdn.jsdelivr.net/gh/marhaendev/js-isc/isc.js"></script>

## Usage
### Attributes
You can customize the behavior of isc by adding data-isc attributes to your HTML container elements.

Supported attributes:
| Attributes  | Description                                                                 |
|-------------|---------------------------------------------------------------------------|
| **Width**   | Sets the width of the scroll container (`px` or `%`).                     |
| **Height**  | Sets the height of the scroll container (`px`).                           |
| **Color**   | Sets the background color of the scroll container (`color:random` for a random color or `color:yourColor` for a specific color). |
| **Duration**| Sets the duration of the horizontal scroll animation in seconds.          |


### Example
#### No adjustments
```
<div data-isc>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```
#### Width
```
<div data-isc="width:800"> <!-- 800px -->
<div data-isc="width:800px"> <!-- 800px -->
<div data-isc="width:80%"> <!-- 80% -->
```
#### Height
```
<div data-isc="height:100"> <!-- 100px -->
<div data-isc="height:100px"> <!-- 100px -->
```
#### Color
```
<div data-isc="color:random"> <!-- random colors for items -->
<div data-isc="color:blue"> <!-- blue color for items -->
```
#### Duration
```
<div data-isc="duration:5"> <!-- 5 seconds -->
```
# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/marhaendev/js-isc/tree/master?tab=MIT-1-ov-file)  file for details.

# Author
Created by [@marhaendev](https://github.com/marhaendev)

