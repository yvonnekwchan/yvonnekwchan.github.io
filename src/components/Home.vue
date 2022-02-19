<template>
     <section id="home" class="page-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 col-lg-9 col-md-12" style="margin-bottom: 125px; margin-left: 15px;">
                        <span class="subheading">Hey! I am</span>
                        <div class="title">
                            <h1>Yvonne Chan<span class="dot">.</span></h1>
                            <div class="title-clone">Yvonne</div>
                        </div>
                        <p class="p-large">I’m a IT developer and here is my portfolio. Have a
                            look.</p>
                    </div>
                    <div class="col-xl-1 col-lg-2 d-flex">
                        <div class="align-self-end p-left-scroll ml-auto mt-2 mt-lg-0 d-none d-lg-block">
                            <a title="scroll" href="#about" class="btn btn-link btn-vertical transform-scale-h border-0 p-0 scroll-to-id d-flex">
                                <span class="vertical-text"><span><p style="vertical-align: inherit;">S</p></span>
                                <span><p style="vertical-align: inherit;">c</p></span>
                                <span><p style="vertical-align: inherit;">r</p></span>
                                <span><p style="vertical-align: inherit;">o</p></span>
                                <span><p style="vertical-align: inherit;">l</p></span>
                                <span><p style="vertical-align: inherit;">l</p></span></span>
                                <span class="align-self-end"><i class="fas fa-long-arrow-down"></i></span>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
.subheading {
    font-family: 'Roboto', serif;
}
.p-large {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
   font-family: 'Roboto', serif;
    font-weight: 400;
    color: #747474;
    text-align: left;
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.75;
    width: 75% !important;
    font-size: 20px;
    margin-bottom: 0;
}

/* #region - scroll button */
.p-left-scroll {
    margin-left: 17.5%;
    margin-bottom: -0.1rem;
    width: auto;
}

.align-self-end {
    -ms-flex-item-align: end!important;
    align-self: flex-end!important;
}

.btn-vertical p {
    margin-top: 0;
    margin-bottom: 5px;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.btn-link,
.btn-link:hover {
    color: #2b2b2b;
    text-decoration: none;
}

.fa-arrow-down-long {
    font-size: .63rem;
    margin-left: 0.63rem;
    color: #2b2b2b
}
/* #endregion */
</style>
