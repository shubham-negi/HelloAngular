// language-module-table.ts
const ideLanguageTable: Array<[string, string]> = [
    ['nodejs', 'ace/mode/javascript'],
    ['java', 'ace/mode/java'],
    ['python3', 'ace/mode/python'],
    ['csharp', 'ace/mode/csharp'],
    ['php', 'ace/mode/php'],
    ['ruby', 'ace/mode/ruby'],
];

export const ideLanguageMap: Map<string, string> = new Map(ideLanguageTable);
