<script setup>
</script>

<template>
    <section id="projectDesc" class="page-section bg-half-ring-right bg-half-ring-top" style="margin-top: 30px;">
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-7 col-md-12">
                   <img src="../assets/todo_list_app_mockup.png" alt="Todo List Application" width="100%"/>
                   <div class="d-block d-lg-none" style="position: static; margin-bottom: 20px"></div>
                </div>

                <div class="col-lg-5">
                    <h3 class="small">
                        Todo List Application
                    </h3>
                    <p class="project-description">
                        Todo List Application is a mobile application which allows user to organize their tasks.
                    </p>
                    <h5>Technologies used</h5>
                    <ul class="technologies">
                        <li>
                            <span>Programming language(s): &nbsp;</span>JavaScript
                        </li>
                        <li>
                            <span>Front-end Framework: &nbsp;</span>React Native
                        </li>
                        <li>
                            <span>Database: &nbsp;</span>Firebase
                        </li>
                    </ul>
                    <h5>Time to develop</h5>
                    <ul>
                        <li>5 months</li>
                    </ul>
                    <h5>More Details</h5>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/yvonnekwchan/to-do-list-application"
                                target="_blank"
                                id="github-link"
                            >https://github.com/yvonnekwchan/to-do-list-application</a>
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

#github-link {
    color: #747474;
}

#github-link:hover {
    text-decoration: underline;
}

h5 {
    font-family: "Ubuntu", sans-serif;
}
</style>
