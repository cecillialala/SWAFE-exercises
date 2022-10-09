import { createAction, props } from "@ngrx/store";
import { Host } from "../hosts.service";


  export const loadHosts = createAction(//createAction function returns a function, that returns an object
    `[Hosts/API] Load hosts`
  )
  
  export const hostsLoaded = createAction(
    `[Hosts/API] Hosts loaded`,
    props<{ hosts: ReadonlyArray<Host>}>()
  )

//Se Host.component.ts && app.module om alt er på plads
  //NOTES:  
//https://dev.to/mcube25/understanding-ngrx-actions-reducers-and-effects-j9e

/*
Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.

Key concepts
Actions describe unique events that are dispatched from components and services.
State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
Selectors are pure functions used to select, derive and compose pieces of state.
State is accessed with the Store, an observable of state and an observer of actions.

EX:
export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

 */