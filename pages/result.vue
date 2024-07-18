<template>
  <section>
  <p class="title tx_black" id="fifpuzzle">ゲームクリア</p>
  <div id="app">
    <div class="text tx_black" id="desc">クリア時間は{{minutes}}分{{seconds}}秒です。</div>
  </div>
  <a href="./play.html">
    <div class="black button" id="startbutton">
      <div class="bt_text tx_white text">もう一度プレイ</div>
    </div>
  </a>
  <div class="gray frout_black frame" id="sample">
    <div class="container">
      <div class="block blue">
        <div class="text tx_white bl_text bold">1</div>
      </div>
      <div class="block blue">
        <div class="text tx_white bl_text bold">2</div>
      </div>
      <div class="block blue">
        <div class="text tx_white bl_text bold">3</div>
      </div>
      <div class="block blue">
        <div class="text tx_white bl_text bold">4</div>
      </div>
    </div>

    <div class="container">
      <div class="block orange">
        <div class="text tx_white bl_text bold">5</div>
      </div>
      <div class="block orange">
        <div class="text tx_white bl_text bold">6</div>
      </div>
      <div class="block orange">
        <div class="text tx_white bl_text bold">7</div>
      </div>
      <div class="block orange">
        <div class="text tx_white bl_text bold">8</div>
      </div>
    </div>

    <div class="container">
      <div class="block yellow">
        <div class="text tx_white bl_text bold">9</div>
      </div>
      <div class="block yellow">
        <div class="text tx_white bl_text bold">10</div>
      </div>
      <div class="block yellow">
        <div class="text tx_white bl_text bold">11</div>
      </div>
      <div class="block yellow">
        <div class="text tx_white bl_text bold">12</div>
      </div>
    </div>

    <div class="container">
      <div class="block green">
        <div class="text tx_white bl_text bold">13</div>
      </div>
      <div class="block green">
        <div class="text tx_white bl_text bold">14</div>
      </div>
      <div class="block green">
        <div class="text tx_white bl_text bold">15</div>
      </div>
      <div class="block">
      </div>
    </div>
  </div>
  </section>
</template>
<script>
export default {
  data: function() {
    return {
			timerCount: 0,
			seconds: '00',
			minutes: '00',
}
  },
  methods: {
    convert: function() {
      this.seconds = (this.timerCount%60).toString(10);
      this.minutes = (Math.floor(this.timerCount/60)).toString(10);
      if (this.minutes == 0) {
        this.minutes = '';
      }
    },
  },
  mounted: function(){
    this.timerCount = Number(localStorage.getItem("count"));
    this.convert();
  }
}
</script>