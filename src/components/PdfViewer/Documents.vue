<template>
    <div class="flex-1 overflow-y-scroll">
        <div class="p-3 sm:p-4 flex flex-col space-y-3 sm:space-y-4">
            <pdf
                v-for="page in pages"
                :key="page"
                class="inline-block"
                :src="src"
                :page="page"
            ></pdf>
        </div>
    </div>
</template>

<script>
import Pdf from 'vue-pdf';

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
};
</script>
