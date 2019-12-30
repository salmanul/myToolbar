# Getting started

# What is this?

This is a small example of how to use shared Toolbar components.You can pass a schema, which uses to render Toolbar in the specified element.
eg :
```html
 <script>
      var schema = {
        type:"Toolbar",
        title:"Navbar",
        actions:[
          {
            title:'Home',
            url:'#/home',
          },
          {
            title:'Contact',
            url:'#/contact',
          },
        ],
        search:{
          title:"Search",
          onSearch:onSearch
        }
      }
      function onSearch(serchText,e) {
        console.log('onSearch!',searchText,e);
      } 
        if(myLibrary){
            var element = document.getElementById('c-toolbar'); // This element is used to render toolbar.
            var toolbarElement = new myLibrary.Toolbar(element);
            toolbarElement.render(schema);
        }
    </script>
```

# How do I use it?

## Build the library

```sh
npm run build
```

# How would I set this up myself?

## Install your dependencies

Either run the following:

```sh
npm i
```

or make sure that you add the appropriate `"devDependencies"` entries to your `package.json` and run `npm install`:

```json
"devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.4.0",
    "@babel/plugin-proposal-class-properties": "^7.4.0",
    "@babel/plugin-proposal-numeric-separator": "^7.2.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.4.0",
    "@babel/preset-env": "^7.7.7",
    "@babel/preset-typescript": "^7.3.3",
    "typescript": "^3.3.3"
}
```


# How do I change it?

## How to change the UI of Toolbar?
You can see all UI styles which is defined in Toolbar class,
```js
export class Toolbar {...}
```
Note : `Toolbar` using bootstrap styles now.
## Adding more elements
This library utilizing `Schema` to render Toolbar component.So,you can extend the schema to add more ui elements support.

