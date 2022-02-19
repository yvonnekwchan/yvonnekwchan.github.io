<template>
   <div class="resume-wrap transition d-flex">
        <div class="icon d-flex align-items-center justify-content-center">
            <span>
                <slot name="icon"></slot>
            </span>
        </div>

        <div class="text pl-3">
            <span class="date">
                <slot name="date"></slot>
            </span>

            <h4 class="position">
                <slot name="position"></slot>
            </h4>

            <span class="organization">
                <slot name="organization"></slot>
            </span>

            <p class="description">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<style scoped>
.resume-wrap {
    width: 100%;
    margin-bottom: 30px;
    background-color: rgb(255, 249, 247);
    padding: 40px 30px;
    border-radius: 10px;
}

.resume-wrap:hover {
    background: #e6c4BB;
    color: #ffffff;
}

.resume-wrap:hover h4,
.resume-wrap:hover .date {
    color: #fff;
}

.resume-wrap:hover .icon {
    background: #fff;
}

.resume-wrap .date {
    font-weight: 700;
    font-size: 16px;
    color: #222222;
}

.resume-wrap .organization {
    display: inline-block;
    margin-bottom: 10px;
}

.resume-wrap h4 {
    font-size: 20px;
    font-weight: 700;
}

.resume-wrap .text {
    width: calc(100% - 100px);
    padding: 0 0 10px;
}

.resume-wrap .icon {
    width: 50px;
    height: 50px;
    background: #eaccc0;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: #eaccc0;
    border-radius: 50%;
}

.resume-wrap .icon span {
    color: #fff;
    font-size: 20px;
}

</style>
