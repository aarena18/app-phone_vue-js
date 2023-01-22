import { createStore } from "vuex";

export default createStore({
  state: {
    
    row1:{
      id: 1,
      keys:["1", "2", "3"]
    },
    row2:{
      id: 2,
      keys:["4", "5", "6"]
    },
    row3:{
      id: 3,
      keys:["7", "8", "9"]
    },
    row4:{
      id: 4,
      keys:["*", "0", "#"]
    },

    contacts: [
      {
        id: 1,
        name: "John Doe",
        tel: "06 06 06 06 06",
      },
      {
        id: 2,
        name: "Anna Wintour",
        tel: "06 45 67 23 49",
      },
      {
        id: 3,
        name: "Johnny Cage",
        tel: "06 12 34 56 78",
      },
    ],
    inputValues: "",
    journalAppel: [],
  },
  getters: {},
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    },

    call(state, contact){
      state.contacts.push(contact);
    }
    
    
  },
  actions: {},
  modules: {},
});
