particlesJS("particles-js", {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 6
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.8,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    // background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover"
  }
});

// Change background colour by mouse move coordinates
const page = document.querySelector("#particles-js");
page.addEventListener("mousemove", runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  document.body.style.backgroundColor = `rgb(${e.offsetX}, 50 , ${e.offsetY})`;
}

// if (window.onload) {
//   showGreetings("Hi, My name is Nahrin Oda");

//   e.preventDefault();
// }

// // Show Greetings
// function showGreetings(greeting) {
//   // Create a div
//   const greetingDiv = document.createElement("h2");

//   // Get element
//   const card = document.querySelector(".card");
//   const heading = document.querySelector(".heading");

//   //Add Class
//   greetingDiv.className = "greetings";

//   // Create text node and append to div
//   greetingDiv.appendChild(document.createTextNode("Hi, my name is Nahrin Oda"));

//   // Insert greeting in
//   card.insertBefore(greetingDiv, heading);

//   // Clear greeting in 3 seconds
//   setTimeout(clearGreeting, 4000);
// }

// // Clear Greeting
// function clearGreeting() {
//   document.querySelector(".greetings").remove();
// }
