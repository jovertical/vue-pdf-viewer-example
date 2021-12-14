<template>
    <div id="app" class="flex items-center justify-center h-screen">
        <div class="max-w-full sm:max-w-5xl w-full h-full sm:h-2/3 p-4 sm:p-0">
            <PdfViewer></PdfViewer>
        </div>
    </div>
</template>

<script>
import PdfViewer from './components/PdfViewer/Viewer.vue';

export default {
    name: 'App',
    components: { PdfViewer },
};
</script>
