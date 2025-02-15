import Api from "./Api";

export default {
    getResume () {
        return Api().get("getResume");
    },

    updateResume (formInput) {
            return Api().post("updateResume", formInput);
        }
}
