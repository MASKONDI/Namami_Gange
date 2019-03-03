import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    //if (this.props.auth.isAuthenticated) {
    // this.props.history.push("/dashboard");
    //}
  }

  render() {
    return (
      <div className="landing">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />

            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            <li data-target="#carouselExampleIndicators" data-slide-to="3" />
            <li data-target="#carouselExampleIndicators" data-slide-to="4" />
            <li data-target="#carouselExampleIndicators" data-slide-to="5" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={require("../.././img/i1.jpg")}
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <Link to="/haridwar">
                    <strong>Haridwar</strong>
                  </Link>
                </h5>
                <p>
                  Haridwar or the Gateway to Gods is an important Hindu
                  pilgrimage center.
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src={require("../.././img/i2.jpg")}
                alt="second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Kanpur</strong>
                </h5>
                <p> Kanpur is one of the popular cities of India.</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src={require("../.././img/i3.jpg")}
                alt="third slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Allhabad</strong>
                </h5>
                <p> The king of all pilgrimage centers.</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src={require("../.././img/i4.jpg")}
                alt="fourth slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Vanaras</strong>
                </h5>
                <p>Benares or Varanasi is the spiritual capital of India.</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src={require("../.././img/i5.jpg")}
                alt="five slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Patna</strong>
                </h5>
                <p>
                  Patna is the Buddhist, Hindu,sikhs, and Jain pilgrimage
                  centres.
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src={require("../.././img/i6.jpg")}
                alt="sixth slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Kolkata</strong>
                </h5>
                <p>
                  A man cleans garbage along the banks of the river Ganges in
                  Kolkata in April.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="post-form mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white" align="center">
              <i>
                <strong>
                  "River of Life, River of Death: The Ganges and India's
                  Future."
                </strong>
              </i>
            </div>
            <div className="card-body">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col col-lg-5" styles="margin-top:30px">
                    <h2 styles={"color:red"}>
                      Namami Gange : Why Ganga needs to be cleaned ?
                    </h2>
                    <p align="justify" styles="font-size:14px">
                      India, a land of culture and huge diversity is now
                      becoming polluted due to some reasons and carelessness
                      that we Indians do. In today's world many programmes are
                      launched by the government to keep India clean. The first
                      most important place that needs to be cleaned are the main
                      attraction of India that are the rivers. They are
                      considered of great religious significance. Ganga is
                      considered the most sacred river in Hindu mythology and a
                      life line of millions of people. It provides water to
                      about 40 % of India's population across 11 states, serving
                      an estimated population of 500 million people or more,
                      which is larger than any other river in the world. But
                      nowadays, during festivals over 70 million people bathe in
                      the Ganga for a few weeks to cleanse themselves from their
                      sins. Some materials like food, waste materials or leaves
                      are left in the river for ritualistic reasons. These pujas
                      lead to a great pollution in the river and now it is
                      regarded as most polluted river. The extreme pollution of
                      the Ganges affects 400 million people who live close to
                      the river. The river waters start getting polluted right
                      at the source. The commercial exploitation of the river
                      has risen in proportion to the rise of population.
                      Gangotri and Uttarkashi are good examples too. Gangotri
                      had only a few huts of Sadhus until the 1970s and the
                      population of Uttarkashi has swelled in recent years. As
                      it flows through highly populous areas the Ganges collects
                      large amounts of human pollutants therefore carries a high
                      risk of infection.
                    </p>
                    <img
                      src={require("../.././img/i7.jpg")}
                      styles="margin-bottom:10px"
                      alt="seventh slide"
                    />
                    <h3 styles="color:red">
                      Previous work of goverment to clean ganga?{" "}
                    </h3>
                    <p align="justify" styles="font-size:14px">
                      The problem with clean Ganga project is that there’s no
                      proper advertisement or information has been released by
                      our media. surprisingly Even BJP also not properly
                      informing about the works happened. There are lots of
                      efforts are put by Mr. Nitin Gadkari….actual results will
                      start to come by March 2019. Though Government is saying
                      that Ganga will be cleaned by 70% till March 2019. Over
                      7000 crores spend till December, 2017 to clean 500KM
                      stretch of Ganga According to National Green Tribunal
                      there is NO improvement in condition of Ganga till
                      date(December, 2017).
                      <br />
                      In past also previous government announced many schemes
                      all are in vain . Even manmohan Singh's govt pledge 3000
                      cr to clean ganga . But they are not able to achieve
                      desired result. If we want to see a clean and pure River
                      ganga than first we have to change our crippled mindset
                      first because core problem lies and curruption within us.
                    </p>
                  </div>
                  <div className="col col-lg-5" styles="margin-top:30px">
                    <h3 styles="color:red">
                      How Blockchain Technology is helping to clean the Ganga
                      river?
                    </h3>
                    <p align="justify" styles="font-size:14px">
                      “Our pilots will begin with one farm, then expand the
                      cleanups to multiple farms at a time by the third cleanup,
                      using hardware and blockchain [technology] to efficiently
                      execute multiple cleanups,” he said. “Using
                      decentralization, we will enable distributed data
                      collection and secure payments to villages, engineering
                      accountability, economic inclusion and community
                      engagement.”
                      <br />
                      Through the blockchain, Sustainability International will
                      be able to micropay community members as they build
                      credibility through its reputation system that rewards
                      honest work. It’s hoped that this will rewire a society
                      that is rampant with bribery and corruption. In turn,
                      interaction with international NGOs that are seeking to
                      engage with young entrepreneurs and community leaders in
                      India’s largest country will be made easier.
                      <br />
                      "With smart contracts and cryptocurrency, we can create
                      ‘programmable money,’ which allows us to then ‘program’
                      human actions,” added Siegel. “If we incentivize people to
                      continuously perform a series of tasks in order to receive
                      a sustained flow of funds, we might be able to create a
                      system in which the most likely ‘corrupt’ actors are
                      incentivized for not being corrupt."
                    </p>
                    <h3 styles="color:red">How Smart-Contract works?</h3>
                    <p align="justify" styles="font-size:14px">
                      <i>
                        "Designing, development, auditing and optimization of
                        self-executing smart contracts systems based on Ethereum
                        and other platforms to automate transactions without
                        involving middlemen."
                      </i>
                      <br />
                      On the contract page you will find different option which
                      can be accessed by different people according to
                      authorities assigned to them.
                      <ul>
                        <li>
                          First button is used to register the teams where
                          people can register themselves.
                        </li>
                        <li>
                          With the help of second button you take find the list
                          of judges.
                        </li>
                        <li>
                          Third button is for the manager who can use this field
                          to make judges.
                        </li>
                        <li>
                          Fourth field is for the judges where they can vote
                          teams.
                        </li>
                        <li>
                          Next button is for the manager when all the work and
                          voting is done.
                        </li>
                        <li>
                          Next function is called when the contract has been
                          reset. To reinitiate the contract from new location.
                        </li>
                        <li>
                          Last one is to check the address of the teams
                          registered in the contract.
                        </li>
                      </ul>
                    </p>
                    <img
                      src={require("../.././img/i8.jpg")}
                      styles="margin-bottom:10px"
                      alt="third slide"
                    />
                    <h3 styles="color:red">
                      How can user Participate in this event?
                    </h3>
                    <p align="justify" styles="font-size:14px">
                      First the user need to signup and need to create a id at
                      the website after that login. Make sure you have installed
                      metamask which is an extention of chorome there you may
                      need to create a id. after you have logged In in the
                      metamask and the website go to the sevice section which is
                      at top of the page then go to namamigange contract where
                      you can find more instructions which you can read there.
                      After clicking on the namami gange contract you will find
                      yourself on another page there click on the link then at
                      the link click on the first button.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
