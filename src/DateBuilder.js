import React from "react";
const DateBuilder = () => {
  console.log(new Date().getDay());
  const dateBuilder = d => {
    let months = [
      "січень",
      "лютий",
      "березень",
      "квітень",
      "травень",
      "червень",
      "липень",
      "серпень",
      "вересень",
      "жовтень",
      "листопад",
      "грудень"
    ];
    let days = [
      "неділя",
      "понеділок",
      "вівторок",
      "середа",
      "четвер",
      "п'ятниця",
      "субота"
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();

    return `${day}:  ${month}, ${date}, ${year} `;
  };

  return <div className="date">{dateBuilder(new Date())}</div>;
};

export default DateBuilder;
