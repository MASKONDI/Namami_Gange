import React from "react";

export default () => {
  return (
    <footer>
      <div id="footer-bg">
        <div id="footer">
          <div id="footer-left">
            <div id="about">
              <h2>About Our Company</h2>
              <p align="justify">
                Our Company create Smart-Contract according to requirement by
                User or Owners and we also create web-application and android
                apps. We also work on few blockchain based development services
              </p>
              <img
                src={require("../.././img/i9.JPG")}
                styles="margin-bottom:10px"
                alt="third slide"
              />
              <ul align="left">
                <li>Smart-Contract Development</li>
                <li>Dapps Development</li>
                <li>Private Blockchain Development</li>
                <li>Blockchain Consulting</li>
                <li>ICO development and Launch</li>
                <li>Exchange Plateform</li>
                <li>Crypto wallet development</li>
                <li>Hyperladger and MultiChain Development</li>
              </ul>
              <a href="">Click Here To Continue Reading</a>
              <p>&nbsp;</p>
            </div>
          </div>
          <div id="footer-right">
            <h2>Upcoming Events</h2>
            <h3>Name Of Upcomiong Event - Namag-1</h3>
            <p>
              <ul align="left">
                <li> Location :- Praygraj (Allahabad).</li>
                <li>Date :- March-23-2019.</li>
              </ul>
              There are so many visitors,Devoters coming in Allahabad for holy
              bathing in Ganga's river.during hole Kumbh-event whole city and
              all Ganga's ghat are polluted.
            </p>
            <a href="./">Click Here To Continue Reading</a>
            <p>&nbsp;</p>
            <h3>Name Of Upcomiong Event - Namag-2</h3>
            <p>
              <ul align="left">
                <li>Location :- Praygraj (Allahabad).</li>
                <li>Date :- March-30-2019. </li>
              </ul>
              There are so many visitors,Devoters coming in Allahabad for holy
              bathing in Ganga's river.during hole Kumbh-event whole city and
              all Ganga's ghat are polluted.
            </p>
            <a href="/">Click Here To Continue Reading</a>
            <p>&nbsp;</p>
            <img
              src={require("../.././img/i10.jpg")}
              styles="margin-bottom:10px"
              alt="third slide"
            />
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      <div id="bottom-bg">
        <div id="bottom">
          <footer className="mt-1 p-1  footer-text">
            Copyright &copy; {new Date().getFullYear()} | All Rights Reserved |
            &bull;NamamiGange Team &bull; Company Name :- Gurukul Kangri
            Viswavidyala Haridwar,Uttrakhand &bull;
            <p align="center">erkbrajput@gmail.com &bull; +91- 8126879464</p>
          </footer>
        </div>
      </div>
    </footer>
  );
};
