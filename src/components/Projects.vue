<template>
    <section id="projects" class="project-area section-padding page-section pale-pink">
        <h2 style="text-align: center;">My <span class="highlight">Projects</span></h2>
        <div class="container">
            <div class="row grid">
                <!-- Todo List -->
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="card card-post">
                        <div class="card-top position-relative">
                            <RouterLink to="/to-do-list" class="" title="Todo List">
                                <div class="img object-fit overflow-hidden">
                                    <div class="object-fit-cover transform-scale-h">
                                        <img src="https://hrmcdn-13a1c.kxcdn.com/images/hr-sg/content-images/priya-june-2020-patrick-tay-work-from-home-lead-istock.jpg"
                                            alt="Todo List" class="card-top-img">
                                    </div>
                                </div>
                            </RouterLink>
                            <div class="card-category">
                                <a href="#projects" class="btn btn-sm btn-light transform-scale-h border-0"
                                    title="Mobile App">
                                    <span style="vertical-align: inherit;">Mobile App
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="card-body border">
                            <h5 class="card-title">
                                <RouterLink to="/to-do-list" class="display-text" title="Todo List">Todo List
                                    Application</RouterLink>
                            </h5>
                        </div>
                    </div>
                </div>

                <!-- Real Estate Rental System -->
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="card card-post">
                        <div class="card-top position-relative">
                            <RouterLink to="/real-estate-rental-system"  class="" title="Real Estate Rental System">
                                <div class="img object-fit overflow-hidden">
                                    <div class="object-fit-cover transform-scale-h">
                                        <img src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/10/04182006/Main-Picture-scaled.jpg"
                                            alt="Real Estate Rental System" class="card-top-img">
                                    </div>
                                </div>
                            </RouterLink>
                            <div class="card-category">
                                <a href="#projects" class="btn btn-sm btn-light transform-scale-h border-0"
                                    title="Mobile App">
                                    <span style="vertical-align: inherit;">Mobile App
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="card-body border">
                            <h5 class="card-title">
                                <RouterLink to="/real-estate-rental-system" 
                                    class="display-text" title="Real Estate Rental System">Real Estate Rental System</RouterLink>
                                <!-- <a href="/real-estate-rental-system" class="" title="Real Estate Rental System">
                                    <p style="vertical-align: inherit;">Real Estate Rental System</p>
                                </a> -->
                            </h5>
                        </div>
                    </div>
                </div>

                <!-- University Student Admission System -->
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="card card-post">
                        <div class="card-top position-relative">
                            <RouterLink to="/university-student-admission-system" class=""
                                title="University Student Admission System">
                                <div class="img object-fit overflow-hidden">
                                    <div class="object-fit-cover transform-scale-h"><img
                                            src="https://images.unsplash.com/photo-1587301669187-732ea66e7617?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                            alt="University Student Admission System" class="card-top-img"></div>
                                </div>
                            </RouterLink>
                            <div class="card-category">
                                <a href="#projects" class="btn btn-sm btn-light transform-scale-h border-0"
                                    title="Web App">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">Web App
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="card-body border">
                            <h5 class="card-title">
                                <RouterLink to="/university-student-admission-system" 
                                    class="display-text" title="University Student Admission System">University Student
                                    Admission System</RouterLink>
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
.card {
    height: 100%;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: transparent;
    background-clip: border-box;
    border-radius: 0;
}

.card-post {
    background-color: #fff;
    border: 0;
}

.card-post .img,
.card-post .img:hover,
.transition-opacity {
    transition: opacity .3s ease;
}

.card a,
.card a:hover {
    transition: all .3s ease;
}

.card a:hover {
    text-decoration: none;
    opacity: .8;
}

.card-post .img {
    opacity: .34;
}

.card-post .img,
.card-post .img:hover,
.transition-opacity {
    transition: opacity .3s ease;
}

.card-post .img:hover {
    opacity: 1;
}

.img.object-fit {
    position: relative;
}

.img.object-fit:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 100%;
}

.card-post .img.object-fit:before {
    padding-top: 95%;
}

.img.object-fit .object-fit-cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    outline: none;
}

.img.object-fit .object-fit-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
}

.card-post .card-category {
    font-family: 'Ubuntu-Bold', sans-serif;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 0 2.25rem 2.25rem;
}

.card-post .card-category a.btn,
.card-post .card-category a.btn:hover {
    background-color: #fff;
    border-color: #fff;
}

.card-post .card-category a:last-child {
    margin-right: 0;
}

.card-post .card-body {
    padding: 0px 27px;
}

.border {
    border: 1px solid #f3f3f3 !important
}

@media (max-width: 575px) {
    #projects .row>[class*=col-] {
        padding-bottom: 40px;
    }
}

.card-title p {
    color: #555;
    font-size: 16px;
    margin-bottom: 0px !important;
}

.card-title .display-text {
    color: #555;
    font-size: 16px;
    margin-bottom: 0px !important;
}

.card-title {
    margin-top: 25px !important;
    margin-bottom: 25px !important;
}
</style>
