import { trigger, transition, style, animate } from '@angular/animations';

export let scale = trigger('scale',[
    transition("void => *",[
      style({transform:'scale(0.5)'}),
      animate('2s')
    ])
  ]);