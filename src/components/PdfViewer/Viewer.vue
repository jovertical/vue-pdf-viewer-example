<template>
    <div class="overflow-hidden w-full h-full bg-gray-800 rounded-md">
        <template v-if="ready && !error">
            <Toolbar :page-count="pages"></Toolbar>

            <div class="mt-1.5 h-full w-full flex sm:space-x-4">
                <DocumentPreviews v-bind="{ pdf, pages }"></DocumentPreviews>
                <Document v-bind="{ pdf, pages }"></Document>
            </div>
        </template>

        <div v-else class="flex w-full h-full items-center justify-center">
            <span>
                <svg
                    class="animate-spin h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
import Pdf from 'vue-pdf';
import DocumentPreviews from './DocumentPreviews.vue';
import Document from './Document.vue';
import Toolbar from './Toolbar.vue';

export default {
    components: {
        Document,
        DocumentPreviews,
        Toolbar,
    },

    props: {
        src: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            pdf: null,
            pages: 0,
            ready: false,
            error: false,
        };
    },

    mounted() {
        this.loadPdf();
        this.loadPages();
    },

    methods: {
        loadPdf() {
            this.pdf = Pdf.createLoadingTask(this.src);
        },

        loadPages() {
            this.pdf.promise
                .then((pdf) => {
                    this.pages = pdf.numPages;
                    this.ready = true;
                })
                .catch(() => {
                    this.error = true;
                });
        },
    },
};
</script>
