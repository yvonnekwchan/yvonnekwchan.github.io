<template>
    <section id="about" class="about-area section-padding page-section pale-pink">
        <div class="container">
            <div class="row" style="display: flex; justify-content: flex-end">
                <div class="col-lg-7 col-md-12" style="padding-left: 30px; padding-right: 15px;">
                    <div class="about-details">
                        <h2>
                            About
                            <span class="highlight">Me</span>
                        </h2>
                        <p>
                            Hello, I'm Yvonne. I’m a IT Developer who is passionate about
                            Creating something People can interact with, use, and work with. Check out my resume
                            below to know me more!
                        </p>
                        <ul class="about-info">
                            <li>
                                <span>Full name:</span>
                                <span>Chan Ka Wai</span>
                            </li>
                            <li>
                                <span>Graduation year:</span>
                                <span>2021</span>
                            </li>
                            <li>
                                <span>Address:</span>
                                <span>Tuen Mun, Hong Kong</span>
                            </li>
                            <li>
                                <span>Email:</span>
                                <span>yvonnekwchan@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <a id="downloadLink" href="Yvonne Chan - CV.pdf" target="_blank"
                        type="application/octet-stream" download="Yvonne Chan - Resume">
                        <button id="cv-download-btn" type="button" class="btn btn-primary mt-5">
                            <span>Download CV</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-info li {
    display: flex;
    margin-bottom: 15px;
    text-align: -webkit-match-parent;
}

.about-info li span:first-child {
    font-size: 14px;
    font-weight: 600;
    color: #222222;
    width: 130px;
}

.about-details p {
    width: 90%;
    line-height: 1.7em;
}

#portrait {
    max-width: 100%;
    height: auto;
}

#cv-download-btn {
    background: #e6c4bb;
    border-color: #e6c4bb;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    transition: all 0.5s;
    border-radius: 30px;
    padding: 13px 43px;
    display: inline-block;
    padding: 20px 43px;
    border: none;
    text-align: center;
    color: white;
    background: red;
    /* default color */
    /* "to left" / "to right" - affects initial color */
    background: linear-gradient(to left, #e6c4bb 50%, #888888 50%) right;
    background-size: 200%;
    transition: 0.4s linear;
}

#cv-download-btn:hover {
    background-position: left;
}

#cv-download-btn:focus {
    outline: none;
    box-shadow: none;
}
</style>
