import Api from "./Api";

export default {
    getResume () {
        return Api().get("resume");
    }
}
