<template>
  <CardContact :contact="CardAdd" />

  <div></div>
</template>
<script>
import CardContact from "./CardContact.vue";

export default {
  name: CardAdd,
  components: { CardContact },
  data() {
    return {
      error: false,
      CardAdd: {
        name: "",
        tel: null,
      },
    };
  },
  methods: {
    addContact() {
      if (this.CardAdd.tel.length > 12) {
        this.error = true;
        return;
      }
      if (this.CardAdd.name === "" || this.CardAdd.tel === null) {
        this.error = true;
      } else {
        this.$store.commit("addContact", this.CardAdd);
        this.CardAdd.name = "";
        this.CardAdd.tel = null;
        this.error = false;
      }
    },
  },
};
</script>
<style></style>
