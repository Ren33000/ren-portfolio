import 'bootstrap';
import Typed from 'typed.js';
import AOS from 'aos';

if (document.getElementById("animate")) {
  
new Typed('#animate', {
    strings: ["coder", "web-dev", "Front-End developer"],
    typeSpeed: 50,
    loop: true
  });
}

 AOS.init();