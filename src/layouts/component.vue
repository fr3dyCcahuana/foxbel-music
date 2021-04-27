<template>
  <div class="">
    <v-container fluid class="dashboard">
      <v-row class="dashboard__content">
        <v-col md="2" class="dashboard__content__menu">
          <div class="pt-8">
            <img class="logo" src="@/assets/images/foxbel-music.png" alt="" />
          </div>
          <div class="mt-8">
            <dashboard-menu></dashboard-menu>
          </div>
        </v-col>
        <v-col md="10" class="dashboard__content__content ">
          <v-container fluid class="header">
            <v-text-field
              dense
              outlined
              v-model="nameSong"
              placeholder="buscar"
              style="width: 400px; border-radius: 20px;"
              append-icon="mdi-magnify"
              @change="searchMusic"
              @click:append="searchMusic"
            ></v-text-field>
          </v-container>
          <v-container fluid class="body">
            <slot />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import dashboardMenu from "../components/shared/DashboardMenu/component";
export default {
  name: "dashboard",
  components: {
    "dashboard-menu": dashboardMenu,
  },

  data: function() {
    return {
      nameSong: "bad bunny",
    };
  },
  methods: {
    searchMusic: function() {
      this.$slots.default[0].componentInstance.searchMusic(this.nameSong);
    },
    play(item) {
      console.log("Play en layout", item);
    },
  },
  async mounted() {
      this.searchMusic()
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  height: 100vh;
  &__content {
    &__menu {
      background-color: #662323;
      height: 100vh;
      .logo {
        height: 45px;
      }
    }
    &__content {
      padding: 0px;
      height: 100vh;
      .header {
        height: 8vh;
      }
      .body {
        overflow-y: auto;
        height: 92vh;
      }
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
