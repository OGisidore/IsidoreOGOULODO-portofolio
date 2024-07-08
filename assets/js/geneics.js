const header = document.querySelector(" .main .content .header")

const contactForm = document.querySelector(".contactForm ")




const closeContactForm = ()=>{
  contactForm.classList.remove("active")
}
 const displayContactForm = ()=>{ 
  contactForm.classList.toggle("active")
  contactForm.innerHTML = `
  <div class="contact active">
          <h4 class="pageTitle">Contactez moi</h4>
          <form>
            <div class="name">
                <label for="name"> Full name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Entrer votre nom"
              />
            </div>
            <div class="email">
              <label for="email"> De </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email : exemple@service.com"
              />
            </div>
            <div class="Object">
              <input
                type="text"
                name="object"
                id="object"
                placeholder="Objet"
              />
            </div>
          </form>
          
          <div id="editor"   >Salut isidore ... </div>
          <div class="actions">
            <button class="return">Return</button>
          <button class="send"> Send </button>
          </div>
        
        </div>
  `;
  const quill = new Quill('#editor', {
    theme: 'snow', 
  });
  quill.on('text-change', function(delta, oldDelta, source) {
    if (source === 'user') {
      highlightWords(quill);
    }
  });

  function highlightWords(quill) {
    const text = quill.getText(); // Get the text from the editor
    const words = text.split(/\s+/); // Split the text into words
    let index = 0;

    words.forEach(word => {
      const length = word.length;
      // Remove the highlight from all words
      quill.formatText(index, length, {'color': ''}, 'silent');
      if (word === 'projet') {
        // Apply the highlight to the word 'projet'
        quill.formatText(index, length, {'color': 'green', 'bold' : true}, 'silent');
      }
      if (word.toLowerCase() === 'error'|| word.toLowerCase() === 'erreur') {
        // Apply the highlight to the word 'projet'
        quill.formatText(index, length, {'color': 'red', 'bold' : true}, 'silent');
      }
      index += length + 1; // +1 for the space
    });
  }

  const returnedBtn = document.querySelector(".return").onclick = closeContactForm

}

 export const displayHeader = () => {
   header.innerHTML = `<div class="headerContent">
            <div class="logo">Isidore O.</div>
            <div class="navLink">
              <ul>
                <div class="nav">
                  <li class=""><a href="index.html">About</a></li>
                  <li class=""><a href="/Resume.html"> Resume</a></li>
                  <li class="galleryofProjects">
                    <a href="/Gallery.html">Gallery</a>
                  </li>
                  <li class="certificate">
                    <!-- <a href="http://" target="_blank" rel="noopener noreferrer"></a> -->
                    <a href="/Certificate.html">Certificate</a>
                  </li>
                </div>

                <li id="contact">Contact</li>
              </ul>
            </div>
          </div>`
        const contactBtn =   document.querySelector("#contact")
        contactBtn.onclick = displayContactForm
          
}

// const quill = new Quill('#editor', {
//   modules: {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ['bold', 'italic', 'underline'],
//       ['image', 'code-block'],
//     ],
//   },
//   placeholder: 'Compose an epic...',
//   theme: 'snow', // or 'bubble'
// });


// const contactBtn =   document.querySelector("#contact")
// contactBtn ? contactBtn.onclick = displayContactForm : null;

