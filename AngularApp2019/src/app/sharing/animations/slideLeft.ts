import { trigger, transition, style, animate } from '@angular/animations';

export let slideLeft = trigger('slideLeft',[
    transition("void => *",[
      style({left:200}),
      animate('3s ease-out')
    ])
  ])