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
            pages: Array,
            default: () => [],
        },

        src: {
            type: [String, Object],
            required: true,
        },
    },

    components: {
        Pdf,
    },

    mounted() {
        pdfViewerEvent.$on('pageChanged', (page) => {
            this.focusPage(page);
        });
    },

    methods: {
        focusPage(page) {
            if (!this.$refs['container']) {
                return;
            }

            // prettier-ignore
            this.$refs['container'].scrollTo(
                0,
                (page === 1 ? 1 : page - 1) * (this.$refs.page[0]?.$el?.clientHeight + 12),
            );
        },
    },
};
</script>
