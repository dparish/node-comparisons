<template>
  <v-card>
    <v-card-title>Create an Author</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="firstName" label="First Name"></v-text-field>
        <v-text-field v-model="lastName" label="Last Name"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="save">Save</v-btn>
      <v-btn :to="{ name: 'authors' }">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { CreateAuthorComposable } from '@/views/CreateAuthor.composable'
import router from '@/router'

const { save, lastName, firstName } = new CreateAuthorComposable(router)
</script>
