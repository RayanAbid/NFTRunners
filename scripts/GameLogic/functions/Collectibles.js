function SpawnCollectibles() {
  let size = RandomIntInRange(50, 50);
  let type = RandomIntInRange(0, 1);
  let render = RandomIntInRange(0, 5);
  let collectible = new Collectible(
    canvas.width + size - 100,
    canvas.height - size - 10,
    size,
    size,
    "rgba(0,0,0,0)"
  );

  if (type == 1) {
    collectible.y -= player.originalHeight + 10;
  }
  if (render == 2) {
    collectibles.push(collectible);
  }
}
