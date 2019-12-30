export declare class Toolbar {
    private defaultStyle;
    private element;
    constructor(element: HTMLElement);
    private createSearch;
    private createActions;
    private createToolbarHtml;
    private render;
}
export interface IAction {
    title: string;
    url?: string;
    color?: string;
}
export interface ISearch {
    title: string;
    placeholder?: string;
    onSearch?: (text: string, e: MouseEvent) => any;
}
export interface IToolbarSchema {
    type: "Toolbar";
    schema?: "Schema.General.v1";
    title: string;
    actions: IAction[];
    search?: ISearch;
}
