const { Calendar } = require("node-calendar-js");

const calendar = new Calendar({
    year: 2020,
    month: 11
});

console.log(calendar.toHTML());
