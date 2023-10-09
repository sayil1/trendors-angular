import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [CardsComponent, SideNavComponent],
  imports: [CommonModule],
  exports: [CardsComponent, SideNavComponent],
})
export class GeneralModule {}
