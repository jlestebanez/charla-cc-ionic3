import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichaPage } from './ficha';

@NgModule({
  declarations: [
    FichaPage,
  ],
  imports: [
    IonicPageModule.forChild(FichaPage),
  ],
})
export class FichaPageModule {}
