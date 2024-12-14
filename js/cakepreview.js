let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

function closeNotification(id) {
    document.getElementById(id).style.display = 'none';
  }

/////////// from previous website ///////////////////

// link example //////////////////////// ?a=anes_25_13_23_34 or ?a=anes&25&13&23&34////////////


function close1() {
  var close1 = document.querySelector('.close1');
  var alert1 = document.querySelector('.alert1');
 
    if (close1) {
      alert1.style.display = 'none';
    }
  }



  function close2() {
    var close2 = document.querySelector('.close2');
  var alert2 = document.querySelector('.alert2');
    if (close2) {
      alert2.style.display = 'none';
    }
  }




    function changeImageSource() {
    var imgElement = document.querySelector('.flamebtn1');
    if (imgElement) {
      imgElement.src = 'pic4.png';
    }
  }

  function resetImageSource() {
    var imgElement = document.querySelector('.flamebtn1');
    if (imgElement) {
      imgElement.src = 'pic5.png';
    }
  }

        const initialFlameVideo = document.getElementById('initial-flame');
        const mediumFlameVideo = document.getElementById('medium-flame');
        const blownOutFlameVideo = document.getElementById('blown-out-flame');

        initialFlameVideo.style.display = 'block';
        mediumFlameVideo.style.display = 'none';
        blownOutFlameVideo.style.display = 'none';
  
  
  // Function to get URL parameter value by name
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



  // Function to determine the suffix for the age
  function getAgeSuffix(age) {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return 'th';
    } else if (lastDigit === 1) {
      return 'st';
    } else if (lastDigit === 2) {
      return 'nd';
    } else if (lastDigit === 3) {
      return 'rd';
    } else {
      return 'th';
    }
  }

  // Get the current page's URL
const currentUrl = window.location.href;

// Get values from URL parameters
const capitalizeFirstLetter = (string) => (string ? string.charAt(0).toUpperCase() + string.slice(1) : '');

const nameParam = capitalizeFirstLetter(getParameterByName('a', currentUrl));
const paramsArray = currentUrl.split('&');

// Extracting values based on position in the URL
const ageParam = paramsArray[1];
const selectedCheckboxSet1 = paramsArray[2];
const selectedCheckboxSet2 = paramsArray[3];
const selectedCheckboxSet3 = paramsArray[4];

