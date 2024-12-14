// Variables for the first and second maps
let svg, svg2;

// Dimensions
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7;

// State object to hold GeoJSON and CSV data
let state = {
  geojson: [],
  csv: [],
  selectedSubject: "mth", // Default subject is mth (Math)
  hover: {
    StateName: null,
    ScoreChange: null,
  },
};

// Load data
Promise.all([
  d3.json("usState.json"), // GeoJSON file
  d3.csv("stateData.csv"), // CSV file
])
  .then(([geojson, csv]) => {
    // Store data in state
    state.geojson = geojson;
    state.csv = csv;

    // Initialize both maps
    initSharedFilter();
    initFirstMap();
    initSecondMap();
  })
  .catch(err => {
    console.error("Error loading data:", err);
  });

// Initialize the shared subject filter
function initSharedFilter() {
  // Add the subject filter dropdown
  d3.select("body")
    .insert("div", "#container")
    .attr("id", "filter")
    .html(`
      <label for="subject">Select Subject: </label>
      <select id="subject">
        <option value="mth">Math (mth)</option>
        <option value="rla">Reading Language Arts (rla)</option>
      </select>
    `);

  // Add event listener for the dropdown
  d3.select("#subject").on("change", (event) => {
    state.selectedSubject = event.target.value; // Update the selected subject
    updateFirstMap(); // Update first map
    updateSecondMap(); // Update second map
  });
}

// Initialize the first map
function initFirstMap() {
  // Add SVG for the first map
  svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "map1");

  // Initial update of the first map
  updateFirstMap();
}

// Initialize the second map
function initSecondMap() {
  // Add SVG for the second map
  svg2 = d3
    .select("#second-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "map2");

  // Initial update of the second map
  updateSecondMap();
}

// Create the tooltip dynamically
const tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("background-color", "#fff")
  .style("border", "1px solid #ccc")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.3)")
  .style("pointer-events", "none")
  .style("opacity", 0); // Initially hidden
  function updateFirstMap() {
    // Create CSV Map for gys_mn_1922_ol
    const csvMap = new Map(
      state.csv
        .filter(d => d.subject === state.selectedSubject) // Filter for mth or rla
        .map(d => [d.NAME.trim(), +d.gys_mn_1922_ol])
    );
  
    // Merge Data into GeoJSON
    state.geojson.features.forEach(feature => {
      const stateName = feature.properties.NAME;
      feature.properties.gys_mn_1922_ol = +csvMap.get(stateName) || null; // Use null if missing
    });
  
    // Create Projection and GeoPath
    const projection = d3.geoAlbersUsa().fitSize([width, height], state.geojson);
    const geoPath = d3.geoPath(projection);
  
    // Create Color Scale
    const minValue = d3.min(state.geojson.features, d => d.properties.gys_mn_1922_ol);
    const maxValue = d3.max(state.geojson.features, d => d.properties.gys_mn_1922_ol);
  
    const mapcolorScale = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .range(["red", "green"]);
  
    // Draw the Map
    svg
      .selectAll(".state")
      .data(state.geojson.features)
      .join("path")
      .attr("class", "state")
      .attr("d", geoPath)
      .attr("fill", d => {
        const value = d.properties.gys_mn_1922_ol;
        return value !== null && value !== undefined ? mapcolorScale(value) : "#fff"; // Grey for missing data
      })
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`
            <strong>State:</strong> ${d.properties.NAME || "Unknown"}<br>
            <strong>Value:</strong> ${
              d.properties.gys_mn_1922_ol !== null && d.properties.gys_mn_1922_ol !== 0
                ? `${d.properties.gys_mn_1922_ol.toFixed(2)} grade levels`
                : "No Data"
            }
          `);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", (event.pageX + 10) + "px") // Position tooltip near cursor
          .style("top", (event.pageY + 10) + "px");
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0); // Hide tooltip on mouseout
      });
  
    draw();
  }
  
  

  const tooltip2 = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("background-color", "#fff")
  .style("border", "1px solid #ccc")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.3)")
  .style("pointer-events", "none")
  .style("opacity", 0); // Initially hidden

// Update the second map (gys_mn_2223_ol)
function updateSecondMap() {
    // Create CSV Map for gys_mn_2223_ol
    const csvMap = new Map(
      state.csv
        .filter(d => d.subject === state.selectedSubject) // Filter for mth or rla
        .map(d => [d.NAME.trim(), +d.gys_mn_2223_ol])
    );
  
    // Merge Data into GeoJSON
    state.geojson.features.forEach(feature => {
      const stateName = feature.properties.NAME;
      feature.properties.gys_mn_2223_ol = csvMap.get(stateName) || null; // Use null if missing
    });
  
  
    // Create Projection and GeoPath
    const projection = d3.geoAlbersUsa().fitSize([width, height], state.geojson);
    const geoPath = d3.geoPath(projection);
  
    // Create Color Scale with Support for Negative Values
    const minValue = d3.min(state.geojson.features, d => d.properties.gys_mn_2223_ol);
    const maxValue = d3.max(state.geojson.features, d => d.properties.gys_mn_2223_ol);
    
    // Fix the color scale
    const mapcolorScale = d3
        .scaleLinear()
        .domain([minValue,maxValue])
        .range(["red","green"]);

    
    // Draw the Map
    svg2
    .selectAll(".state")
    .data(state.geojson.features)
    .join("path")
    .attr("class", "state")
    .attr("d", geoPath)
    .attr("fill", d => {
      const value = d.properties.gys_mn_2223_ol;
  
      // Ensure correct color mapping
      return value !== null && value !== undefined
        ? mapcolorScale(value)
        : "#fff"; // white for missing data 
    })
    .on("mouseover", (event, d) => {
      tooltip
        .style("opacity", 1)
        .html(`
          <strong>State:</strong> ${d.properties.NAME || "Unknown"}<br>
          <strong>Value:</strong> ${
            d.properties.gys_mn_2223_ol !== null
              ? `${d.properties.gys_mn_2223_ol.toFixed(2)} grade levels`
              : "No Data"
          }
        `);
    })
    .on("mousemove", (event) => {
      tooltip
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY + 10) + "px");
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0); // Hide tooltip on mouseout
    });

  
    draw();
  }
  

// Draw function for hover content
function draw() {
  const hoverBox = d3.select("#hover-content");
  const hoverData = Object.entries(state.hover);

  hoverBox
    .selectAll("div.row")
    .data(hoverData)
    .join("div")
    .attr("class", "row")
    .html(d => `<strong>${d[0]}:</strong> ${d[1]}`);
}


