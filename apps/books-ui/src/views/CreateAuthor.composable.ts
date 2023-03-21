import type { Ref } from 'vue'
import { ref } from 'vue'
import axios from 'axios'
import type { Author } from 'entities'
import type { Router } from 'vue-router'

export class CreateAuthorComposable {
  public firstName: Ref<undefined | string> = ref()
  public lastName: Ref<undefined | string> = ref()
  public saving = ref(false)

  constructor(private router: Router) {}

  save = () => {
    this.saving.value = true
    axios
      .post<Author>('/api/authors', {
        firstName: this.firstName.value,
        lastName: this.lastName.value
      })
      .then(() => {
        this.saving.value = false
        this.router.push({ name: 'authors' })
      })
  }
}
