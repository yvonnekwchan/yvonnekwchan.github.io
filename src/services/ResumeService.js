import Api from "./Api";

export default {
    getResume() {
        return Api().get("getResume");
    },

    updateResume(formInput) {
        return Api().post("updateResume", formInput);
    },

    addResume(formInput) {
        return Api().post("addResume", formInput);
    },

    deleteResume(formInput) {
        return Api().post("deleteResume", formInput);
    }
}
