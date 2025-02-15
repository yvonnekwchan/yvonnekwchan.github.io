<script setup>
import ResumeService from '../services/ResumeService';
</script>

<script>
export default {
    props: { id: Number, position: String, organization: String, period: String, description: String },
    data() {
        return {
            positionInput: this.position, // Initialize with prop value
            organizationInput: this.organization,
            periodInput: this.period,
            descriptionInput: this.description,
            inEditMode: false
        }
    },
    methods: {
        switchToEditMode() {
            this.inEditMode = true;
            console.log("Switched to edit mode.")
        },
        backToViewOnlyMode() {
            this.inEditMode = false;
            console.log("Switched to view-only mode.")
        },
        async updateResume() {
            const response = await ResumeService.updateResume({
                id: this.id,
                position: this.positionInput, 
                organization: this.organizationInput,
                period: this.periodInput,
                description: this.descriptionInput,
            })

            console.log("Message: " + response.data.message);

            if (response.status === 200) {
                this.backToViewOnlyMode();
                //window.location.reload(); // refresh the page
            } else {
                alert("Alert: " + response.data.message);
            }
        },
    }
}
</script>

<template>
    <div class="resume-wrap" :class="{ 'view-only-mode': !inEditMode, 'edit-mode': inEditMode }">
        <div class="card-title" :class="{ 'edit-mode': inEditMode }">
            <a @click="switchToEditMode()"><i class="fa-regular fa-pen-to-square"></i></a>
        </div>
        <div class="transition d-flex" style="margin-top: 10px;">
            <div class="icon d-flex align-items-center justify-content-center">
                <span>
                    <slot name="icon"></slot>
                </span>
            </div>

            <div class="text pl-3">
                <form @submit.prevent="login">
                    <div>
                        <span class="date card-text" :class="{ 'edit-mode': inEditMode }">
                            <slot name="date"></slot>
                        </span>

                        <div class="form-floating mb-3 resume-wrap-input" :class="{ 'view-only-mode': !inEditMode }">
                            <input type="text" class="form-control" id="" v-model="periodInput" required>
                            <label for="floatingInput">Period</label>
                        </div>
                    </div>

                    <div>
                        <h4 class="position card-text" :class="{ 'edit-mode': inEditMode }">
                            <slot name="position"></slot>
                        </h4>

                        <div class="form-floating mb-3 resume-wrap-input" :class="{ 'view-only-mode': !inEditMode }">
                            <input type="text" class="form-control" id="" v-model="positionInput" required>
                            <label for="floatingInput">Position</label>
                        </div>
                    </div>

                    <div>
                        <span class="organization card-text" :class="{ 'edit-mode': inEditMode }">
                            <slot name="organization"></slot>
                        </span>

                        <div class="form-floating mb-3 resume-wrap-input" :class="{ 'view-only-mode': !inEditMode }">
                            <input type="text" class="form-control" id="" v-model="organizationInput" required>
                            <label for="floatingInput">Organization</label>
                        </div>
                    </div>

                    <div>
                        <p class="description card-text" :class="{ 'edit-mode': inEditMode }">
                            <slot name="description"></slot>
                        </p>

                        <div class="form-floating mb-3 resume-wrap-input" :class="{ 'view-only-mode': !inEditMode }">
                            <textarea type="text" class="form-control" id="" v-model="descriptionInput"
                                required></textarea>
                            <label for="floatingInput">Work Description</label>
                        </div>
                    </div>
                    <div class="action-button-group" :class="{ 'view-only-mode': !inEditMode }">
                        <button type="submit" @click="updateResume()" class="btn btn-link">Save</button>
                        <button type="button" @click="backToViewOnlyMode()" class="btn btn-link">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.action-button-group {
    display: flex;
}

.action-button-group.view-only-mode {
    display: none;
}

.action-button-group button.btn-link {
    color: #e6c4BB;
    text-transform: uppercase;
    font-weight: bold;
}

textarea.form-control {
    min-height: 130px;
}

input,
textarea {
    border-color: #f2f2f2;
}

.resume-wrap-input.view-only-mode {
    display: none;
}

.card-title.edit-mode {
    opacity: 40%;
}

.resume-wrap {
    width: 100%;
    margin-bottom: 30px;
    background-color: rgb(255, 249, 247);
    padding: 30px 30px 40px 30px;
    border-radius: 10px;
}

.resume-wrap.edit-mode {
    background-color: #f9f9f9;
}

.resume-wrap.view-only-mode:hover {
    background: #e6c4BB;
    color: #ffffff;
}

.resume-wrap.view-only-mode:hover .card-title .svg-inline--fa {
    color: #fff
}

.resume-wrap.view-only-mode:hover h4,
.resume-wrap.view-only-mode:hover .date {
    color: #fff;
}

.resume-wrap.view-only-mode:hover .icon span {
    color: #e6c4bb !important;
}

.resume-wrap.view-only-mode:hover .icon {
    background: #fff;
}

.resume-wrap.edit-mode .icon {
    background-color: #fff;
}

.resume-wrap.edit-mode .icon span {
    color: #eaccc0;
}

.resume-wrap .date {
    font-weight: 700;
    font-size: 16px;
    color: #222222;
}

.resume-wrap .card-text.edit-mode {
    display: none;
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
    width: 100%;
    padding: 0 0 10px;
}

.resume-wrap .icon {
    min-width: 50px;
    max-height: 50px;
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
