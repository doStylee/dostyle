//created using doStyle 
const about = (props) => {
        
      return `
    <h2 class="text">about</h2>
`;
    }

const home = (props) => {
        
      return `
    <h2 class="text">home</h2>
`;
    }

const image = (props) => {
        
      return `
    <h2 class="text">image</h2>
`;
    }

function router() {
    const fragment = window.location.hash;
    let page;
    if (fragment === '#image') {
        page = image();
      } else     if (fragment === '#about') {
        page = about();
      } else {
      page = home();
    }
document.getElementById("app").innerHTML = page;
  }
 window.addEventListener("hashchange", router); 
router();
  