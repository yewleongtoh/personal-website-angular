import { Renderer2, Component, OnInit } from '@angular/core';
import { faCode, faCropAlt, faNetworkWired, faExternalLinkAlt, faPaperPlane, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent implements OnInit{
  faCode = faCode;
  faCropAlt = faCropAlt;
  faNetworkWired = faNetworkWired;
  faExternalLinkAlt = faExternalLinkAlt;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faPaperPlane = faPaperPlane;
  faGithub = faGithub;
  faBars = faBars;
  faTimes = faTimes;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  title = 'Personal Portfolio Website';

  tablinks = document.getElementsByClassName("tab-links");
  tabcontents = document.getElementsByClassName("tab-contents");

  opentab(tabname: any, event: any) {
    for(let tablink of this.tablinks) {
      tablink.classList.remove("active-link");
    }
    for(let tabcontent of this.tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    this.renderer.addClass(event.currentTarget, 'active-link');
    document.getElementById(tabname)?.classList.add("active-tab");
  }

  openmenu() {
    let sideMenu = document.getElementById("sidemenu");
    if (sideMenu != null) {
      sideMenu.style.right = "0";
    }
  }

  closemenu() {
    let sideMenu = document.getElementById("sidemenu");
    if (sideMenu != null) {
      sideMenu.style.right = "-250px";
    }
  }
}
