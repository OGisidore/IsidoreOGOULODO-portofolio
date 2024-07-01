import { experiences, skills } from "./data.js"

const resume =  document.querySelector(".resume")
const main = document.querySelector(".main")


window.onload = ()=>{
     const displaySKills = ()=>{
    skills.map((skill)=>{
    document.querySelector(" .main").innerHTML += `
          <button class="animated-button"><img src=${skill.imgUrl} alt=""></button>
    `
    })
  }
  displaySKills()
    resume.innerHTML =""
    const displayExperience = ()=>{
        experiences.map((experience)=>{
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
                                })}
                                </ul>`
                                
                            } else{
                                return `<li>${task}</li>`
                            }
                            
                             
                        })
                        
                        
                        }
                            
                            
                        </ul>
                    </div>
                </div>
            `
        })
    }
    displayExperience()
    const buttons = document.querySelectorAll('.animated-button');
    let style = window.getComputedStyle(main)
    let width = parseInt(style.width)
    

    window.onresize = ()=>{
        width = parseInt(style.width)
        buttons.forEach((button) => {
            randomPosition(button);

            button.addEventListener('click', (e) => {
                randomPosition(e.target);
                alert('Bouton cliqué!');
            });

            moveButton(button);
        });

       
    }
            const randomPosition = (button) => {
               
                let w = Math.random() * (width - button.offsetWidth);
                let w1 = w < 0 ? -(w) : w;
                let x = (w1 / width) * 100
                console.log("main width :", style.width);
                console.log("w" ,x);
                let y = Math.random() * (parseInt(style.height) - button.offsetHeight);
                button.style.left = `${x}%`;
                button.style.top = `${y}px`;
                button.dataset.x = x;
                button.dataset.y = y;
            };

            buttons.forEach((button) => {
                randomPosition(button);

                button.addEventListener('click', (e) => {
                    randomPosition(e.target);
                    alert('Bouton cliqué!');
                });

                moveButton(button);
            });

            function moveButton(button) {
                const speed = 0.5; 
                let direction = Math.random() * 360;
                let deltaX = speed * Math.cos(direction);
                let deltaY = speed * Math.sin(direction);

                function animate() {
                    let x = parseFloat(button.dataset.x);
                    let y = parseFloat(button.dataset.y);

                    x += deltaX;
                    y += deltaY;

                    if (x < 0 || x > window.innerWidth - button.offsetWidth) deltaX *= -1;
                    if (y < 0 || y > window.innerHeight - button.offsetHeight) deltaY *= -1;

                    button.style.left = `${x}px`;
                    button.style.top = `${y}px`;

                    button.dataset.x = x;
                    button.dataset.y = y;

                    requestAnimationFrame(animate);
                }

                animate();
            }
}