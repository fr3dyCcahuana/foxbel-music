<template>
  <div class="menu ">
    <div class="">
      <p class="menu__title">Mi librería</p>
      <v-row class="menu__list">
        <ul class="menu__list__item">
          <li
            v-for="(item, index) in menuList"
            :key="index"
            :class="$route.name == item.name ? 'active' : ''"
            @click="resolveRouter(item.name)"
          >
            <div class="d-flex align-center ml-5">
              <p class="ml-4 mb-0">{{ item.label }}</p>
            </div>
          </li>
        </ul>
      </v-row>
    </div>
    <div class="mt-2">
      <p class="menu__title">Playlist</p>
      <v-row class="menu__list">
        <ul class="menu__list__item">
          <li
            v-for="(item, index) in menuList2"
            :key="index"
            :class="$route.name == item.name ? 'active' : ''"
            @click="resolveRouter(item.name)"
          >
            <div class="d-flex align-center ml-5">
              <p class="ml-4 mb-0">{{ item.label }}</p>
            </div>
          </li>
        </ul>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  data() {
    return {
      menuList: [
        { label: "Reciente", name: "recent" },
        { label: "Artistas", name: "artist" },
        { label: "Álbums", name: "album" },
        { label: "Canciones", name: "album" },
        { label: "Estaciones", name: "album" },
      ],
      menuList2: [
        { label: "Metal", name: "album" },
        { label: "Para bailar", name: "album" },
        { label: "Rock 90s", name: "album" },
        { label: "Baladas", name: "album" },
      ],
    };
  },
  methods: {
    resolveRouter(path) {
      if (this.$route.path !== "/" + path + "s")
        this.$router.push({ name: path });
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  font-family: "Quicksand", sans-serif;
  &__logo {
    img {
      width: 100px;
      border: 1px solid #000;
    }
  }
  &__title {
    font-size: 1.3em;
    color: #ffffff;
    font-weight: 700;
  }
  &__list {
    height: 22vh;
    color: #ffffff;
    font-size: 1.1em;
    font-weight: 600;

    &__item {
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      cursor: pointer;
      .active {
        border-left: 5px solid #e86060;
        color: #e86060;
        svg {
          width: 18px !important;
          height: 18px !important;
          path {
            fill: #e86060;
            stroke: #e86060;
          }
        }
      }
      li {
        border-left: 5px solid transparent;
        border-radius: 1;
        line-height: 2.2;
        svg {
          width: 18px;
          height: 18px;
          path {
            fill: #bfbfbf;
            stroke: #bfbfbf;
          }
        }
        :hover {
          color: #e86060;
          font-weight: 500;
          svg {
            width: 18px;
            height: 18px;
            path {
              fill: #e86060;
              stroke: #e86060;
            }
          }
        }
      }
      p {
        font-size: 0.825em;
        font-weight: normal;
        letter-spacing: 0.15px;
      }
    }
  }
}
</style>
