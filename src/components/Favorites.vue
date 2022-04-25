<template>
  <div>
    <h1 class="text-center mb-4">{{ heading }}</h1>
    <div class="row">
      <div class="col-12">
        <table id="favorites" class="table table-light">
          <thead class="bg-danger">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">View</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FavoritesComponents',
    props: {
      heading: {
        type: String,
      },
    },
  }
</script>

<style lang="scss" scoped></style>
