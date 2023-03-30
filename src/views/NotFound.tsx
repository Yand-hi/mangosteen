import { defineComponent } from "vue"

export const NotFound = defineComponent({
  setup() {
    return () => (
      <>
        404 Not Found
      </>
    )
  }
})

export default NotFound