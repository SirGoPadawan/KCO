<template>
  <div>
    <TheHead />
    <TheBody />
    <TheFooter />
  </div>
</template>
 
<script>
export default {
  components: {
    TheHead: () => import("./components/TheHead.vue"),
    TheBody: () => import("./components/TheBody.vue"),
    TheFooter: () => import("./components/TheFooter.vue")
  },
  name: "app",
  data() {}
};
</script>
 
