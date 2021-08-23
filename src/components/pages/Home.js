import React from "react";

const styles = {
  div : {
    borderTop: 'darkcyan',
    borderTopStyle: 'groove'
  }
};
function Home() {
  return (
    <div className="justify-content-center" style={styles.div}>
      <h1>About Me:</h1>
      <h2 style={styles.div}>
        Hi! My name is Mark Andersen, I am an aspiring web developer currently
        participating in the Full Stack Uconn bootcamp. I have an extensive
        background in retail I currently manage the Services and Fulfillment
        departments at my local Home Depot. I graduated from Western Connecticut
        State University in the fall of 2015 with a B.S. in Meteorology. I am
        looking to tie in the skills I acquire during this program with my
        educational background studying and forecasting weather.
      </h2>
    </div>
  );
}
export default Home;
