import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="about" className="about">
                        <div className="container">
                            <div className="section-title">
                                <h2>About</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4" data-aos="fade-right">
                                    <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
                                </div>
                                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                    <h3>UI/UX Designer &amp; Web Developer.</h3>
                                    <p className="font-italic">
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                          magna aliqua.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="facts" className="facts">
                        <div className="container">
                            <div className="section-title">
                                <h2>Facts</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                    <div className="count-box">
                                        <i className="icofont-simple-smile"></i>
                                        <span data-toggle="counter-up">232</span>
                                        <p><strong>Happy Clients</strong> consequuntur quae</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="count-box">
                                        <i className="icofont-document-folder"></i>
                                        <span data-toggle="counter-up">521</span>
                                        <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="count-box">
                                        <i className="icofont-live-support"></i>
                                        <span data-toggle="counter-up">1,463</span>
                                        <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                                    <div className="count-box">
                                        <i className="icofont-users-alt-5"></i>
                                        <span data-toggle="counter-up">15</span>
                                        <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="skills" className="skills section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Skills</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row skills-content">
                                <div className="col-lg-6" data-aos="fade-up">
                                    <div className="progress">
                                        <span className="skill">HTML <i className="val">100%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">CSS <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">JavaScript <i className="val">75%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                    <div className="progress">
                                        <span className="skill">PHP <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">Photoshop <i className="val">55%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default About;