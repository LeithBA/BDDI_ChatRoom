class Ball {
  constructor (xin, yin, din, idin, oin) {
    this.x = xin
    this.y = yin
    this.vx = 0
    this.vy = 0
    this.diameter = din
    this.id = idin
    this.others = oin

    this.spring = 0.05
    this.gravity = 0.03
    this.friction = -0.9
  }

  collide () {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      const dx = this.others[i].x - this.x
      const dy = this.others[i].y - this.y
      const distance = sqrt(dx * dx + dy * dy)
      const minDist = this.others[i].diameter / 2 + this.diameter / 2
      //   console.log(distance);
      // console.log(minDist);
      if (distance < minDist) {
        // console.log("2");
        const angle = atan2(dy, dx)
        const targetX = this.x + cos(angle) * minDist
        const targetY = this.y + sin(angle) * minDist
        const ax = (targetX - this.others[i].x) * this.spring
        const ay = (targetY - this.others[i].y) * this.spring
        this.vx -= ax
        this.vy -= ay
        this.others[i].vx += ax
        this.others[i].vy += ay
      }
    }
  }

  move () {
    this.vy += this.gravity
    this.x += this.vx
    this.y += this.vy
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2
      this.vx *= this.friction
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2
      this.vx *= this.friction
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2
      this.vy *= this.friction
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2
      this.vy *= this.friction
    }
  }

  display () {
    ellipse(this.x, this.y, this.diameter, this.diameter)
  }
}
