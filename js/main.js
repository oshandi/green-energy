const solutions = {
    1: {
        title: "Topic 01",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus sem ac neque dictum, nec ornare risus ultrices. Proin quis ante in dui varius vestibulum. Mauris lacinia suscipit placerat. Vestibulum at tincidunt nulla. In id cursus purus. Mauris volutpat ullamcorper efficitur. Quisque et dapibus libero. Vestibulum volutpat commodo vestibulum. In hac habitasse platea dictumst. Integer a metus ac leo venenatis auctor id vel odio. Donec at leo eget nulla facilisis accumsan. Phasellus pharetra velit tempus, lobortis nunc quis, dictum mi.",
        image: "../img/img1.svg" 
    },
    2: {
        title: "Topic 02",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus sem ac neque dictum, nec ornare risus ultrices. Proin quis ante in dui varius vestibulum. Mauris lacinia suscipit placerat. Vestibulum at tincidunt nulla. In id cursus purus. Mauris volutpat ullamcorper efficitur. Quisque et dapibus libero. Vestibulum volutpat commodo vestibulum. In hac habitasse platea dictumst. Integer a metus ac leo venenatis auctor id vel odio. Donec at leo eget nulla facilisis accumsan. Phasellus pharetra velit tempus, lobortis nunc quis, dictum mi.",
        image: "../img/img2.svg" 
    },
    3: {
        title: "Topic 03",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus sem ac neque dictum, nec ornare risus ultrices. Proin quis ante in dui varius vestibulum. Mauris lacinia suscipit placerat. Vestibulum at tincidunt nulla. In id cursus purus. Mauris volutpat ullamcorper efficitur. Quisque et dapibus libero. Vestibulum volutpat commodo vestibulum. In hac habitasse platea dictumst. Integer a metus ac leo venenatis auctor id vel odio. Donec at leo eget nulla facilisis accumsan. Phasellus pharetra velit tempus, lobortis nunc quis, dictum mi.",
        image: "../img/img3.svg" 
    }
  };
   
    const buttons = document.querySelectorAll(".buttons button");
    const content = document.querySelector("#sub-content");

    buttons.forEach(function(button) {
      button.addEventListener("click", function() {

          buttons.forEach(function(btn) {
              btn.classList.remove("active-button");
          });

          button.classList.add("active-button");
          
  const id = button.getAttribute("id").slice(-1);

  const solution = solutions[id];
 
  content.innerHTML = `<h2>${solution.title}</h2><p>${solution.content}</p><img src="${solution.image}" alt="${solution.title} Image">`;
      });
    });
    
    buttons[0].classList.add("active-button");
    
   
