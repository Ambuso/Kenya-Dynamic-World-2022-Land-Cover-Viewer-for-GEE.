
# Kenya Dynamic World 2022 Land Cover Viewer

This project visualizes land cover data for Kenya in 2022 using the [Google Dynamic World V1 dataset](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_DYNAMICWORLD_V1) in [Google Earth Engine (GEE)](https://earthengine.google.com/). The script generates a map of Kenya's land cover, clipped to its administrative boundaries, with a legend displaying nine land cover classes.

![Kenya Land Cover Map](https://via.placeholder.com/800x400.png?text=Kenya+Land+Cover+Map+Preview) <!-- Replace with actual screenshot if available -->

## Features
- Loads Kenya's boundary from the FAO GAUL 2015 dataset.
- Uses Dynamic World 2022 data to compute the modal (most frequent) land cover class for the year.
- Visualizes nine land cover classes (e.g., Water, Trees, Crops) with a custom color palette.
- Displays an interactive map centered on Kenya with a styled legend.
- Includes debugging output to verify dataset loading.

## Land Cover Classes
The map displays the following land cover classes with their corresponding colors:
| Class                | Color     |
|----------------------|-----------|
| Water                | #419BDF   |
| Trees                | #397D49   |
| Grass                | #88B053   |
| Flooded Vegetation   | #7A87C6   |
| Crops                | #E49635   |
| Shrub & Scrub        | #DFC35A   |
| Built-up Area        | #C4281B   |
| Bare Ground          | #A59B8F   |
| Snow & Ice           | #B39FE1   |

## Prerequisites
- A [Google Earth Engine](https://earthengine.google.com/) account. Sign up [here](https://signup.earthengine.google.com/).
- Access to the GEE Code Editor: [code.earthengine.google.com](https://code.earthengine.google.com/).

## Installation
1. **Access GEE Code Editor**:
   - Log in to the [GEE Code Editor](https://code.earthengine.google.com/) with your GEE account.

2. **Clone or Copy the Script**:
   - Clone this repository using:
     ```bash
     git clone https://github.com/your-username/kenya-land-cover-2022.git
     ```
     OR
   - Copy the JavaScript code from `kenya_land_cover_2022.js` in this repository and paste it into the GEE Code Editor.

## Usage
1. **Run the Script**:
   - In the GEE Code Editor, paste or open the `kenya_land_cover_2022.js` script.
   - Click the **Run** button to execute the script.

2. **View the Output**:
   - The map will center on Kenya at zoom level 6, displaying the 2022 land cover data.
   - A legend will appear in the bottom-left corner, showing land cover classes and colors.
   - Check the **Console** tab for debugging output (e.g., number of images in the dataset).

3. **Interact with the Map**:
   - Zoom and pan to explore different regions of Kenya.
   - Use the GEE Inspector tool to click on the map and view pixel values (land cover classes).

## Code Structure
The `kenya_land_cover_2022.js` script is organized as follows:
- **Boundary Loading**: Imports Kenya's boundary from FAO GAUL 2015.
- **Data Processing**: Filters and processes Dynamic World 2022 data to compute modal land cover.
- **Visualization**: Defines a color palette and visualization parameters.
- **Map Display**: Centers the map and adds the land cover layer.
- **Legend Creation**: Builds a styled legend with class names and colors.
- **Debugging**: Prints the number of images in the dataset to the console.

## Example Output
Running the script produces:
- An interactive map of Kenya with land cover data for 2022.
- A legend listing the nine land cover classes.
- Console output confirming the number of images processed.

## Contributing
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code is well-commented and follows the existing structure.

## Potential Enhancements
- Add a click inspector to display land cover class names on map clicks.
- Implement export functionality to download the map as a GeoTIFF.
- Allow users to toggle between different years or datasets.
- Validate results against ground truth or other land cover datasets (e.g., ESA WorldCover).

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [Google Dynamic World](https://dynamicworld.app/) for providing high-resolution land cover data.
- [Google Earth Engine](https://earthengine.google.com/) for the processing platform.
- [FAO GAUL](https://data.apps.fao.org/catalog/dataset/global-administrative-unit-layers-gaul) for administrative boundaries.

## Contact
For questions  [dismasmik3@gmail.com].

---
*Last updated: July 10, 2025*
