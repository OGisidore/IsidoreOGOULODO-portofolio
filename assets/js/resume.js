import { experiences, skills } from "./data.js"

const resume =  document.querySelector("#resume")
const main = document.querySelector(".main")
const modal = document.querySelector("#modal")



window.onload = ()=>{


    const closeModal = ()=>{
        const modal = document.querySelector(".modalDetailsSkills")
        modal.classList.contains("active")? modal.classList.remove("active") : null;
    }
    const displayExperience = ()=>{
        resume.innerHTML = ""
        experiences.map((experience)=>{
            console.log(experience);
            resume.innerHTML += `
            <div class="experience">
                    <div class="period">
                        <div class="time"> ${experience.startMonth.toUpperCase()} <span class="year" > ${experience.startYear} </span> - ${experience.endMonth.toUpperCase()}  <span class="year" > ${experience.endYear} </span> </div>
                        <div class="reference subTitle"> ${experience.reference} </div>
                    </div>
                    <div class="verticalbar"></div>
                    <div class="description">
                        <h3 class=""> ${experience.title} </h3>
                        <ul class="MiniTitle">
                        ${
                       experience.Tasks.map((task)=>{
                            if (typeof(task) === "object" ) {
                                return `<ul>
                                ${task.map((tk)=>{
                                    return `<li>${tk}</li>`
                                }).join("")}
                                </ul>`
                                
                            } else{
                                return `<li>${task}</li>`
                            }
                            
                             
                        }).join("")
                        
                        
                        }
                            
                            
                        </ul>
                    </div>
                </div>
            `
        })
    }
    displayExperience()


     const displaySKills = ()=>{
    skills.map((skill)=>{
    document.querySelector(" .main").innerHTML += `
          <button data-id="${skill._id}" class="animated-button"><img src=${skill.imgUrl} alt="${skill.name}" data-id="${skill._id}" ></button>
    `
    })
  }
  displaySKills()
    
const displaydetailsModal = (e)=>{
    const id = e.target.dataset.id
    const skill = skills.find((skil)=> skil._id === id)
    modal.classList.toggle("active")
    console.log(modal);
   
   
}


    // section of skills animation on the screen

    const buttons = document.querySelectorAll('.animated-button');
    let style = window.getComputedStyle(main)
    let width = parseInt(style.width)
    

    window.onresize = ()=>{
        width = parseInt(style.width)
        buttons.forEach((button) => {
            randomPosition(button);
            button.onclick = displaydetailsModal

            // button.addEventListener('click', (e) => {
            //     alert('Bouton cliqué!');
            // });

            moveButton(button);
        });

       
    }
            const randomPosition = (button) => {
               
                let w = Math.random() * (width - button.offsetWidth);
                let x = w < 0 ? -(w) : w;
                let y = Math.random() * (parseInt(style.height) - button.offsetHeight);
                button.style.left = `${x}px`;
                button.style.top = `${y}px`;
                button.dataset.x = x;
                button.dataset.y = y;
            };

            buttons.forEach((button) => {
                randomPosition(button);

                // button.addEventListener('click', (e) => {
                //     randomPosition(e.target);
                //     displaydetailsModal()
                // });
                button.onclick = displaydetailsModal


                moveButton(button);
            });

            function moveButton(button) {
                const speed = 0.3; 
                let direction = Math.random() * 360;
                let deltaX = speed * Math.cos(direction);
                let deltaY = speed * Math.sin(direction);

                function animate() {
                    let x = parseFloat(button.dataset.x);
                    let y = parseFloat(button.dataset.y);

                    x += deltaX;
                    y += deltaY;

                    if (x < 0 || x > width - button.offsetWidth) deltaX *= -1;
                    if (y < 0 || y > parseInt(style.height) - button.offsetHeight) deltaY *= -1;

                    button.style.left = `${x}px`;
                    button.style.top = `${y}px`;

                    button.dataset.x = x;
                    button.dataset.y = y;

                    requestAnimationFrame(animate);
                }

                animate();
            }

}