<template>
  <div class="contacts">
    <h1>Vos Contacts</h1>
    
    <CardAdd @addContact="addContact" />
  </div>
  <div class="list">
    <CardContact
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
    />
  </div>
</template>

<script>
import CardAdd from "@/components/CardAdd.vue";
import CardContact from "@/components/CardContact.vue";
export default {
  name: "ContactsView",
  components: {
    CardContact,
    CardAdd,
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
  
};
</script>

<style scoped>
.list {
  gap: 20px;
  display: flex;
  flex-direction: column;
}
</style>
