// angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';

// ngrx modules
import {
    StoreModule,
    combineReducers,
    ActionReducer
} from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// material modules best practice
import {
    MdProgressBarModule,
    MdInputModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdButtonToggleModule,
    MdTooltipModule
} from '@angular/material';
import 'hammerjs';

// this is required for AOT compile
//export interface State {
//  todos;
//  filter;
//  undoable;
//}
//
//const reducers = {
//  todos: undoable(todos),
//  filter
//};
//
//const developmentReducer: ActionReducer<State> = compose(combineReducers)(reducers);
//const productionReducer: ActionReducer<State> = combineReducers(reducers);
//
//export function reducer(state: any, action: any) {
//  if (environment.production) {
//    return productionReducer(state, action);
//  } else {
//    return developmentReducer(state, action);
//  }
//}

@NgModule({
  declarations: [
    // components
    AppComponent
  ],
  imports: [
    // Angular
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    // Material
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonToggleModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    // ngrx
    //StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // EffectsModule.run(BookEffects)
    //!environment.production ? StoreDevtoolsModule.instrumentOnlyWithExtension() : [] when you want to not have the devtools in production mode
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
