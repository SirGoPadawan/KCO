<template>
  <div>
    <TheHead />
    <TheBody />
    <TheFooter />
  </div>
</template>
 
<script>
import TheHead from "./components/TheHead.vue";
import TheBody from "./components/TheBody.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheHead, TheBody, TheFooter },
  name: "app",
  data() {}
};
</script>
 
