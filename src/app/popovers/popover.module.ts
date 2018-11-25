import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { XwingModule } from '../components/xwing.module';

import { ConditionMenuComponent } from './condition-menu/condition-menu.component';
import { ConditionPopoverComponent } from './condition-popover/condition-popover.component';
import { DamageDeckActionsComponent } from './damage-deck-actions/damage-deck-actions.component';
import { DamagePopoverComponent } from './damage-popover/damage-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XwingModule
  ],
  declarations: [
    ConditionMenuComponent,
    ConditionPopoverComponent,
    DamageDeckActionsComponent,
    DamagePopoverComponent,
  ],
  exports: [
  ],
  entryComponents: [
    ConditionMenuComponent,
    ConditionPopoverComponent,
    DamageDeckActionsComponent,
    DamagePopoverComponent,
  ]
})
export class PopoverModule {}
