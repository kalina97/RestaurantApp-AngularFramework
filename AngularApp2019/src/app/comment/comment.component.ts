import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent{
 
  @Output() commentAdded = new EventEmitter<{description: string}>();
  @ViewChild('comment') redel:ElementRef;
  onAddComment(comment: string) {
    this.commentAdded.emit({
      description: comment
      
    });
   this.redel.nativeElement.value='';
  }
}
