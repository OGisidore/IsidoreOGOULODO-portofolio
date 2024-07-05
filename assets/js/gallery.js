import { projects } from "./data.js"



const gallery = document.querySelector(".projects")
let projectsPerPage = 6
let currentIndex = 0
let currentData = [...projects]
const filters = document.querySelector("#filter")

window.onload = ()=>{


    const closeModal = ()=>{
        document.querySelector(".DetailsModals").classList.remove("active")        
    }
    // 
    const displayModal = (e)=>{
        const id = e.target.dataset.id
        const currentElement = projects.find((projet)=> projet._id === id)
        document.querySelector(".modal").innerHTML = `
        <div class="DetailsModals active">
          <div> <img src="assets/images/galery/icon-close.svg" alt="close-icon" class="close"> </div>
            <div class="informations">
                <div class="illustrationVideo">
                    <video src="assets/videos/alldocs.webm" muted autoplay></video>
                    <div class="title">
                      Name : ${currentElement.projectTitle}
                    </div>
                    <div class="type">
                      Type : ${currentElement.typeOFpreoject}
                    </div>
                    <div class="Technologies">
                      <strong>Stacks</strong> : ${currentElement.technologies}
                    </div>
                    <div class="author">
                      <strong>Author</strong> : ${currentElement.Authors}
                    </div>
                </div>
            </div>
            <div class="descriptions">
              <div class="description">
                <h3>Description</h3>
                <p>${currentElement.Description}</p>
              </div>
              

              <div class="fonctionnality">
                <h2>Fonctionlités principales</h2>
                <ul>
                ${currentElement.functionality.map((item)=>{
                  const arr = Object.entries(item)
                  const [key, value] = arr[0]
                  console.log(key);
                  
                      return  `<li><strong>${key}</strong> : ${value}.</li>`  
                  
                }).join("")}
                </ul>
              </div>
              <div class="storage">
                    ${currentElement.conclusion}
              </div>
              <div class="collaboration">
               Collaborateurs :  ${currentElement.contributors}
              </div>
              <div class="CTA">
            <div class="sourceCode"> <a href="${currentElement.SourceCode}" target="_blank" rel="noopener noreferrer">Code source</a> </div>
            <div class="Demo"><a href="${currentElement.Demo}" target="_blank" rel="noopener noreferrer">Demo</a></div>
            <div class="close">Retour</div>
          </div>
              


            </div>
        </div>
        `
        document.querySelectorAll(".close").forEach((closebtn)=>{closebtn.onclick = closeModal}) 

    }

    // 
    const displayGalery = (data = currentData)=>{
        gallery.innerHTML = ""
        if (data.length === 0) {
          gallery.innerHTML = `<p class="paragraphs"> Aucun projet realisé avec ces technologies pour le moment </p>`
          
        }
        if (data.length > projectsPerPage) {
          for (let i = 0; i < projectsPerPage; i++) {
            const itemIndex = (currentIndex + i) % data.length;
            const project = data[itemIndex]
            gallery.innerHTML += `
            <div class="project">
              <img
                src="${project.coverUrl}"
                alt="${project.projectTitle}"
              />
              <div class="details" data-id="${project._id}" >
                <img
                  src="assets/images/galery/arrow-left-long.svg"
                  alt=" arrow lwft"
                  data-id="${project._id}"
                />
              </div>
            </div>
            
            `
            
        }
        }else{
          data.map((projet)=>{
            gallery.innerHTML += `
            <div class="project">
              <img
                src="${projet.coverUrl}"
                alt="${projet.projectTitle}"
              />
              <div class="details" data-id="${projet._id}" >
                <img
                  src="assets/images/galery/arrow-left-long.svg"
                  alt=" arrow lwft"
                  data-id="${projet._id}"
                />
              </div>
            </div>
            
            `

          })
        }

        
        const details = document.querySelectorAll(".details")
        details.forEach((dt)=>{
            dt.onclick = displayModal
        })
       

    }

    displayGalery()
    // 
    const handleFilterchange = (e)=>{
      const query = e.target.value
      query.trim()==="All"? currentData = [...projects]:
      currentData = projects.filter((project)=>project.stack.trim() === query);
      displayGalery(currentData)

    }


    filters.onchange = handleFilterchange
    

    
}