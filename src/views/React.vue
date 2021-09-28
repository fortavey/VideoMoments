<template>
  <div class="react">
    <div @click="setNewTime('1-1.mp4', '56.34')" class="item">Ссылка на видео</div>

    <div class="video-container">
      <video :src="videoUrl" width="1280" height="720" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'React',
  data: () => ({
    video: '',
    time: ''
  }),
  computed: {
    videoUrl() {
      return `/ReactVideo/${this.video}#t=${this.time}`
    }
  },
  methods: {
    setNewTime(videoName, time){
      let secondsArr = time.split('.');
      let seconds = +secondsArr[0]*60 + +secondsArr[1];
      this.video = videoName;
      this.time = seconds;
    }
  }
}
</script>

<style>
  .video-container {
    border: 4px solid silver;
    margin: 20px auto;
    width: 1284px;
  }
  .item {
    height: 50px;
    width: 1284px;
    margin: auto;
    display: flex;
    align-items: center;
    border: 1px solid silver;
    cursor: pointer;
    padding-left: 10px;
    color: blue;
  }
</style>