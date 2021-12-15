<template>
    <div id="app" class="flex items-center justify-center h-screen">
        <div class="max-w-full sm:max-w-5xl w-full h-full sm:h-3/4 p-4 sm:p-0">
            <PdfViewer :src="pdfUrl"></PdfViewer>
        </div>
    </div>
</template>

<script>
import PdfViewer from './components/PdfViewer/Viewer.vue';

export default {
    name: 'App',

    components: {
        PdfViewer,
    },

    data() {
        return {
            pdfUrl: '/example.pdf',
        };
    },
};
</script>
