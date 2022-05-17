<template>
    <div class="col-md-6">
        <div class="card my-3">
            <button type="button" data-id="${elem.idDrink}" class="favorite-btn btn btn-outline-info">
            +
            </button>
            <img class="card-img-top" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">

            <div class="card-body">
                <h2 class="card-title text-center">{{cocktail.strDrink}}</h2>
                <p class="card-text font-weight-bold">Instructions: </p>
                <p class="card-text">
                        {{cocktail.strInstructions}}
                </p>
                <p class="card-text">
                    <ul class="list-group">
                            <li class="list-group-item alert alert-danger">Ingredients</li>
                            ${this.displayIngredients(elem)}
                    </ul>
                </p>
                <p class="card-text font-weight-bold">Extra Information:</p>
                <p class="card-text">
                    <span class="badge badge-pill badge-success">
                            {{cocktail.strAlcoholic}}
                    </span>
                    <span class="badge badge-pill badge-warning">
                            Category:{{cocktail.strCategory}}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'results-components',
    props: {
        cocktail: {
            type: Object,
            default: function () {
                return {}
            }
        }
    }
}
</script>