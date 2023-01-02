<template>
  
  <div class="menu">
    <a v-for="(menu) in menus" :key="menu">{{ menu }}</a>
   

  </div>
  
  <div v-for="item,i in products" :key="i">
    <img :src="images[i]">
    <h4>{{ item }}</h4>
    <p>{{ ((i+1)*10)+'만원' }}</p>
    <button @click="increase(i)">허위매물신고</button> <span>신고 수 : {{ cnts[i] }}</span>
  </div>

  

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      cnts : [0,0,0],
      images : ['./assets/room0.jpg','./assets/room1.jpg','./assets/room2.jpg'],
      menus : ['Home','Shop','About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods :{
    increase(i){
      this.cnts[i]++;
    }
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
  border-radius : 5px;
}

.menu a {
  color:white;
  padding: 10px;
}
</style>
