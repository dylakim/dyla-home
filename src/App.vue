<template>
    <div id="app">
        <div id="header">
            <h1><span class="code">&lt;/&gt;</span> the dylas</h1>
        </div>

        <ImageSlider />        
        <People />
        <Cocktails />
    </div>
</template>

<script>
import Cocktails from "./components/Cocktails.vue";
import People from "./components/People.vue";
import ImageSlider from "./components/ImageSlider.vue";

export default {
    name: "App",

    components: {
        Cocktails,
        People,
        ImageSlider,
    },
};
</script>

<style lang="scss">
#header {
    align-content: center;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 15px 20px;
    
    h1 {
        font-size: cRems(24px);
        font-weight: 300;
    }
}
</style>
