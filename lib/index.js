(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("myLibrary", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.myLibrary = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Toolbar = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Toolbar =
  /*#__PURE__*/
  function () {
    //   private static style = {};
    function Toolbar(element) {
      var _this = this;

      _classCallCheck(this, Toolbar);

      _defineProperty(this, "defaultStyle", {
        backgroundColor: "black",
        height: 70,
        titleFontSize: 16,
        subTitleSize: 14,
        searchTitle: "Search",
        searchPlaceHolder: 'Search'
      });

      _defineProperty(this, "element", void 0);

      _defineProperty(this, "createSearch", function (search) {
        var form = document.createElement("form");
        form.setAttribute("class", "form-inline my-2 my-lg-0");
        var input = document.createElement('input');
        input.setAttribute("class", "form-control mr-sm-2");
        input.setAttribute("type", "search");
        input.setAttribute("placeholder", search.placeholder || _this.defaultStyle.searchPlaceHolder);
        form.appendChild(input);
        var button = document.createElement('button');
        button.setAttribute("class", "btn btn-outline-success my-2 my-sm-0");
        button.type = 'submit';
        button.innerText = search.title || _this.defaultStyle.searchTitle;

        button.onclick = function (e) {
          return search.onSearch && search.onSearch(input.value, e);
        };

        form.appendChild(button);
        return form;
      });

      _defineProperty(this, "createActions", function (actions) {
        var Ul = document.createElement('ul');
        Ul.setAttribute('class', 'navbar-nav');

        if (actions && actions.length > 0) {
          actions.forEach(function (action, index) {
            var li = document.createElement('li');
            li.setAttribute('class', 'nav-item');
            var a = document.createElement('a');
            a.setAttribute('class', 'nav-link');
            a.href = action.url || '#';
            a.innerText = action.title;
            li.appendChild(a);
            Ul.appendChild(li);
          });
        }

        return Ul;
      });

      _defineProperty(this, "createToolbarHtml", function (schema) {
        var DivElement = document.createElement('div');
        var NavTag = document.createElement('nav');
        NavTag.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');
        var Title = document.createElement('a');
        Title.innerText = schema.title;
        Title.setAttribute('class', 'navbar-brand');
        NavTag.appendChild(Title);
        var Actions = document.createElement('div');
        Actions.setAttribute('class', 'collapse navbar-collapse');
        Actions.appendChild(_this.createActions(schema.actions));
        NavTag.appendChild(Actions);

        if (schema.search) {
          NavTag.appendChild(_this.createSearch(schema.search));
        }

        DivElement.appendChild(NavTag); // processing

        return DivElement;
      });

      this.element = element;
    }

    _createClass(Toolbar, [{
      key: "render",
      value: function render(schema) {
        if (this.element instanceof HTMLElement && this.element) {
          if (schema) {
            var ToolbarDivResult = this.createToolbarHtml(schema);
            this.element.appendChild(ToolbarDivResult);
          } else {
            console.error('Please provide a valid schema');
          }
        } else {
          console.error('Please provide a valid HTML element.');
          return null;
        }
      }
    }]);

    return Toolbar;
  }(); // Toolbar Schema

  /*{
      type:'Toolbar',
      schema:"Schema.General.v1",
      actions:[
          {
              title:'Title',
              color:'red'
          }
      ]
  }
  */


  _exports.Toolbar = Toolbar;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJUb29sYmFyIiwiZWxlbWVudCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInRpdGxlRm9udFNpemUiLCJzdWJUaXRsZVNpemUiLCJzZWFyY2hUaXRsZSIsInNlYXJjaFBsYWNlSG9sZGVyIiwic2VhcmNoIiwiZm9ybSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0U3R5bGUiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbiIsInR5cGUiLCJpbm5lclRleHQiLCJ0aXRsZSIsIm9uY2xpY2siLCJlIiwib25TZWFyY2giLCJ2YWx1ZSIsImFjdGlvbnMiLCJVbCIsImxlbmd0aCIsImZvckVhY2giLCJhY3Rpb24iLCJpbmRleCIsImxpIiwiYSIsImhyZWYiLCJ1cmwiLCJzY2hlbWEiLCJEaXZFbGVtZW50IiwiTmF2VGFnIiwiVGl0bGUiLCJBY3Rpb25zIiwiY3JlYXRlQWN0aW9ucyIsImNyZWF0ZVNlYXJjaCIsIkhUTUxFbGVtZW50IiwiVG9vbGJhckRpdlJlc3VsdCIsImNyZWF0ZVRvb2xiYXJIdG1sIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQWFBLE87OztBQUNiO0FBVUUscUJBQVlDLE9BQVosRUFBa0M7QUFBQTs7QUFBQTs7QUFBQSw0Q0FUWDtBQUNyQkMsUUFBQUEsZUFBZSxFQUFFLE9BREk7QUFFckJDLFFBQUFBLE1BQU0sRUFBRSxFQUZhO0FBR3JCQyxRQUFBQSxhQUFhLEVBQUUsRUFITTtBQUlyQkMsUUFBQUEsWUFBWSxFQUFFLEVBSk87QUFLckJDLFFBQUFBLFdBQVcsRUFBQyxRQUxTO0FBTXJCQyxRQUFBQSxpQkFBaUIsRUFBQztBQU5HLE9BU1c7O0FBQUE7O0FBQUEsNENBR1gsVUFBQ0MsTUFBRCxFQUE4QjtBQUMvQyxZQUFNQyxJQUFJLEdBQUdD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UixDQUFjLCtCQUFkO0FBQ0g7QUFDSixTQVJELE1BU0k7QUFDQUQsVUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsc0NBQWQ7QUFDQSxpQkFBTyxJQUFQO0FBQ0g7QUFDSjs7OztPQXVCSDs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUb29sYmFyIHtcbi8vICAgcHJpdmF0ZSBzdGF0aWMgc3R5bGUgPSB7fTtcbiAgcHJpdmF0ZSBkZWZhdWx0U3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgaGVpZ2h0OiA3MCxcbiAgICB0aXRsZUZvbnRTaXplOiAxNixcbiAgICBzdWJUaXRsZVNpemU6IDE0LFxuICAgIHNlYXJjaFRpdGxlOlwiU2VhcmNoXCIsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6J1NlYXJjaCdcbiAgfTtcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG4gIHByaXZhdGUgY3JlYXRlU2VhcmNoID0gKHNlYXJjaDpJU2VhcmNoKTpIVE1MRWxlbWVudD0+e1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJmb3JtLWlubGluZSBteS0yIG15LWxnLTBcIik7XG5cbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJmb3JtLWNvbnRyb2wgbXItc20tMlwiKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInNlYXJjaFwiKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsc2VhcmNoLnBsYWNlaG9sZGVyIHx8IHRoaXMuZGVmYXVsdFN0eWxlLnNlYXJjaFBsYWNlSG9sZGVyKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXktMiBteS1zbS0wXCIpO1xuICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBzZWFyY2gudGl0bGUgfHwgdGhpcy5kZWZhdWx0U3R5bGUuc2VhcmNoVGl0bGU7XG4gICAgICBidXR0b24ub25jbGljayA9IChlKT0+c2VhcmNoLm9uU2VhcmNoICYmIHNlYXJjaC5vblNlYXJjaChpbnB1dC52YWx1ZSxlKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgcmV0dXJuIGZvcm07XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVBY3Rpb25zID0gKGFjdGlvbnM6SUFjdGlvbltdKTpIVE1MRWxlbWVudD0+e1xuICAgICAgY29uc3QgVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgVWwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ25hdmJhci1uYXYnKTtcblxuICAgICAgaWYoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA+IDApe1xuICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOklBY3Rpb24saW5kZXg6bnVtYmVyKT0+e1xuXG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbmF2LWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCduYXYtbGluaycpO1xuICAgICAgICAgICAgYS5ocmVmID0gYWN0aW9uLnVybCB8fCAnIyc7XG4gICAgICAgICAgICBhLmlubmVyVGV4dCA9IGFjdGlvbi50aXRsZTtcblxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICAgICAgICAgIFVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gVWw7XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVUb29sYmFySHRtbCA9IChzY2hlbWE6SVRvb2xiYXJTY2hlbWEpOkhUTUxEaXZFbGVtZW50PT57XG4gICAgICBjb25zdCBEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBOYXZUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgIE5hdlRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0Jyk7XG5cbiAgICAgIGNvbnN0IFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgVGl0bGUuaW5uZXJUZXh0ID0gc2NoZW1hLnRpdGxlO1xuICAgICAgVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ25hdmJhci1icmFuZCcpO1xuICAgICAgTmF2VGFnLmFwcGVuZENoaWxkKFRpdGxlKTtcblxuICAgICAgY29uc3QgQWN0aW9ucyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIEFjdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZScpO1xuICAgICAgQWN0aW9ucy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFjdGlvbnMoc2NoZW1hLmFjdGlvbnMpKTtcbiAgICAgIE5hdlRhZy5hcHBlbmRDaGlsZChBY3Rpb25zKTtcblxuICAgICAgaWYoc2NoZW1hLnNlYXJjaCl7XG4gICAgICAgICAgTmF2VGFnLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2VhcmNoKHNjaGVtYS5zZWFyY2gpKTtcbiAgICAgIH1cblxuICAgICAgRGl2RWxlbWVudC5hcHBlbmRDaGlsZChOYXZUYWcpO1xuICAgICAgLy8gcHJvY2Vzc2luZ1xuICAgICAgcmV0dXJuIERpdkVsZW1lbnQ7ICAgIFxuICB9XG4gIHByaXZhdGUgcmVuZGVyKHNjaGVtYTpJVG9vbGJhclNjaGVtYSkge1xuICAgICAgaWYodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGhpcy5lbGVtZW50KXtcbiAgICAgICAgICBpZihzY2hlbWEpe1xuICAgICAgICAgICAgY29uc3QgVG9vbGJhckRpdlJlc3VsdCA9IHRoaXMuY3JlYXRlVG9vbGJhckh0bWwoc2NoZW1hKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChUb29sYmFyRGl2UmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBzY2hlbWEnKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBIVE1MIGVsZW1lbnQuJyk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHVybD86c3RyaW5nO1xuICAgIGNvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2h7XG4gICAgdGl0bGU6c3RyaW5nO1xuICAgIHBsYWNlaG9sZGVyPzpzdHJpbmc7XG4gICAgb25TZWFyY2g/Oih0ZXh0OnN0cmluZyxlOk1vdXNlRXZlbnQpPT5hbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVG9vbGJhclNjaGVtYSB7XG4gIHR5cGU6IFwiVG9vbGJhclwiO1xuICBzY2hlbWE/OiBcIlNjaGVtYS5HZW5lcmFsLnYxXCI7XG4gIHRpdGxlOnN0cmluZztcbiAgYWN0aW9uczogSUFjdGlvbltdO1xuICBzZWFyY2g/OiBJU2VhcmNoO1xufVxuXG4vLyBUb29sYmFyIFNjaGVtYVxuLyp7XG4gICAgdHlwZTonVG9vbGJhcicsXG4gICAgc2NoZW1hOlwiU2NoZW1hLkdlbmVyYWwudjFcIixcbiAgICBhY3Rpb25zOltcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6J1RpdGxlJyxcbiAgICAgICAgICAgIGNvbG9yOidyZWQnXG4gICAgICAgIH1cbiAgICBdXG59XG4qLyJdfQ==