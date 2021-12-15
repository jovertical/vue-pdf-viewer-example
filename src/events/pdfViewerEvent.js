import Vue from 'vue';

export default new Vue({
    data() {
        return {
            page: 1,
        };
    },

    methods: {
        pageChanged(page) {
            this.page = page;
        },
    },
});
