import { trigger, transition, style, animate } from '@angular/animations';

export let hover = trigger('hover',[
    transition("void => *",[
        style({width:350,height:350,opacity:0}),
      animate('1s')
    ])
  ])