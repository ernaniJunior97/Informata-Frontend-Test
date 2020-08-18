import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder,
    private loginService: LoginService
  ) {

    this.loginForm = fb.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])
      ],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(80)
      ])
      ]
    });

  }

  ngOnInit(): void {


  }


  submit(): void {
    const usuario = this.loginForm.value;

    this.loginService.login(usuario)
      .subscribe({
        next: usuarioLogado => {
          this.router.navigate(['../lista-produtos'], { relativeTo: this.route });
        },
        error: err => {
          console.log(err);
        }
      });

  }

  cadastrar(): void {
    this.router.navigate(['../cadastro-usuario'], { relativeTo: this.route });
  }
}


