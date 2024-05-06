let serviceDropdown = document.getElementById('serDrp');
let marketDrp = document.getElementById('marketDrp');

const hoverOnService = () => {
    serviceDropdown.style.scale = 1;
}

const hoverOutService = () => {
    serviceDropdown.style.scale = 0;
}

const hoverOnMarket = () => {
    marketDrp.style.scale = 1;
}

const hoverOutMarket = () => {
    marketDrp.style.scale = 0;
}


// Configuration options
const texts = [
    {
      text: "Jstore Pharmacy",
      baseSpeed: 50,
      randomSpeed: true,
      minSpeedFactor: 0.8,
      maxSpeedFactor: 1.2,
      characterDelay: 200,
      tagDelay: 1000
    },
    {
      text: "The largest Pharmacy <br> In Africa",
      baseSpeed: 50,
      randomSpeed: true,
      minSpeedFactor: 0.8,
      maxSpeedFactor: 1.2,
      characterDelay: 200,
      tagDelay: 0
    }
  ];
  
  // Function to display text with typewriter effect
  function typeWriter(textIndex) {
    const config = texts[textIndex];
    const element = document.getElementById('typewriter');
    let index = 0;
  
    function type() {
      if (index <= config.text.length) {
        if (config.text[index] === '<') {
          const tagEndIndex = config.text.indexOf('>', index);
          element.innerHTML = config.text.substring(0, index + 1);
          index = tagEndIndex + 1;
          setTimeout(type, config.tagDelay);
        } else {
          element.innerHTML = config.text.substring(0, index + 1);
          index++;
          setTimeout(type, config.characterDelay + (config.randomSpeed ? Math.random() * (config.maxSpeedFactor - config.minSpeedFactor) + config.minSpeedFactor : 0));
        }
      } else {
        setTimeout(() => {
          index = 0; // Reset index for next loop
          typeWriter((textIndex + 1) % texts.length); // Move to next text or loop back to the first one
        }, 1000); // Delay before starting the next text
      }
    }
  
    // Start the typing animation
    type();
  }
  
  // Call the function to start the typewriter effect with the first text
    typeWriter(0);

