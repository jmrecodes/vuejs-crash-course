<template>
  <div class="container mt-5">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td v-if="post.id <= 5">{{ post.id }}</td>
          <td v-if="post.id <= 5">{{ post.title }}</td>
          <td v-if="post.id <= 5">{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
    data()  {
      return {
        posts: [],
      }
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data;
        })
    }
  }
</script>

<style>

</style>