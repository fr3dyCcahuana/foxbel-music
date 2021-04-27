<template>
  <div class="recents">
    <v-container fluid class="recents__banner">
      <div class="slider-contenedor recents__banner__content red">

      </div>
    </v-container>
    <v-container fluid class="recents__playlist">
      <v-col md="12" class="recents__playlist__content">
        <p class="recents__playlist__content__p">Resultados{{ lista }}</p>
        <div class="d-flex flex-wrap justify-space-between">
          <div
            class="card tarjeta"
            v-for="(item, index) in musicList"
            :key="index"
          >
            <div class="card-img-top">
              <div class="d-flex justify-center align-center">
                <img height="210px" :src="item.artist.picture_medium" alt="" />
              </div>
              <button
                class="c-song__thumb-action red d-flex justify-center"
                @click="play(item)"
              >
                <img
                  class="tarjeta__play"
                  src="@/assets/images/play.png"
                  alt=""
                />
              </button>
            </div>
            <div class="card-body tarjeta__content">
              <h4 class="card-title tarjeta__content_title">
                {{ item.title }}
              </h4>
              <p class="card-text tarjeta__content_subtitle">
                {{ item.artist.name }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-container>
    <div class="myreproductor">
      <audio ref="myReproductor" :src="musicOn.preview" controls="true"></audio>
    </div>
  </div>
</template>

<script>
import cardMusiclist from "../../shared/CardMusic";
import MusicList from "../../../services/Music";
export default {
  name: "recent-component",
  components: {
    "card-music": cardMusiclist,
  },
  data() {
    return {
      musicList: [],
      musicOn: { url: "" },
    };
  },
  computed: {
    lista() {
      return this.urlBackground;
    },
  },

  async mounted() {
    this.searchMusic();
  },
  methods: {
    searchMusic(nameSong) {
      MusicList.find({ q: nameSong }).then((response) => {
        console.log(response.data);
        this.musicList = response.data.data;
      });
    },
    play(item) {
      this.musicOn = item;
      this.$refs.myReproductor.play();
    },
  },
};
</script>
<style lang="scss" scoped>
.recents {
  padding: 0px 20px;
  width: 100%;
  height: 100%;
  padding-bottom: 10%;
  &__banner {
    &__content {
      height: 220px;
    }
  }
  &__playlist {
    &__content {
      min-height: 400px;
      &__p {
        font-family: "Quicksand", sans-serif;
        font-size: 2em;
        font-weight: 700;
      }
    }
  }
}
.tarjeta {
  border-radius: 0.2em;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  border: 1px solid #fff;
  &__content {
    font-family: "Quicksand", sans-serif;
  }
  &__play {
    position: absolute;
    opacity: 0.8;
    top: 25%;
    left: 40%;
    width: 50px;
  }
}
.myReproductor {
  position: absolute;
  bottom: 0;
  height: 8vh;
  left: 0;
}
</style>
