<template>
  <div>
    <h1>chat</h1>
    <vue-p5
      @preload="preload"
      @setup="setup"
      @draw="draw"
      @keypressed="keyPressed"
      @mousemoved="mouseMoved"
      @mousedragged="mouseDragged"
    ></vue-p5>
  </div>
</template>

<script>
import VueP5 from 'vue-p5'
import MessagesListMessage from './MessagesListMessage.vue'
import Ball from './Ball.js'

export default {
  name: 'MessagesList',
  components: {
    'vue-p5': VueP5,
    Ball
  },

  data: () => ({
    numBalls: 13,
    balls: []
  }),

  methods: {
    preload (sketch) {},
    setup (sketch) {
      sketch.createCanvas(500, 300)
      sketch.circle(sketch.width / 2, sketch.height / 2, 50)
      for (let i = 0; i < this.numBalls; i++) {
        this.balls[i] = new Ball(
          sketch.random(sketch.width),
          sketch.random(sketch.height),
          sketch.random(30, 70),
          i,
          this.balls
        )
      }
      sketch.noStroke()
      sketch.fill(255, 204)
    },

    draw (sketch) {
      sketch.background(0)
      this.balls.forEach((ball) => {
        ball.collide()
        ball.move()
        ball.display()
      })
    },
    keyPressed ({ keyCode }) {},
    mouseMoved ({ mouseX, mouseY, pmouseX, pmouseY }) {},
    mouseDragged ({ mouseX, mouseY, pmouseX, pmouseY }) {}
  }
}
</script>
