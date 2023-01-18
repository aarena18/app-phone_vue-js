<template>
  <!-- PREVIEW CARD CONTACT -->
  <!-- <CardContact :contact="CardAdd" /> -->

  <div>
    <form @submit.prevent="addContact">
      <input
        type="text"
        placeholder="Nom et prénom..."
        v-model="CardAdd.name"
      />

      <input type="number" placeholder="numéro... " v-model="CardAdd.tel" />
      <!-- <span v-if="CardAdd.tel.length < 3 && error" class="error">Le numéro doit faire maximum 12 chiffres </span> -->
      <button type="submit">Ajouter aux contacts</button>
    </form>
  </div>
</template>
<script>
// import CardContact from "./CardContact.vue";

export default {
  name: "CardAdd",
  //   components: { CardContact },
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
      if (this.CardAdd.name == "" || this.CardAdd.tel == null) return;
      if (
        this.$store.state.contacts.find(
          (contact) => contact.name == this.CardAdd.name
        )
      )
        return;
      this.$store.commit("addContact", this.CardAdd);
      this.error = false;
      this.CardAdd = {
        name: "",
        tel: null,
      };
    },
  },
};
</script>
<style scoped>
form {
  background-color: #42b983;
  width: 50vw;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
}

input {
  padding: 10px;
  border-radius: 10px;
  border: none;
}

button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #2c3e50;
  color: white;
  font-weight: bold;
}
</style>
