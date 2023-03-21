import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import type { Author } from 'entities'

export class AuthorsComposable {
  public loading = ref(false)
  public authors: Ref<Author[]> = ref([])

  constructor() {
    this.loading.value = true
    axios.get<Author[]>('/api/authors').then((res) => {
      this.authors.value = res.data
      this.loading.value = false
    })
  }
}
