import {  stepItems, witnesses } from "./data.js";

var video = document.getElementById("Vid-illu");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
let itemPerPage = 2;
let currentIndex = 1;

const steps = document.querySelector(".steps");

window.onload = () => {

  
  steps.innerHTML = "";

  // step display fn
  console.time("bloc d'execution de la fonction disolay")
      const displayStep = () => {
    stepItems.map((item) => {
      steps.innerHTML += `
            <div class="step" data-id="${item._id}">
                <div class="visible" data-id="${item._id}">
                  <div class="icon"> ${item._id + 1} </div>
                  <div class="article">
                  ${item.title}
                  </div>
                </div>
                <div class="progressBarContainer">
                  <div class="item${item._id} progressBar" ></div>
                </div>
                <div class="description">
                  ${item.description}
                </div>
                 <div class="IllustrationStep">
              <video
                id="Vid-illu"
                src=${item.videoUrls}
                muted
                autoplay
                    ></video>
            </div>
              </div>
            `
            console.log("super");
    });
       };
      displayStep();
      // console.log(displayStep());
  console.timeEnd("bloc d'execution")

  let curentStep = 0;
  const stepsDiv = document.querySelectorAll(".step");

  // illustr video display
  const displayVideo = (curentStep) => {
    stepsDiv.forEach((step) => {
      if (step.dataset.id === curentStep.toString()) {
        step.classList.add("active");
        step.style.minHeigth = 5 + "rem";
        step.style.transition = 3 + "s";
      } else {
        step.classList.remove("active");
      }
    });

    const allVid = document.querySelectorAll("#Vid-illu");
    allVid.forEach((vid) => {
      var style = window.getComputedStyle(vid.parentNode);
      style.display !== "none" ? (video = vid) : null;
    });
    

    video.src = stepItems.find((item) => item._id === curentStep).videoUrls;
    const progessBar = document.querySelector(".item" + curentStep);
    console.log(progessBar);

    video.ontimeupdate = () => {
      var value = (video.currentTime / video.duration) * 100;
      progessBar.style.width = value + "%";
      progessBar.style.transition = 0.5 + "s";
    };

    video.onended = () => {
      progessBar.style.width = 0 + "%";
      curentStep = (curentStep + 1) % stepItems.length;
      displayVideo(curentStep);
    };
  };

  // event on step change by user
  stepsDiv.forEach((step) => {
    step.onclick = (e) => {
      var id = e.target.dataset.id;
      if (!id) {
        id = e.target.parentNode.dataset.id;
      }
      curentStep = Number(id);
      displayVideo(curentStep);
    };
  });
  displayVideo(curentStep);

  // witness display
  const displayWitnesses = () => {
    const wit = document.querySelector(".witnesses");
    wit.innerHTML = "";
    for (let i = 0; i <= itemPerPage; i++) {
      const itemIndex = (currentIndex + i) % witnesses.length;
      const witnes = witnesses[itemIndex];
      wit.innerHTML += `
      <div class="witness">
              <div class="witnessProfil">
                <img src="${witnes.imgUrl}" alt="${witnes.fullName}">
                <div class="name"> <p>${witnes.fullName} </p> <span>${witnes.userName}</span>   </div>
              </div>
              <div class="message">${witnes.message}</div>
              <div class="time">
                <span>${witnes.publishTime}</span> <span class="dot"></span> <span>${witnes.publishDate}</span> <span class="dot"></span> <div class="app">Twitter for Android</div>
              </div>
              <div class="reaction">
                <div class="retweets">
                  <div class="count"><strong>${witnes.RetweetsCount}</strong> Retweets</div>
                  <div class="icon"></div>
                </div>
                <div class="Quotes">
                  <div class="count"> <strong>${witnes.QotesCount}</strong>  Quotes Tweets</div>
                  <div class="icon"></div>
                </div>
                <div class="Likes">
                  <div class="count"><strong>${witnes.likesCount}</strong> Likes</div>

                </div>
              </div>
              
            </div>
      `;
    }
    };
  displayWitnesses();

  // window rezise or media querry on js
  window.onresize = () => {
    itemPerPage = window.innerWidth <= "823" ? witnesses.length : 2;
    displayWitnesses();
  };

  // next and previous reactivity

  next.onclick = () => {
    currentIndex = (currentIndex + itemPerPage) % witnesses.length;
    displayWitnesses();
  };
  previous.onclick = () => {
    currentIndex =
      (currentIndex - itemPerPage + witnesses.length) % witnesses.length;
    displayWitnesses();
  };

console.clear()
             
}
