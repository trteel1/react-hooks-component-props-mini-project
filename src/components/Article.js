import React from "react";
const readingTime = (minutes) => {
    let timeToRead = "";
    if (minutes < 30) {
      const coffeeCup = "☕️";
      const cups = Math.ceil(minutes / 5);
      for (let i = 0; i < cups; i++) {
        timeToRead += coffeeCup;
      }
    } else {
      const bentoBox = "🍱";
      const boxes = Math.ceil(minutes / 10)
      for (let i = 0; i < boxes; i++) {
        timeToRead += bentoBox;
      }
    }
    return `${timeToRead} ${minutes} min read`
  }

function Article({title,date="January 1, 1970",preview,minutes}){

    return(
        <article>
            <h3> {title}</h3>
            <small> {date} </small>
            {" • "}
       <small>{readingTime(minutes)}</small>

            <p> {preview}</p>

        </article>
    )
}
export default Article;