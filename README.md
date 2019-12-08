Nano Date Format
=========

A simple and lightweight date & time format for javascript

## But.. Why?

Handling time and date format in javascript has always been a trouble. In atleast a few cases, we dont care much about the format and want to show something readable for the end user. This library is not intended to be a replacement for an extensive library like moment.js, but a lightweight solution under 100 lines of javascript to show a readable time and date.

## Installation

  `npm install nanodateformat`

## Usage

Import functions
```javascript
    const sdf = require('nanodateformat');
    const formatTime = sdf.formatTime;
    const formatDate = sdf.formatDate;
    const formatDateTime = sdf.formatDateTime
```

Or using destructuring

```javascript
    const { formatDate, formatTime, formatDateTime } = require('nanodateformat');
```

Date format
```javascript
    formatDate(new Date(2019,11,20))
    // Outputs '20-12-2019'

```

Date format with separator
```javascript
    formatDate(new Date(2019,11,20), '/')
    // Outputs '20/12/2019'

```

Time format
```javascript
    const date = new Date();
    date.setHours(10);
    date.setMinutes(20);
    formatTime(date);
    // Outputs 10:20 AM
```

Date and Time
```javascript
    const date = new Date(2019,11,20);
    date.setHours(10);
    date.setMinutes(20);
    formatDateTime(date);
    // Outputs '20-12-2019 10:20 AM'
```

Date & Time with custom separator for date
```javascript
    const date = new Date(2019,11,20, '/');
    date.setHours(10);
    date.setMinutes(20);
    formatDateTime(date);
    // Outputs '20/12/2019 10:20 AM'
```
  

## Tests

  `npm test`

## Contributing
Feel free to raise a PR! Just dont forget to add unit test cases to cover whatever you write.