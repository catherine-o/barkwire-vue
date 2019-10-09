import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const dogs = [{
    id: 1,
    name: "Fido",
    imageURL: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg",
    votes: 0
  },{
    id: 2,
    name: "Bowser",
    imageURL: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg",
    votes: 0
  },{
    id: 3,
    name: "Percy",
    imageURL: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg",
    votes: 0
}]

export default new Vuex.Store({
  state: {
    dogs: []
  },
  getters: { //like a computed propert for the store // to look up dog in state by id
    //(higher order function (function that returns another function))
    dog: state => id => {
      return state.dogs.find(dog => +dog.id === +id) || {}
    },
    //above same as:
      // dog: function(state){
      //   return finction(id){

      //   }
      // }
    //another example of a getter:
    // dogCount(state){
    //   return state.dogs.length
    // }
  },
  mutations: {
    setDogs(state, dogs){
      state.dogs = dogs
    },
    upvoteDog(state, id){
      const dog = state.dogs.find(dog => dog.id == id)
      dog.votes++
    }
  },
  actions: {
    fetchDogs({ commit }){
      Promise.resolve()  //fetch goes here
        .then(() => {
            commit("setDogs", dogs)
        })
    },
    upvoteDog({ commit }, id){
      commit("upvoteDog", id)
    },
    // fetchDog({ commit }, id){
    //   Promise.resolve()
    //     .then(() => {
    //       const dog = dogs.find(dog => dog.id == id)
    //       commit("setDogs", dogs)
    //     })
    // }
  }
})
