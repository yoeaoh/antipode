export function spCode() {
    return `
      setMaxIterations(10);
      let s = getSpace();
      let r = getRayDirection();
      
      let n1 = noise(r * 4 +vec3(0, 1, vec3(0, 1, 1))*.5 );
      let n = noise(s + vec3(0, 0, 1+time*.1) + n1);
      
      metal(n*.5+.5);
      shine(n*.5+.5);
      
      color(vec3(0, 0.15, 0.3));
      displace(mouse.x * 2, mouse.y * 2, 0);
      boxFrame(vec3(2), abs(n) * .1 + .04 );
      mixGeo(2);
      sphere(n * .5 + .8);
    `;
  }