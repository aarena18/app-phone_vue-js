<template>
  <div>
    <h1>Composez un numéro</h1>
  </div>
  <div class="keys">
    <KeysCall />
  </div>
</template>

<script>
import KeysCall from "@/components/KeysCall.vue";
export default {
  name: "ClavierView",
  components: {
    KeysCall,
  },
};
</script>

<style scoped>
template {
  background-color: black;
}
</style>
