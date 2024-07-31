let flowerSize;
let petalColors = [];
let backgroundColor;
let lineWeight;
let spacing;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
  
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  flowerSize = 85; // Size of the flower
  petalColors = [
    color('#88dbf2'), // Light blue
    color('#9d88f2'), // Light purple
  ];
  backgroundColor = color('#a200ff'); // Light background color
  lineWeight = 10; // Line weight for petals
  spacing = 50; //
  drawBackgroundPattern();
  
  // // Draw flowers
  // for (let x = spacing; x < width; x += spacing) {
  //   for (let y = spacing; y < height; y += spacing) {
  //     drawFlower(x, y); // Draw flower at each position
  //   }
  // }
  drawFlower(100,100); // Draw flower at each position
  noLoop(); // Stop draw loop after one iteration
}
function drawBackgroundPattern() {
  // Draw diagonal lines for a subtle texture
  stroke(255, 240); // Light color for lines with transparency
  strokeWeight(0); // Increased line weight for thicker lines
  
  for (let i = 0; i < width; i += 50) {
    line(i, 0, i + 50, height); // Diagonal lines from left to right
  }
  
  for (let j = 0; j < height; j += 50) {
    line(0, j, width, j + 50); // Diagonal lines from top to bottom
  }
  
  // Draw circles for added texture
  fill(255, 220, 200, 50); // Light color with transparency
  noStroke();
  
  for (let i = 0; i < width; i += 100) {
    for (let j = 0; j < height; j += 100) {
      ellipse(i + 50, j + 50, 30, 30); // Subtle circles in the background
    }
  }
}

function drawFlower(x, y) {
  push();
  translate(x, y);
  
  strokeWeight(lineWeight);
  
  // Draw petals with varying colors
  for (let i = 0; i < 6; i++) {
    rotate(60);
    fill(petalColors[i % petalColors.length]); // Cycle through the petal colors
    ellipse(0, -flowerSize / 2, flowerSize / 3, flowerSize);
  }
  
  // Draw center of the flower
  fill(255, 220, 0); // Center color
  ellipse(0, 0, flowerSize / 3);
  
  pop();
}