<template>
    <div class="flex items-center">
        <input
            v-model="page"
            type="text"
            class="hidden sm:block h-6 w-10 text-sm px-1.5 rounded-sm bg-gray-700 text-white border-gray-500 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 disabled:cursor-not-allowed"
            :disabled="disabled"
        />

        <p class="ml-2 text-white text-sm">
            <span class="sm:hidden mr-1">{{ page }}</span>
            <span>/ {{ count }}</span>
        </p>
    </div>
</template>

<script>
import pdfViewerEvent from '../../events/pdfViewerEvent';

export default {
    props: {
        count: {
            type: Number,
            default: 1,
        },

        disabled: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            page: 1,
        };
    },

    watch: {
        page(page) {
            if (page !== pdfViewerEvent.lazyPage) {
                pdfViewerEvent.pageChanged(page || 1);
            }
        },
    },

    created() {
        this.page = pdfViewerEvent.page;
    },

    mounted() {
        this.registerLazyPageChangedListener();
    },

    methods: {
        registerLazyPageChangedListener() {
            pdfViewerEvent.$on('lazy-page-changed', (page) => {
                this.page = page;
            });
        },
    },
};
</script>
