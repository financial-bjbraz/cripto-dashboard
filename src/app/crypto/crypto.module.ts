import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CryptoComponent } from './crypto.component';

const routes: Routes = [{ path: '', component: CryptoComponent }];

@NgModule({
  declarations: [CryptoComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CryptoModule {}
