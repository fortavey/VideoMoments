<template>
  <div class="react">
    <div @click="setNewTime('1-1.mp4', '33.30')" class="item">
      Создание компонентов на основе классов
    </div>
    <div @click="setNewTime('1-1.mp4', '1.05.50')" class="item">
      Состояние в функциональных компонентах
    </div>
    <div @click="setNewTime('1-2.mp4', '9.40')" class="item">
      Как работает useState под капотом
    </div>
    <div @click="setNewTime('1-2.mp4', '36.50')" class="item">
      Props
    </div>
    <div @click="setNewTime('2-2.mp4', '05.30')" class="item">
      Вывод массива как JSX элемента
    </div>
    <div @click="setNewTime('2-2.mp4', '22.00')" class="item">
      Общение компонентов между собой
    </div>
    <div @click="setNewTime('2-2.mp4', '53.21')" class="item">
      Иммутабельность данных
    </div>
    <div @click="setNewTime('3-2.mp4', '01.45')" class="item">
      useRef() - доступ к элементам DOM
    </div>
    <div @click="setNewTime('3-2.mp4', '35.00')" class="item">
      useEffect()
    </div>
    <div @click="setNewTime('3-2.mp4', '38.00')" class="item">
      Создание своих хуков (Изменение ширины экрана)
    </div> 
    <div @click="setNewTime('4-1.mp4', '48.04')" class="item"> 
      Подключение стилей Webpack
    </div>
    <div @click="setNewTime('4-2.mp4', '07.00')" class="item">
      props. children 
    </div>
    <div @click="setNewTime('4-2.mp4', '20.00')" class="item">
      Перерендер компонента через изменение KEY 
    </div>
    <div @click="setNewTime('4-2.mp4', '35.30')" class="item">
      Контекст: Основы
    </div>
    <div @click="setNewTime('5-2.mp4', '05.00')" class="item">
      MOBX: Принцип работы
    </div>
    <div @click="setNewTime('5-2.mp4', '33.30')" class="item">
      MOBX: Старт работы
    </div>
    <div @click="setNewTime('6-2.mp4', '00.00')" class="item">
      React Router 
    </div>
    <div @click="setNewTime('6-2.mp4', '31.50')" class="item">
      Router как во Vue 
    </div>
    <div @click="setNewTime('6-2.mp4', '51.00')" class="item">
      Карта Route 
    </div>
    <div @click="setNewTime('7-2.mp4', '18.00')" class="item">
      Fetch  
    </div> 

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
        let seconds = 0;
      if(secondsArr.length == 2) {
        seconds = +secondsArr[0]*60 + +secondsArr[1];
      }
      if(secondsArr.length == 3) {
        seconds = (+secondsArr[0]*60*60) + (+secondsArr[1]*60) + (+secondsArr[2]);
      }
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