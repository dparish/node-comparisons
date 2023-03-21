<template>
  <div>
    <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
    <div v-else>
      <div class="d-flex justify-end mb-4">
        <v-btn :to="{ name: 'create-author' }">New Author</v-btn>
      </div>
      <v-table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in authors">
            <td>{{ author.firstName }}</td>
            <td>{{ author.lastName }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuthorsComposable } from '@/views/Authors.composable'

const { loading, authors } = new AuthorsComposable()
</script>
