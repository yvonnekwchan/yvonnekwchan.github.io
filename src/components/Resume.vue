<script setup>
import ResumeWrap from './ResumeWrap.vue'
import { RouterLink, RouterView } from 'vue-router'
import ResumeService from '../services/ResumeService';
</script>

<script>
export default {
    name: 'Resume',
    data() {
        return {
            educationObj: {},
            experienceObj: {}
        }
    },
    methods: {
        async getResume() {
            const response = await ResumeService.getResume()

            if (response.data && response.data.length > 0) {
                this.educationObj = response.data.filter(d => d.classification === 'education').sort((a, b) => {
                    if (a.date < b.date) {
                        return 1;
                    }
                });
                this.experienceObj = response.data.filter(d => d.classification === 'experience').sort((a, b) => {
                    if (a.date < b.date) {
                        return 1;
                    }
                });
            } else {
                console.log("No data found");
            }
        }
    },
    mounted() {
        this.getResume();
        var naviBtns =
            $("#navi .nav .nav-link");

        for (var i = 0; i < naviBtns.length; i++) {
            naviBtns[i].addEventListener("click",
                function () {
                    var current = document
                        .getElementsByClassName("active");

                    current[0].className = current[0]
                        .className.replace(" active", "");

                    this.className += " active";
                });
        }

        /* Code for changing active 
        link on Scrolling - Resume section side bar*/
        $(window).scroll(function () {
            var dist = $(window).scrollTop();
            $('.resume-section').each(function (j) {

                if ($(this)[0].getBoundingClientRect().top + $(window)['scrollTop']() <= dist + 250) {

                    $('.nav a.active')
                        .removeClass('active');

                    $('.nav a').eq(j)
                        .addClass('active');
                }
            });
        });
    }
}
</script>

<template>
    <section id="resume" class="resume-area section-padding page-section">
        <div class="container">
            <h2>
                My
                <span class="highlight">Resume</span>
            </h2>
            <div class="row">
                <div class="col-lg-3 d-none d-lg-block">
                    <nav id="navi" class="nav flex-column">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" href="#page-1">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#page-2">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#page-3">Skills</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col-lg-9 col-md-12">
                    <div id="page-1" class="page one resume-section">
                        <h3 class="heading">Education</h3>
                        <div v-for="item in educationObj" :key="item._id">
                            <ResumeWrap :id="item._id" :position="item.position" :organization="item.organization" :period="item.period" :description="item.description">  
                                <template #icon>
                                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                </template>
                                <template #date>{{ item.period }}</template>
                                <template #position>{{ item.position }}</template>
                                <template #organization>
                                    {{ item.organization }}
                                </template>
                                <template #description>
                                    {{ item.description }}
                                </template>
                            </ResumeWrap>
                        </div>
                    </div>

                    <div id="page-2" style="padding-top: 50px;" class="page two resume-section">
                        <h3 class="heading">Experience</h3>
                        <div v-for="item in experienceObj" :key="item._id">
                            <ResumeWrap>
                                <template #icon>
                                    <i class="fa-solid fa-briefcase"></i>
                                </template>
                                <template #date>{{ item.period }}</template>
                                <template #position>{{ item.position }}</template>
                                <template #organization>
                                    {{ item.organization }}
                                </template>
                                <template #description>
                                    {{ item.description }}
                                </template>
                            </ResumeWrap>
                        </div>
                    </div>

                    <div id="page-3" style="padding-top: 50px;" class="page three resume-section">
                        <h3 class="heading">Skills</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>Node.js</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:70%">
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>Java</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:85%">
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>HTML5 & CSS3</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:95%">
                                            <span>95%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>React.js</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:60%">
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>JavaScript</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:70%">
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>Python</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:65%">
                                            <span>65%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>Tableau</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:90%">
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h5>SQL</h5>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:95%">
                                            <span>95%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#navi li a {
    color: #000000;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
}

#navi li a.active {
    color: #e4ccc0;
    margin-left: 20px;
    /*like insert a tab*/
    position: relative;
}

#navi li a.active::after {
    /*a bullet*/
    position: absolute;
    top: 50%;
    left: -24px;
    width: 20px;
    height: 2px;
    content: "";
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #e4ccc0;
}

#navi {
    top: 180px;
    position: -webkit-sticky;
    position: sticky;
    margin: 0;
    font-family: "Roboto", sans-serif;
    color: #777777;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.625em;
}

#navi li {
    font-weight: 700;
    margin-bottom: 10px;
}

.page {
    width: 100%;
    font-family: "Roboto", sans-serif;
    color: #777777;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.625em;
}

.page .heading {
    font-weight: 700;
    margin-bottom: 30px;
}

.fa-graduation-cap {
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
}

.progress-wrap {
    width: 100%;
    margin-bottom: 30px;
}

.progress-wrap h5 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 500;
}

.progress-bar span {
    position: absolute;
    top: -38px;
    right: 0;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
}

.progress {
    height: 6px;
    background: #e6e6e6;
    overflow: visible;
}

.progress-bar {
    background: #caa3a2;
    position: relative;
    font-size: 12px;
    line-height: 1.2;
    color: #000000;
    font-weight: 600;
    position: relative;
    overflow: visible;
    border-radius: 2px;
}

/* .progress-bar::after {
    position: absolute;
    top: -2px;
    right: 0;
    width: 10px;
    height: 10px;
    content: "";
    background: #caa3a2;
    border-radius: 50%;
} */
</style>
