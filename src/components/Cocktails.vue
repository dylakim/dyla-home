<template>
    <div
        v-if="cocktail"
        class="cocktail-section"
    >
        <div class="cocktail-content">
            <div class="section-description">
                <h2>A Random Cocktail</h2>
                <p>Why? Because we like cocktails 🍸</p>
            </div>

            <div class="cocktail">
                <div class="cocktail__thumbnail">
                    <img
                        :src="cocktail.strDrinkThumb"
                        :alt="cocktail.strDrink"
                    >
                </div>
                
                <div class="cocktail__details">
                    <h3>{{ cocktail.strDrink }}</h3>
                    <p>Serve in a {{ cocktail.strGlass }}</p>

                    <h4>Ingredients</h4>
                    <ul>
                        <li
                            v-for="ingredient in ingredientsList"
                            :key="ingredient"
                        >
                            {{ ingredient }}
                        </li>
                    </ul>

                    <p>{{ cocktail.strInstructions }}</p>
                </div>
            </div>
        </div>

        <p class="provided-by">
            Random cocktail data provided by <a href="https://www.thecocktaildb.com/" target="_blank">TheCocktailDB</a>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            cocktail: null,
            ingredientsList: [],
        };
    },

    created () {
        this.getCocktail();
    },

    methods: {
        async getCocktail () {
            try {
                const { data: { drinks } } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                this.cocktail = drinks[0];
                this.getIngredients();
            }
            catch (err) {
                console.error(err);
            }
        },

        getIngredients () {
            const ingredientRegex = /strIngredient/gm;
            this.ingredientsList = Object.keys(this.cocktail).reduce((arr, key) => {
                if (ingredientRegex.test(key) && this.cocktail[key]) {
                    const measure = this.cocktail[`strMeasure${key.replace(ingredientRegex, '')}`] || '';
                    return arr.concat(`${measure} ${this.cocktail[key]}`);
                }
                return arr;
            }, []);
        }
    }
}
</script>

<style lang="scss">
.cocktail-section {
    background: #ececec;
    clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0 100%);
    padding: cRems(130px) cRems(40px);

    @include medium {
        clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);
        padding: cRems(150px) cRems(40px);
    }

    h2 {
        font-size: cRems(40px);
        padding-bottom: cRems(20px);
    }

    h3 {
        font-size: cRems(32px);
        padding-bottom: cRems(20px);
    }

    h4 {
        font-size: cRems(20px);
        margin-top: cRems(10px);
        padding-bottom: cRems(15px);
    }

    li, p {
        font-size: cRems(16px);
        line-height: 1.5;
    }

    ul {
        list-style: disc;
        margin-bottom: cRems(15px);
        margin-left: cRems(25px);
    }

    li {
        padding-bottom: cRems(5px);
    }

    p {
        padding-bottom: cRems(15px);

        &.provided-by {
            font-size: cRems(14px);
            font-style: italic;
            font-weight: 400;
            margin-top: cRems(40px);
        }
    }
    
    .section-description {
        margin-bottom: cRems(40px);

        @include medium {
            margin-bottom: cRems(60px);
        }
    }

    .cocktail-content {
        margin: auto;
        max-width: cRems(1100px);
    }

    .cocktail {
        @include medium {
            display: flex;
            justify-content: center;
        }

        &__thumbnail {
            padding: 0 cRems(60px);

            @include medium {
                flex: 0 0 cRems(400px);
                margin-right: cRems(40px);
                padding: 0;
            }

            img {
                display: block;
                max-width: 100%;
            }
        }

        &__details {
            margin-top: cRems(40px);
            padding: 0 cRems(60px);
            text-align: left;

            @include medium {
                margin: 0;
                padding: 0;
            }
        }
    }
}

</style>