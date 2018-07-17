import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import {MatCardModule
    ,MatToolbarModule
    ,MatButtonModule
    ,MatCheckboxModule
                        } from '@angular/material'

@NgModule({
      imports:[
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        FormsModule,
        MatFormFieldModule,
        MatListModule
    ]
    ,exports:[
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        FormsModule,
        MatFormFieldModule,
        MatListModule
    ]
})

export class materialModule{

}