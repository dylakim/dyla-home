<template>
    <div id="app">
        <div id="header">
            <h1><span class="code">&lt;/&gt;</span> the dylas</h1>
        </div>

        <ImageSlider />        
        <People />
        <Cocktails />
        <Footer />
    </div>
</template>

<script>
import Cocktails from "./components/Cocktails.vue";
import Footer from "./components/TheFooter.vue";
import ImageSlider from "./components/ImageSlider.vue";
import People from "./components/People.vue";

export default {
    name: "App",

    components: {
        Cocktails,
        Footer,
        ImageSlider,
        People,
    },
};
</script>

<style lang="scss">
#header {
    align-content: center;
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin: auto;
    max-width: 1440px;
    padding: cRems(20px) cRems(20px);
    
    h1 {
        font-size: cRems(24px);
        font-weight: 300;
    }
}
</style>
