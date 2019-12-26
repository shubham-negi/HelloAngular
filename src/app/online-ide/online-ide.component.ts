import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';


const THEME = 'ace/theme/github';
const LANG = 'ace/mode/javascript';

@Component({
  selector: 'app-online-ide',
  templateUrl: './online-ide.component.html',
  styleUrls: ['./online-ide.component.css']
})
export class OnlineIdeComponent implements OnInit {

  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;
  private editorBeautify;

  constructor() { }

  ngOnInit() {
    ace.require('ace/ext/language_tools');
    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions = this.getEditorOptions();

    this.codeEditor = this.createCodeEditor(element, editorOptions);
    this.editorBeautify = ace.require('ace/ext/beautify');
  }

  private createCodeEditor(element: Element, options: any): ace.Ace.Editor {
    const editor = ace.edit(element, options);
    editor.setTheme(THEME);
    editor.getSession().setMode(LANG);
    editor.setShowFoldWidgets(true);
    return editor;
  }

  private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 14,
      maxLines: Infinity,
    };
    const extraEditorOptions = {
      enableBasicAutocompletion: true
    };
    return Object.assign(basicEditorOptions, extraEditorOptions);
  }

  /**
   * @description
   *  beautify the editor content, rely on Ace Beautify extension.
   */
  public beautifyContent() {
    if (this.codeEditor && this.editorBeautify) {
      const session = this.codeEditor.getSession();
      this.editorBeautify.beautify(session);
    }
  }

  private getCode() {
    const code = this.codeEditor.getValue();
    console.log(code);
  }

  /**
   * @param content - set as the editor's content.
   */
  public setContent(content: string): void {
    if (this.codeEditor) {
      this.codeEditor.setValue(content);
    }
  }

  /**
   * @returns - the current editor's content.
   */
  public getContent() {
    if (this.codeEditor) {
      const code = this.codeEditor.getValue();
      return code;
    }
  }

  consoleCode() {
    console.log('CODE :: ', this.getContent());
  }

}
