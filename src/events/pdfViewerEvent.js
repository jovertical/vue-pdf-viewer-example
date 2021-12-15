import Vue from 'vue';

export default new Vue({
    data() {
        return {
            page: 1,
            lazyPage: 1,
            isDocumentRendered: false,
        };
    },

    methods: {
        pageChanged(page) {
            this.page = page;
            this.lazyPage = page;

            this.$emit('page-changed', page);
        },

        lazyPageChanged(page) {
            this.lazyPage = page;

            this.$emit('lazy-page-changed', page);
        },

        documentRendered() {
            this.isDocumentRendered = true;

            this.$emit('document-rendered');
        },

        print() {
            this.$emit('printed');
        },
    },
});
