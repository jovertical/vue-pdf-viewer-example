<template>
    <div class="w-72 p-3 hidden sm:flex overflow-x-hidden overflow-y-auto">
        <div v-if="!pdf" class="flex items-center justify-center w-full">
            <p class="text-white text-sm">Empty preview</p>
        </div>

        <div v-else class="flex flex-col space-y-3">
            <!-- prettier-ignore -->
            <button
                v-for="page in pages"
                :key="page"
                type="button"
                class="relative group focus:outline-none"
                :class="{
                    'border-2 border-indigo-600': activePage === page,
                }"
                @click="pageChanged(page)"
            >
                <pdf class="inline-block" :src="pdf" :page="page"></pdf>

                <div
                    class="hidden group-hover:flex bg-gray-900 group-hover:opacity-50 absolute inset-0 w-full h-full items-center justify-center"
                >
                    <h4 class="text-2xl text-white">
                        {{ page }}
                    </h4>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import Pdf from 'vue-pdf';
import pdfViewerEvent from '../../events/pdfViewerEvent';

export default {
    components: {
        Pdf,
    },

    props: {
        pages: {
            pages: Array,
            default: () => [],
        },

        pdf: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            activePage: 1,
        };
    },

    mounted() {
        this.registerPageChangedEvent();
    },

    methods: {
        pageChanged(page) {
            if (pdfViewerEvent.isDocumentRendered) {
                pdfViewerEvent.pageChanged(page);
            }
        },

        registerPageChangedEvent() {
            pdfViewerEvent.$on('lazy-page-changed', (page) => {
                this.activePage = page;
            });
        },
    },
};
</script>
