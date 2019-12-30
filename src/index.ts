export class Toolbar {
//   private static style = {};
  private defaultStyle = {
    backgroundColor: "black",
    height: 70,
    titleFontSize: 16,
    subTitleSize: 14,
    searchTitle:"Search",
    searchPlaceHolder:'Search'
  };
  private element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
  }
  private createSearch = (search:ISearch):HTMLElement=>{
        const form = document.createElement("form");
      form.setAttribute("class","form-inline my-2 my-lg-0");

      const input = document.createElement('input');
      input.setAttribute("class","form-control mr-sm-2");
      input.setAttribute("type","search");
      input.setAttribute("placeholder",search.placeholder || this.defaultStyle.searchPlaceHolder);
      form.appendChild(input);

      const button = document.createElement('button');
      button.setAttribute("class","btn btn-outline-success my-2 my-sm-0");
      button.type = 'submit';
      button.innerText = search.title || this.defaultStyle.searchTitle;
      button.onclick = (e)=>search.onSearch && search.onSearch(input.value,e);
      form.appendChild(button);

      return form;
  }
  private createActions = (actions:IAction[]):HTMLElement=>{
      const Ul = document.createElement('ul');
      Ul.setAttribute('class','navbar-nav');

      if(actions && actions.length > 0){
          actions.forEach((action:IAction,index:number)=>{

            const li = document.createElement('li');
            li.setAttribute('class','nav-item');
            const a = document.createElement('a');
            a.setAttribute('class','nav-link');
            a.href = action.url || '#';
            a.innerText = action.title;

            li.appendChild(a);

            Ul.appendChild(li);
          });

      }

      return Ul;
  }
  private createToolbarHtml = (schema:IToolbarSchema):HTMLDivElement=>{
      const DivElement = document.createElement('div');
      const NavTag = document.createElement('nav');
      NavTag.setAttribute('class','navbar navbar-expand-lg navbar-light bg-light');

      const Title = document.createElement('a');
      Title.innerText = schema.title;
      Title.setAttribute('class','navbar-brand');
      NavTag.appendChild(Title);

      const Actions  = document.createElement('div');
      Actions.setAttribute('class','collapse navbar-collapse');
      Actions.appendChild(this.createActions(schema.actions));
      NavTag.appendChild(Actions);

      if(schema.search){
          NavTag.appendChild(this.createSearch(schema.search));
      }

      DivElement.appendChild(NavTag);
      // processing
      return DivElement;    
  }
  private render(schema:IToolbarSchema) {
      if(this.element instanceof HTMLElement && this.element){
          if(schema){
            const ToolbarDivResult = this.createToolbarHtml(schema);
            this.element.appendChild(ToolbarDivResult);
          }
          else{
              console.error('Please provide a valid schema')
          }
      }
      else{
          console.error('Please provide a valid HTML element.');
          return null;
      }
  }
}

export interface IAction {
    title: string;
    url?:string;
    color?: string;
}

export interface ISearch{
    title:string;
    placeholder?:string;
    onSearch?:(text:string,e:MouseEvent)=>any
}

export interface IToolbarSchema {
  type: "Toolbar";
  schema?: "Schema.General.v1";
  title:string;
  actions: IAction[];
  search?: ISearch;
}