<template>
    <div
        class="flex justify-between bg-gray-700 border border-gray-600 p-2 sm:px-4 sm:py-3 rounded-t-md"
    >
        <PageControl :count="pageCount"></PageControl>

        <div class="hidden sm:flex space-x-3">
            <button type="button" class="focus:outline-none">
                <ZoomInIcon
                    class="w-6 h-6 text-white hover:text-gray-200"
                ></ZoomInIcon>
            </button>

            <button type="button" class="focus:outline-none">
                <ZoomOutIcon
                    class="w-6 h-6 text-white hover:text-gray-200"
                ></ZoomOutIcon>
            </button>
        </div>

        <button type="button" class="focus:outline-none">
            <PrinterIcon
                class="w-5 sm:w-5 h-5 sm:h-5 text-white hover:text-gray-200"
            ></PrinterIcon>
        </button>
    </div>
</template>

<script>
import { ZoomInIcon, ZoomOutIcon, PrinterIcon } from '@vue-hero-icons/outline';
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
};
</script>
