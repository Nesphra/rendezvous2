"use client"

import { useEffect, useState } from "react";

export default function Home() {
  // Set the date we're counting down to
  // Set the date we're counting down to
  var countDownDate = new Date("Dec 14, 2023 15:37:25").getTime();
  const [datetime, setdatetime] = useState('');

  useEffect(() => {
    setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="demo"
      var datetime = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      setdatetime(datetime)
  
      // If the count down is finished, write some text
      if (distance < 0) {
        datetime = "EXPIRED";
      }
    }, 1000);
  })
  
  // return (
  //   <p className="timer">
  //     {datetime}
  //   </p>
  // )
}
