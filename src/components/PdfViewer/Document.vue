<template>
    <div ref="container" class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="p-3 flex flex-col space-y-3 sm:space-y-4">
            <pdf
                v-for="page in pages"
                :key="page"
                ref="page"
                class="inline-block"
                :src="src"
                :page="page"
                @page-loaded="pageLoaded"
            ></pdf>
        </div>
    </div>
</template>

<script>
import Pdf from 'vue-pdf';
import pdfViewerEvent from '../../events/pdfViewerEvent';

export default {
    props: {
        pages: {
            pages: Number,
            required: true,
        },

        src: {
            type: [String, Object],
            required: true,
        },
    },

    components: {
        Pdf,
    },

    data() {
        return {
            ready: false,
        };
    },

    computed: {
        pageHeight() {
            return this.$refs.page[0]?.$el?.clientHeight ?? 1;
        },
    },

    mounted() {
        this.registerPageChangedListener();
        this.trackCurrentPage(this.$refs.container);
    },

    beforeDestroy() {
        // Delete container.onscroll listener...
    },

    methods: {
        pageLoaded(page) {
            pdfViewerEvent.documentRendered(page === this.pages);
        },

        scrollTo(position) {
            this.$refs.container?.scrollTo?.(0, position);
        },

        focusPage(page) {
            let pageHeight = page === 1 ? 0 : this.pageHeight + 12;

            this.scrollTo((page - 1) * pageHeight);
        },

        registerPageChangedListener() {
            pdfViewerEvent.$on('page-changed', (page) => {
                this.focusPage(page);
            });
        },

        trackCurrentPage(container) {
            if (!container) {
                return;
            }

            container.onscroll = (event) => {
                if (!pdfViewerEvent.isDocumentRendered) {
                    return event.preventDefault();
                }

                // prettier-ignore
                let page = Math.floor(event.target.scrollTop / (this.pageHeight + 12)) + 1;

                pdfViewerEvent.lazyPageChanged(page);
            };
        },
    },
};
</script>
