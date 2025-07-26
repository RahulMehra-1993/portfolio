import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';

const modules = [
  ButtonModule,
  CardModule,
  InputTextModule,
  PasswordModule,
  MenubarModule,
];

@NgModule({
  imports: modules,
  exports: modules
})
export class PrimeModule { }
