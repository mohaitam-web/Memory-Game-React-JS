const original = [
  { x: 0, y: 0 },
  { x: 137, y: 0 },
  { x: 274.5, y: 0 },
  { x: 0, y: 137 },
  { x: 137, y: 137 },
  { x: 274, y: 137 },
  { x: 0, y: 274 },
  { x: 137, y: 274 },
  { x: 274, y: 274 },
  { x: 0, y: 412 },
  { x: 137, y: 412 },
  { x: 274, y: 412 },
  { x: 0, y: 548 },
  { x: 137, y: 548 },
  { x: 274, y: 548 }
];

const part1 = original.map(obj => ({ ...obj, id: Math.random() }));
const part2 = original.map(obj => ({ ...obj, id: Math.random() }));

const DATA = part1.concat(part2);

export default DATA;