<template >
  <div class="menu">
    <a v-for="(menu) in menus" :key="menu">{{ menu }}</a>
  </div>

  <div class="black-bg" v-if="isModalOpen" >
    <div class="white-bg" >
      <h4>data.title</h4>
      <p>data.content</p>
      <button @click="isModalOpen=false">닫기</button>
    </div>
  </div>


  <div v-for="a,i in onerooms" :key="i">
    <img :src="onerooms[i].image" class="room-img">
    <h4 @click="isModalOpen=true">{{ onerooms[i].title}}</h4>
    <p>{{ onerooms[i].price +'원' }}</p>
  </div>

</template>

<script>
import oneroom from './assets/oneroom.js';



export default {
  name: 'App',
  data() {
    return {
      onerooms : oneroom,
      isModalOpen : false,
      cnts: [0, 0, 0],
      images: [require('@/assets/room0.jpg'), require('@/assets/room1.jpg'), require('@/assets/room2.jpg')],
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods: {
    
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0, 5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%; background: white;
  border-radius:8px;
  padding: 20px;
}
</style>
