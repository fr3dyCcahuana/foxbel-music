<template>
  <dashboard-layout>
    <recent-component></recent-component>
  </dashboard-layout>
</template>
<script>
import dashboard from "../layouts/component";
import RecentComponent from "../components/models/Recents/component";
export default {
  name: "VisitPage",
  components: {
    "dashboard-layout": dashboard,
    "recent-component": RecentComponent,
  },
  props: {
    nameSong: String,
  },
};
</script>