// console.log("Name:", nameParam);
// console.log("Age:", ageParam);
// console.log("Checkbox Set 1:", selectedCheckboxSet1);
// console.log("Checkbox Set 2:", selectedCheckboxSet2);
// console.log("Checkbox Set 3:", selectedCheckboxSet3);

  // Update the src attributes for the floating images
  const floatingImage1 = document.querySelector('.floating-image1');
        const floatingImage2 = document.querySelector('.floating-image2');
        const floatingImage3 = document.querySelector('.floating-image3');

        if (selectedCheckboxSet1) {
            floatingImage1.src = `./${selectedCheckboxSet1}.png`;
        }

        if (selectedCheckboxSet2) {
            floatingImage2.src = `./${selectedCheckboxSet2}.png`;
        }

        if (selectedCheckboxSet3) {
            floatingImage3.src = `./${selectedCheckboxSet3}.png`;
        }

  // Update HTML content with variable values or placeholders
  const nameElement = document.querySelector('.hb');

  if (nameParam && ageParam) {
    const ageSuffix = getAgeSuffix(parseInt(ageParam));
    const ageText = ageParam ? `${ageParam}${ageSuffix}` : '...';
    nameElement.innerHTML = `Happy ${ageText} Birthday ${nameParam}!`;
  } else {
    nameElement.innerHTML = 'Happy Birthday ...!';
  }
 console.log("mehbooooool");
  // Your JavaScript code here
  // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let mic;

  // Variables to track the state
  let isBlownOutShown = false;
  
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      mic = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      mic.connect(analyser);

      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;

      const dataArray = new Uint8Array(bufferLength);

      function analyzeVolume() {
        analyser.getByteFrequencyData(dataArray);
        console.log('Amplitude Data:', dataArray);

        // Calculate averageVolume from frequency data
        const averageVolume = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;

        const initialFlameVideo = document.getElementById('initial-flame');
        const mediumFlameVideo = document.getElementById('medium-flame');
        const blownOutFlameVideo = document.getElementById('blown-out-flame');
        const nextFlameVideo = document.getElementById('next-flame');

        // Check if the blown-out flame is already shown
        if (!isBlownOutShown) {
          // Adjust the threshold values as needed
          if (averageVolume < 30) {
            // Low volume, show initial flame video
            initialFlameVideo.style.display = 'block';
            mediumFlameVideo.style.display = 'none';
            blownOutFlameVideo.style.display = 'none';
          } else if (averageVolume >= 30 && averageVolume < 40) {
            // Medium volume, show medium flame video
            initialFlameVideo.style.display = 'none';
            mediumFlameVideo.style.display = 'block';
            blownOutFlameVideo.style.display = 'none';
          } else {
            blownOutFlameVideo.currentTime = 0;
            // High volume, show blown-out flame video
            initialFlameVideo.style.display = 'none';
            mediumFlameVideo.style.display = 'none';
            blownOutFlameVideo.style.display = 'block';

            // Set the flag to true, indicating the blown-out flame is shown
            isBlownOutShown = true;

            // Set up the timer to switch videos after 25 seconds
            setTimeout(() => {
              isOut = true;
              blownOutFlameVideo.style.display = 'none';
              nextFlameVideo.style.display = 'block';
              nextFlameVideo.play(); // Start playing "3044.mp4"
              blownOutFlameVideo.style.display = 'none';
            }, 21000); // Delay for 25 seconds
            createBalloons(30)
            var flamebtn1 = document.querySelector('.flamebtn1');
            if (flamebtn1) {
              flamebtn1.style.display = "block";
            }
          }
        } else if (isOut) {
          // Handle logic for when '3044.mp4' is playing
        }

        // Log averageVolume to console
        console.log('Average Volume:', averageVolume);
      }

      setInterval(analyzeVolume, 100); // Log every 0.1 seconds

      // Reset button click event
      const resetButton = document.getElementById('reset-button');
      resetButton.addEventListener('click', () => {
        // Reset the state
        isBlownOutShown = false;

        // Hide all videos
        document.getElementById('initial-flame').style.display = 'none';
        document.getElementById('medium-flame').style.display = 'none';
        document.getElementById('blown-out-flame').style.display = 'none';
        document.getElementById('next-flame').style.display = 'none';
        isBlownOutShown = false;
      });

    })
    .catch((error) => {
      console.error('Error accessing microphone:', error);
    });





























    
const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}


function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  const balloonContainer = document.getElementById("balloon-container");
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.innerHTML = '';
    balloonContainer.style.opacity = 1; // Reset the opacity
  }, 500);
}

window.addEventListener("load", () => {
  // createBalloons(30)
});

window.addEventListener("click", () => {
  removeBalloons();
});





function resetFlame() {
  const initialFlameVideo = document.getElementById('initial-flame');
  const mediumFlameVideo = document.getElementById('medium-flame');
  const blownOutFlameVideo = document.getElementById('blown-out-flame');
  const nextFlameVideo = document.getElementById('next-flame');

  // Hide all videos except the initial flame
  initialFlameVideo.style.display = 'block';
  mediumFlameVideo.style.display = 'none';
  blownOutFlameVideo.style.display = 'none';
  nextFlameVideo.style.display = 'none';

  // Reset the state
  isBlownOutShown = false;

  // Remove balloons
  balloonContainer.innerHTML = '';




  var flamebtn1 = document.querySelector('.flamebtn1');
            if (flamebtn1) {
              flamebtn1.style.display = "none";
            }

  

  


  
}

// Add an event listener to flamebtn1 for the click event
const flamebtn1 = document.querySelector('.flamebtn1');
if (flamebtn1) {
  flamebtn1.addEventListener('click', resetFlame);
  const balloonContainer = document.getElementById("balloon-container");


}