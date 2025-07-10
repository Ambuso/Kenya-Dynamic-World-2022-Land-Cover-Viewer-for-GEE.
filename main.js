// Title: Kenya Dynamic World 2022 Land Cover Viewer

// Import and filter Kenya's boundary from FAO GAUL 2015 dataset
var kenya = ee.FeatureCollection('FAO/GAUL/2015/level1')
  .filter(ee.Filter.eq('ADM0_NAME', 'Kenya'))
  .geometry(); // Convert to geometry for clipping

// Load Dynamic World 2022 dataset and compute modal land cover
var dw2022 = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1')
  .filterDate('2022-01-01', '2022-12-31') // Filter for 2022
  .filterBounds(kenya) // Restrict to Kenya
  .select('label') // Select land cover classification band
  .mode() // Compute most frequent class for the year
  .clip(kenya); // Clip to Kenya's boundary

// Define land cover class names and corresponding color palette
var classNames = [
  'Water', 'Trees', 'Grass', 'Flooded Vegetation', 'Crops',
  'Shrub & Scrub', 'Built-up Area', 'Bare Ground', 'Snow & Ice'
];

var classColors = [
  '#419BDF', // Water
  '#397D49', // Trees
  '#88B053', // Grass
  '#7A87C6', // Flooded Vegetation
  '#E49635', // Crops
  '#DFC35A', // Shrub & Scrub
  '#C4281B', // Built-up Area
  '#A59B8F', // Bare Ground
  '#B39FE1'  // Snow & Ice
];

// Set visualization parameters for the land cover map
var visParams = {
  min: 0, // Minimum class value
  max: 8, // Maximum class value (0-8 for 9 classes)
  palette: classColors // Apply color palette
};

// Center the map on Kenya with zoom level 6 and add the land cover layer
Map.centerObject(kenya, 6);
Map.addLayer(dw2022, visParams, 'Kenya Land Cover 2022');

// Create a legend panel for land cover classes
var legend = ui.Panel({
  style: {
    position: 'bottom-left', // Position legend at bottom-left
    padding: '8px 15px', // Add padding for readability
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    border: '1px solid black' // Add border for clarity
  }
});

// Add legend title
legend.add(ui.Label({
  value: 'Dynamic World 2022 - Kenya',
  style: {
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 8px 0'
  }
}));

// Iterate through classes to create legend entries
for (var i = 0; i < classNames.length; i++) {
  // Create a color box for the class
  var colorBox = ui.Label({
    style: {
      backgroundColor: classColors[i],
      padding: '8px', // Size of color box
      margin: '0 4px 0 0' // Spacing
    }
  });
  
  // Create class name label
  var label = ui.Label({
    value: classNames[i],
    style: { margin: '0 0 4px 0' }
  });
  
  // Combine color box and label in a horizontal panel
  var row = ui.Panel({
    widgets: [colorBox, label],
    layout: ui.Panel.Layout.Flow('horizontal')
  });
  
  // Add row to legend
  legend.add(row);
}

// Add the legend to the map
Map.add(legend);

// Optional: Print number of images in collection for debugging
var imageCount = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1')
  .filterDate('2022-01-01', '2022-12-31')
  .filterBounds(kenya)
  .size();
print('Number of images in Dynamic World 2022 for Kenya:', imageCount);