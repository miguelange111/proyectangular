import{NgModule} from '@angular/core';

import{MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule(
    {
        imports:[
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            MatStepperModule,
            MatGridListModule,
            MatTabsModule
        ],
        exports:[
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            MatStepperModule,
            MatGridListModule,
            MatTabsModule
        ]
    }
)
export class MaterialModule{}