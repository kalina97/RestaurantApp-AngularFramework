import { trigger, transition, style, animate } from '@angular/animations';

export let slideDown = trigger('slideDown',[
    transition("void => *",[
      style({transform:'translateY(155px)',opacity:0}),
      animate('3s')
    ])
  ])