<template>
    <div
        class="flex justify-between bg-gray-700 border border-gray-600 p-2 sm:px-4 sm:py-3 rounded-t-md"
    >
        <PageControl
            :count="pageCount"
            :disabled="!documentRendered"
        ></PageControl>

        <div class="hidden sm:flex space-x-3">
            <button
                type="button"
                class="text-white hover:text-gray-200 focus:outline-none disabled:text-gray-500 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
                disabled
            >
                <ZoomInIcon class="w-6 h-6"></ZoomInIcon>
            </button>

            <button
                type="button"
                class="text-white hover:text-gray-200 focus:outline-none disabled:text-gray-500 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
                disabled
            >
                <ZoomOutIcon class="w-6 h-6"></ZoomOutIcon>
            </button>
        </div>

        <button
            type="button"
            class="text-white hover:text-gray-200 focus:outline-none disabled:text-gray-500 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
            @click="print"
            :disabled="!documentRendered"
        >
            <PrinterIcon class="w-5 sm:w-6 h-5 sm:h-6"></PrinterIcon>
        </button>
    </div>
</template>

<script>
import { ZoomInIcon, ZoomOutIcon, PrinterIcon } from '@vue-hero-icons/outline';
import pdfViewerEvent from '../../events/pdfViewerEvent';
import PageControl from './PageControl.vue';

export default {
    components: {
        PageControl,
        ZoomInIcon,
        ZoomOutIcon,
        PrinterIcon,
    },

    props: {
        pageCount: {
            type: Number,
            default: 1,
        },
    },

    computed: {
        documentRendered() {
            return pdfViewerEvent.isDocumentRendered;
        },
    },

    methods: {
        print() {
            pdfViewerEvent.print();
        },
    },
};
</script>
