<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'Header',
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        goToHomeSection() {
            this.$router.push('/');
        }
    },
    mounted() {
        /* Code for changing active 
  link on Scrolling - Top navigation bar*/
        $(window).scroll(function () {
            var distance = $(window).scrollTop();
            $('.page-section').each(function (i) {

                if ($(this).position().top <=
                    distance + 250) {

                    $('.navbar-nav a.active')
                        .removeClass('active');

                    $('.navbar-nav a').eq(i)
                        .addClass('active');
                }
            });
        }).scroll();

        /* Code to make the top navigation bar at fixed position*/
        document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    document.getElementById('navbar_top').classList.add('fixed-top');
                    // add padding top to show content behind navbar
                    var navbar_height = document.querySelector('.navbar').offsetHeight;
                    document.body.style.paddingTop = navbar_height + 'px';
                } else {
                    document.getElementById('navbar_top').classList.remove('fixed-top');
                    // remove padding top from body
                    document.body.style.paddingTop = '0';
                }

                // Add box shadow
                console.log("window.scrollY: " + window.scrollY );
                if (window.scrollY > 200) {
                    $('#navbar_top').css({ "box-shadow": "0 10px 15px rgb(25 25 25 / 10%)" })
                } else {
                    $('#navbar_top').css({ "box-shadow": "none" })
                }
            });
        });
    }
}
</script>

<template>
    <div id="header" class="site-header">
        <div class="main-menu" style="margin-top: 8px">
            <!-- Navigation bar -->
            <div id="topNav">
                <nav id="navbar_top" class="navbar navbar-expand-md navbar-light">
                    <div class="container text-right">
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" @click="scrollToTop(), goToHomeSection()">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#resume">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#projects">Projects</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
.svg-inline--fa {
    height: 1.7em;
}

.main-menu {
    display: block;
}

#navbar_top {
    background-color: #fff;
}

#navbarTogglerDemo03 .nav-item {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 13px;
    padding: 0.05rem 0.5rem;
    line-height: 1.23;
}

#navbarTogglerDemo03 ul li {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: Lora-Regular, sans-serif;
    font-weight: 400;
    color: #747474;
    margin-top: 0;
    text-align: -webkit-match-parent;
    line-height: 1.23;
    list-style: none;
}

.fa-bars {
    color: #929191;
}

.bar-Icon {
    padding-right: 5%;
}

#navbar-container {
    width: 100%;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
}

.text-right {
    justify-content: end;
}

.navbar-light .navbar-toggler {
    color: #929191;
    border: none;
    font-size: inherit;
}

.navbar-light .navbar-toggler:focus {
    outline: none;
}
</style>
