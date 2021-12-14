<template>
    <div class="w-72 hidden sm:flex overflow-y-auto">
        <div class="p-3 flex flex-col space-y-3">
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
