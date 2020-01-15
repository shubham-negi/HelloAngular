import { Component, OnInit } from '@angular/core';
import { EditorSetting } from '../editor-settings.service';

@Component({
  selector: 'app-live-class',
  templateUrl: './live-class.component.html',
  styleUrls: ['./live-class.component.css'],
  providers: [
    EditorSetting
  ]
})
export class LiveClassComponent implements OnInit {

  isEditorVisible: boolean;
  // store user preferences
  editorConfig: object;

  constructor(private _editor: EditorSetting) {}

  ngOnInit() {
    if (this._editor.editorConfig['isExpanded']) {
      this.isEditorVisible = true;
    } else {
      console.log(this._editor);
    }
  }
  
  toggleEditor() {
    this.isEditorVisible = !this.isEditorVisible;
    this._editor.saveUserPreference('isExpanded', this.isEditorVisible);
  }

}
