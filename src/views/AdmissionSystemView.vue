<script setup>
</script>

<template>
    <section id="projectDesc" class="page-section bg-half-ring-right bg-half-ring-top" style="margin-top: 30px;">
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-7 col-md-12">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <!-- Indicators -->
                        <ul class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                            <li data-target="#myCarousel" data-slide-to="6"></li>
                        </ul>

                        <!-- The slideshow -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card">
                                    <video
                                        src="../assets/demo.mp4"
                                       
                                        controls
                                    ></video>
                                    <div class="card-body">
                                        <h4 class="card-title">University Student Admission System</h4>
                                        <p
                                            class="card-text"
                                        >It is a model–view–controller web application developed atop the Node.js environment.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card">
                                    <img
                                        class="img-fluid"
                                        alt="100%x280"
                                        src="../assets/registration_page.png"
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">Registration Page</h4>
                                        <p
                                            class="card-text"
                                        >After successful registration, the applicant will be given an account activation link via email.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card">
                                    <img
                                        class="img-fluid"
                                        alt="Application Form"
                                        src="../assets/application_form.png"
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">Application Form</h4>
                                        <p class="card-text">The form includes input validation. If necessary, applicants can save the form inputs and continue finishing the form next time.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card">
                                    <img
                                        class="img-fluid"
                                        alt="100%x280"
                                        src="../assets/admin_panel.png"
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">Admission Staff Panel</h4>
                                        <p
                                            class="card-text"
                                        >Admission staff can approve or decline submitted applications.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card">
                                    <img
                                        class="img-fluid"
                                        alt="100%x280"
                                       
                                        src="../assets/select_interview_timeslot.png"
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">Admission Staff Panel</h4>
                                        <p
                                            class="card-text"
                                        >Admission staff can arrange interviews for eligible applicants and professors.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card">
                                    <img
                                        class="img-fluid"
                                        alt="100%x280"
                                       
                                        src="../assets/send_email.png"
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">Admission Staff Panel</h4>
                                        <p
                                            class="card-text"
                                        >Admission staff can send interview invitation to eligible applicants.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card">
                                    <img
                                        class="img-fluid"
                                        alt="Application Form"
                                        src="../assets/professor_panel.png"
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">Professor Panel</h4>
                                        <p
                                            class="card-text"
                                        >Professor can give interview opportunities to applicants, and accept/reject approved applications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>

                    <div class="d-block d-lg-none" style="position: static; margin-bottom: 20px"></div>
                </div>

                <div class="col-lg-5">
                    <h3 class="small">
                        University Student Admission
                        System
                    </h3>
                    <p class="project-description">
                        University Student Admission System is a web application
                        through
                        which students can submit applications to the university, and administrators and
                        professors
                        can
                        make further process for the submitted applications.
                    </p>
                    <h5>Technologies used</h5>
                    <ul class="technologies">
                        <li>
                            <span>Programming language(s): &nbsp;</span>JavaScript
                        </li>
                        <li>
                            <span>Framework: &nbsp;</span>Sails.js
                        </li>
                        <li>
                            <span>Database: &nbsp;</span>MongoDB
                        </li>
                        <li>
                            <span>Others: &nbsp;</span>Mailgun, Bcrypt, JSON Web Token
                        </li>
                    </ul>
                    <h5>Time to develop</h5>
                    <ul>
                        <li>3.5 months</li>
                    </ul>
                    <h5>More Details</h5>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/yvonnekwchan/university-student-admission-system"
                                target="_blank"
                                id="fyp-github-link"
                            >https://github.com/yvonnekwchan/university-student-admission-system</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.technologies li span:first-child {
    font-weight: 700;
}

h3.small {
    font-size: 1.8em;
    margin-bottom: 1.49rem;
    line-height: 1.21;
    font-weight: bold;
    display: block;
    font-family: "Ubuntu", sans-serif;
}

#fyp-github-link {
    color: #747474;
}

#fyp-github-link:hover {
    text-decoration: underline;
}

h5 {
    font-family: "Ubuntu", sans-serif;
}

.carousel-indicators li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px 1px 1px 2px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #444;
    border: 1px solid #888;
    border-radius: 10px;
}

.carousel-indicators .active {
    width: 12px;
    height: 12px;
    margin: 0;
    background-color: #fff;
}

.card-title {
    margin-top: 25px;
}

.carousel-caption h3 {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgb(0 0 0 / 60%);
    font-size: 24px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}

.carousel-control-next,
.carousel-control-prev {
    top: 65px;
    bottom: 235px;
}

@media screen and (min-width: 768px) {
    .carousel-indicators {
        bottom: 122px;
    }
}

h4.card-title {
    color: #666;
}

video {
    max-width: 100%;
}

.card {
    border-radius: 10px;
}


.card-body {
    height: 170px;
}

.card-text {
    min-height: 40px;
    line-height: 1.3;
}

@media (max-width: 767px) {
    .carousel {
        margin-bottom: 2.5rem;
    }

    .carousel-indicators {
        bottom: 122px;
    }
}

.carousel-inner img,
.carousel-inner video {
    width: 100%;
    height: 100%;
    aspect-ratio: 670/377;
    object-fit: cover;
    -o-object-fit: cover;
    border-radius: 10px 10px 0px 0px;
}
</style>
