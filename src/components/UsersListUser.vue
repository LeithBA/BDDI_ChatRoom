<template>
  <div>
    <li>{{user.username}}</li>
    <!--  <canvas /> -->
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true }
  },

  data () {
    return {
      time: 0,
      speed: 1,
      canvas: document.querySelector('canvas')
    }
  }

  /// //  experimenting below

  //   methods: {
  //   animate() {
  //     requestAnimationFrame(animate);
  //     canvas.width = canvas.width;
  //     let startX = canvas.width / 2;
  //     let startY = canvas.height / 2;

  //     for (let i = 1; i < 100; i++) {
  //       ctx.moveTo(startX, startY);

  //       let endX = startX + Math.cos(time * i) * i * 5;
  //       let endY = startY + Math.sin(time * i) * i * 5;

  //       ctx.lineTo(endX, endY);

  //       startX = endX;
  //       startY = endY;
  //     }

  //     ctx.stroke();

  //     time += speed;
  //   },
  // },

  // mounted() {
  //   this.animate();
  // },
}
</script>
