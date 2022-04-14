<template>
 <div id="content" class="mt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="jumbotron col-12 col-md-10">
                    <h1 class="text-center">Search Cocktails by Name</h1>

                    <div class="row">
                        <div class="col-12">
                            <form action="#" id="search-form">
                                <div class="form-group">
                                    <label for="search">Cocktail Name:</label>
                                    <input type="text" class="form-control" id="search" placeholder="Eg. Margarita">
                                </div>
                                <div class="form-group pt-3">
                                    <input type="hidden" id="type" value="name">

                                    <button type="submit" class="btn btn-success d-block">
                                        Get Cocktails
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="col-12 mt-5 results-wrapper" style="display:none;">
                            <h1 class="text-center">Results: <span id="total"></span></h1>
                            <div id="results" class="mt-5 row"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contentComponents'
    }
</script>

<style lang="scss" scoped>

</style>