<template>
  <div id="content" class="mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="jumbotron col-12 col-md-10">
          <h1 class="text-center">Search Cocktails by Alcohol / Non Alcohol</h1>
          <div class="row">
            <div class="col-12">
              <form action="#" id="search-form">
                <div class="form-group mt-4">
                  <select class="form-control search-alcohol" id="search">
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">Non Alcoholic</option>
                  </select>
                </div>
                <div class="form-group pt-3">
                  <input type="hidden" id="type" value="alcohol" />
                  <button type="submit" class="btn btn-success d-block">
                    Get Cocktails
                  </button>
                </div>
              </form>
            </div>

            <div class="col-12 mt-5 results-wrapper" style="display: none">
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
    name: 'AlcoholComponents',
  }
</script>

<style lang="scss" scoped></style>
