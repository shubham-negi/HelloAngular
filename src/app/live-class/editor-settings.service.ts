import { Injectable } from "@angular/core";

@Injectable()
export class EditorSetting {

    editorConfig: object = {};

    constructor() {
        this.initEditorSettings();
    }

    initEditorSettings() {
        if (this.getEditorData()) {
            console.log('user has used editor before');
            this.editorConfig = this.getEditorData();
        } else {
            this.editorConfig['isExpanded'] = false;
            this.editorConfig['selectedLang'] = 'javascript';
            this.editorConfig['selectedTheme'] = 'chrome';
        }
    }

    updateUserPreference() {
        localStorage.setItem('editor_settings', JSON.stringify(this.editorConfig));
    }

    saveUserPreference(key, value) {
        if (key in this.editorConfig) {
            this.editorConfig[key] = value;
            this.updateUserPreference();
        } else {
            console.log(`unable to save editor setting ${key} ${value}`);
        }
    }

    getEditorData() {
        return JSON.parse(localStorage.getItem('editor_settings'));
    }

}