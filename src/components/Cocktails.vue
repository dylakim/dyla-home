<template>
    <div
        v-if="cocktail"
        class="cocktail-section"
    >
        <div class="cocktail-content">
            <div class="section-description">
                <h1>A Random Cocktail</h1>
                <p>Why? Because we like cocktails 🍸</p>
            </div>

            <div class="cocktail">
                <div class="cocktail__thumbnail">
                    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
                </div>
                
                <div class="cocktail__details">
                    <h2>{{ cocktail.strDrink }}</h2>
                    <p>Serve in a {{ cocktail.strGlass }}</p>

                    <h3>Ingredients</h3>
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
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                cocktail: {},
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
                Object.keys(this.cocktail).forEach(key => {
                    if (key.match(ingredientRegex) && this.cocktail[key]) {
                        const measure = this.cocktail[`strMeasure${key.replace(ingredientRegex, '')}`] || '';
                        this.ingredientsList.push(`${measure} ${this.cocktail[key]}`);
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
.cocktail-section {
    background: $gray2021;
    padding: cRems(30px) 0;

    h1 {
        padding-bottom: cRems(20px);
    }

    h2 {
        color: $yellow2021;
        font-size: cRems(42px);
        padding-bottom: cRems(20px);
    }

    h3, li, p {
        color: white;
    }

    h3 {
        font-size: cRems(24px);
        padding-bottom: cRems(15px);
    }

    li, p {
        font-size: cRems(20px);
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
    }
    
    .section-description {
        margin-bottom: cRems(60px);
    }

    .cocktail-content {
        margin: cRems(100px) auto;
        max-width: cRems(1100px);
    }

    .cocktail {
        display: flex;

        &__thumbnail {
            flex-basis: cRems(400px);
            margin-right: cRems(40px);

            img {
                display: block;
                max-width: 100%;
            }
        }

        &__details {
            text-align: left;
        }
    }
}

</style>