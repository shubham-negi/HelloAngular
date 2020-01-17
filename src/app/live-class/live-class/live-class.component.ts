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
  isSideBarVisible: boolean;
  // store user preferences
  editorConfig: object;

  constructor(private _editor: EditorSetting) {
    // display sidebar by default
    // this.isSideBarVisible = true;
  }

  ngOnInit() {
    if (this._editor.editorConfig['isExpanded']) {
      this.isEditorVisible = true;
    } else {
      console.log(this._editor);
    }
    if (this._editor.editorConfig['isSideBarVisible']) {
      this.isSideBarVisible = true;
    } else {
      console.log(this._editor);
    }
  }

  adjustTheContent() {
    if(this.isSideBarVisible) {
      document.getElementById("main").style.marginLeft = "250px";
    } else {
      document.getElementById("main").style.marginLeft = "0px";
    }

  }
      // document.getElementById("main").style.marginLeft = "250px";

  toggleNavBar() {
    // if (!this.isSideBarVisible) {
      this.isSideBarVisible = !this.isSideBarVisible;
      this._editor.saveUserPreference('isSideBarVisible', this.isSideBarVisible);
      this.adjustTheContent();

    // } else {
    //   this.isSideBarVisible = !this.isSideBarVisible;
    // }
  }
  
  openNav() {
     document.getElementById("mySidenav").style.display = 'block';
    // document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.display = 'none';

    // document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
  }
  toggleEditor() {
    this.isEditorVisible = !this.isEditorVisible;
    this._editor.saveUserPreference('isExpanded', this.isEditorVisible);
  }

}
