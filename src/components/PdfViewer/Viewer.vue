<template>
    <div class="overflow-hidden w-full h-full bg-gray-800 rounded-md">
        <Toolbar :page-count="pages"></Toolbar>

        <div class="mt-1.5 h-full w-full flex sm:space-x-4">
            <DocumentPreviews v-bind="{ src, pages }"></DocumentPreviews>
            <Documents v-bind="{ src, pages }"></Documents>
        </div>
    </div>
</template>

<script>
import Pdf from 'vue-pdf';
import DocumentPreviews from './DocumentPreviews.vue';
import Documents from './Documents.vue';
import Toolbar from './Toolbar.vue';

export default {
    components: {
        Documents,
        DocumentPreviews,
        Toolbar,
    },

    data() {
        return {
            src: 'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK',
            pages: 0,
        };
    },

    mounted() {
        this.loadPdf();
        this.loadPages();
    },

    methods: {
        loadPdf() {
            this.src = Pdf.createLoadingTask(
                'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK',
            );
        },

        loadPages() {
            this.src.promise.then((pdf) => {
                this.pages = pdf.numPages;
            });
        },
    },
};
</script>
