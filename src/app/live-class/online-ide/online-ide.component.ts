import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-twilight';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';


const THEME = 'ace/theme/terminal';
const LANG = 'ace/mode/java';

@Component({
  selector: 'app-online-ide',
  templateUrl: './online-ide.component.html',
  styleUrls: ['./online-ide.component.css']
})
export class OnlineIdeComponent implements OnInit {

  @ViewChild('codeEditor', {static: true}) codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;
  private editorBeautify;

  private selectedLang: string;
  private languageList: any;

  private selectedTheme: string;
  private themeList: any;
  private editor: any;

  constructor() { 
    this.languageList = [
      'java', 'python', 'javascript'
    ]
    this.themeList = [
      'chrome', 'twilight', 'terminal'
    ]
  }
  changeEditorLang (newValue: string) {
    this.selectedLang = newValue;
    console.log(this.selectedLang);
    this.setLang(this.selectedLang);
  }

  changeEditorTheme (newValue: string) {
    this.selectedTheme = newValue;
    console.log(this.selectedTheme);
    this.setTheme(this.selectedTheme);
  }

  setTheme(value: string) {
    if (value) this.editor.setTheme('ace/theme/' + value);
  }

  setLang(value: string) {
    if (value) this.editor.getSession().setMode('ace/mode/' + value);
  }
  
  ngOnInit() {
    ace.require('ace/ext/language_tools');
    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions = this.getEditorOptions();

    this.codeEditor = this.createCodeEditor(element, editorOptions);
    this.editorBeautify = ace.require('ace/ext/beautify');
  }

  private createCodeEditor(element: Element, options: any): ace.Ace.Editor {
    this.editor = ace.edit(element, options);
    this.editor.setTheme(THEME);
    this.editor.getSession().setMode(LANG);
    this.editor.setShowFoldWidgets(true);
    return this.editor;
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
