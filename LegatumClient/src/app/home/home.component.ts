import { Component, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';
import { RegisterComponent } from '../register/register.component'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;
  urlParam: string;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(
    private authService: AuthService,
    private login: LoginComponent,
    private register: RegisterComponent) { }

  // Check to see if user is logged in and if so display logged in features
  checkIfLoggedIn() {
    if (this.authService.isLoggedIn) {
      console.log('Is logged in: true');
      this.isLoggedIn = true;
      // this.urlParam = this.authService.email;
    } else {
      console.log('User is not logged in');
    }
  }

  handleLogin(): any {
    this.login.handleLogin();
  }

  handleRegister(): any {
    this.register.registerUser();
  }

  ngOnInit() {
    this.checkIfLoggedIn();
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParams = {
      particles: {
        number: {
          'value': 75,
          'density': {
            'enable': true,
            'value_area': 500
          }
        },
        color: {
          'value': '#743ade'
        },
        shape: {
          'type': 'triangle',
          'stroke': {
            'width': 2,
            'color': '#ffb3ff'
          },
          'polygon': {
            'nb_sides': 4
          },
          'image': {
            'src': './eth.svg',
            'width': 100,
            'height': 100
          }
        },
        opacity: {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.2,
            'sync': false
          }
        },
        size: {
          'value': 4,
          'random': true,
          'anim': {
            'enable': true,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        line_linked: {
          'enable': true,
          'distance': 150,
          'color': '#932ab3',
          'opacity': 0.9,
          'width': 1
        },
        move: {
          'enable': true,
          'speed': 2,
          'direction': 'bottom-right',
          'random': false,
          'straight': true,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': true,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      interactivity: {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'repulse'
          },
          onclick: {
            'enable': true,
            'mode': 'repulse'
          },
          'resize': true
        },
        modes: {
          'grab': {
            'distance': 150,
            'line_linked': {
              'opacity': 1
            }
          },
          bubble: {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 1,
            'speed': 3
          },
          repulse: {
            'distance': 200
          },
          push: {
            'particles_nb': 4
          },
          remove: {
            'particles_nb': 2
          }
        }
      },
      retina_detect: true,
    };
  }


}
