<template>
    <div>
        <div class="carousel">
            <VueSlickCarousel v-bind="carouselSettings">
                <div
                    v-for="(slide, index) in imageDetails"
                    :key="index"
                    class="carousel-image"
                >
                    <div
                        class="image-details"
                        :style="{ 'color': slide.labelColor }"
                    >
                        <font-awesome-icon :icon="['fas', 'camera']" />
                        <p>{{ slide.location }}</p>
                    </div>

                    <img
                        :src="require(`@/assets/carousel/${index + 1}.jpg`)"
                        :alt="`Image of ${slide.location}`"
                    >
                </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    components: {
        VueSlickCarousel,
    },

    data () {
        return {
            carouselSettings: {
                autoplay: true,
                autoplaySpeed: 7000,
                arrows: false,
                dots: true,
                fade: true,
            },
            imageDetails: [
                // TODO: get more images for slider
                {
                    location: 'Horsetooth Mountain, Colorado',
                    labelColor: '#fff',
                },
                {
                    location: 'Somewhere, Else',
                    labelColor: '#000',
                },
                {
                    location: 'A cool, Place',
                    labelColor: '#333',
                },
            ],
        };
    },
}
</script>

<style lang="scss">
// Can't be scoped because of slick slider override styles

.carousel {
    position: relative;

    .carousel-image {
        height: cRems(245px);
        overflow: hidden;
        position: relative;

        @include medium {
            height: cRems(360px);
        }

        img {
            display: block;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
        }
    }
    
    .image-details {
        align-items: center;
        display: flex;
        font-weight: 400;
        justify-content: flex-start;
        position: absolute;
        bottom: cRems(20px);
        right: cRems(40px);
        z-index: 2;

        svg {
            margin-right: cRems(10px);
        }

        span {
            @include medium {
                font-size: cRems(16px);
            }
        }

    }
    .slick-dots {
        button:before {
            color: #c5c5c5;
            opacity: 1;
        }
    }
}
</style>