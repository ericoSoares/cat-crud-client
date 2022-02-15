const generateRandomPoints = (center, radius, count) => {
  let points = [];
  for (let i = 0; i < count; i++) {
    points.push(generateRandomPoint(center, radius));
  }
  return points;
}


const generateRandomPoint = (center, radius) => {
  let x0 = center.lng;
  let y0 = center.lat;
  // Convert Radius from meters to degrees.
  let rd = radius / 111300;

  let u = Math.random();
  let v = Math.random();

  let w = rd * Math.sqrt(u);
  let t = 2 * Math.PI * v;
  let x = w * Math.cos(t);
  let y = w * Math.sin(t);

  let xp = x / Math.cos(y0);

  // Resulting point.
  return { 'lat': y + y0, 'lng': xp + x0 };
}

export { generateRandomPoints, generateRandomPoint };

//let randomGeoPoints = generateRandomPoints({ 'lat': 24.23, 'lng': 23.12 }, 100, 5);