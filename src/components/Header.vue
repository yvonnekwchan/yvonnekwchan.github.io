<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'Header',
    methods: {
        openMenu() {
            document.getElementById('menu').style.display = 'block'

            document.getElementById('bar1').style.display = 'none'

            document.getElementById('bar2').style.display = 'block'
        },
        closeMenu() {
            document.getElementById('menu').style.display = 'none'

            document.getElementById('bar2').style.display = 'none'

            document.getElementById('bar1').style.display = 'block'
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        goToPricing() {
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
                var top = document.getElementById("about").getBoundingClientRect().top;
                var marginTop = parseInt($('#about').css("marginTop").replace('px', ''))
                if (window.scrollY > top + marginTop) {
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
            <!-- Navigation bar for extra large -->
            <div id="topNav" class="d-none d-lg-block">
                <nav
                    id="navbar_top"
                    style="width: 100%;"
                    class="navbar navbar-expand-lg navbar-light"
                >
                    <div class="container">
                        <div class="navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" @click="scrollToTop(), goToPricing()">Home</a>
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
                    </div>
                </nav>
            </div>

            <!-- Navigation bar for Large -->
            <div id="topNav" class="d-block d-lg-none">
                <div id="navbar-container">
                    <div class="bar-Icon">
                        <div id="bar1" class="text-right">
                            <button id="barBtn1" @click="openMenu">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div id="bar2" class="text-right">
                            <button id="barBtn2" @click="closeMenu">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <nav id="menu" class="navbar navbar-expand-lg navbar-light">
                        <div class="container">
                            <div class="navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" @click="scrollToTop()">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#resume">Resume</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#projects">Projects</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-menu {
    display: block;
}

.site-header {
    margin-bottom: 55px;
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

/* #region - Navigation bar for Large */

#menu {
    display: none;
}

#barBtn1,
#barBtn2 {
    outline: none;
    border: none;
    background: transparent;
}

#bar2 {
    display: none;
}

.fa-bars {
    color: #929191;
}

.bar-Icon {
    padding-right: 5%;
}

#navbar-container {
    width: 100%;
    background-color: #f7f7f7;
    padding-top: 10px;
    padding-bottom: 10px;
}

/* #endregion */
</style>
