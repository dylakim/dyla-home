<template>
    <footer>
        <p class="divider">&lt;/&gt;</p>
        <p>View source code on <a href="https://github.com/dylakim/dyla-home" target="_blank">GitHub</a></p>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    footer {
        padding: cRems(60px) 0;

        p {
            font-size: cRems(14px);

            &.divider {
                padding-bottom: cRems(20px);
            }
        }
    }
</style>