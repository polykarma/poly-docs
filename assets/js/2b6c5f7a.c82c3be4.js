"use strict";(self.webpackChunkpoly_docs=self.webpackChunkpoly_docs||[]).push([[9391],{3063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"inf2010/arraylist","title":"ArrayList","description":"Goal","source":"@site/docs/inf2010/arraylist.md","sourceDirName":"inf2010","slug":"/inf2010/arraylist","permalink":"/poly-docs/docs/inf2010/arraylist","draft":false,"unlisted":false,"editUrl":"https://github.com/polykarma/poly-docs/docs/inf2010/arraylist.md","tags":[],"version":"current","frontMatter":{"title":"ArrayList"},"sidebar":"sidebar","previous":{"title":"Lists","permalink":"/poly-docs/docs/inf2010/list"},"next":{"title":"LinkedList","permalink":"/poly-docs/docs/inf2010/linkedlist"}}');var i=n(4848),s=n(8453);const a={title:"ArrayList"},d="ArrayList",l={},c=[{value:"Goal",id:"goal",level:2},{value:"Mechanics",id:"mechanics",level:2},{value:"Resizing the Array",id:"resizing-the-array",level:2},{value:"Interface",id:"interface",level:2},{value:"Complexity of Operations",id:"complexity-of-operations",level:3}];function o(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"arraylist",children:"ArrayList"})}),"\n",(0,i.jsx)(t.h2,{id:"goal",children:"Goal"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Explore how a dynamic list can be implemented using arrays"})}),"\n",(0,i.jsx)(t.h2,{id:"mechanics",children:"Mechanics"}),"\n",(0,i.jsx)(t.p,{children:"As we know an array is a contiguous block of memory that can store a fixed number of elements. The elements are stored in a linear sequence and can be accessed using an index."}),"\n",(0,i.jsx)(t.p,{children:"The downside to the array data structure is the fixed size, it has to be predefined and cannot be changed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"int[] array = new int[10];\n"})}),"\n",(0,i.jsx)(t.p,{children:"So if we have to create something dynamic (the list) out of something static (the array), our efforts must be concentrated on the resizing of the list (as other operations are fairly straightforward)."}),"\n",(0,i.jsx)(t.h2,{id:"resizing-the-array",children:"Resizing the Array"}),"\n",(0,i.jsx)(t.p,{children:"The resizing of the array is fairly intuitive but expensive. We have to create a new array with a larger size, copy all the elements from the old array to the new array, and then assign the new array to the old array."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"int[] oldArray = new int[10];\nint[] newArray = new int[20];\n\nfor (int i = 0; i < oldArray.length; i++) {\n    newArray[i] = oldArray[i];\n}\n\noldArray = newArray;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This operation is expensive because it has a time complexity of ",(0,i.jsx)(t.strong,{children:"O(n)"})," where n is the number of elements in the array."]}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.p,{children:'ArrayList implements the List interface, meaning that it provides the operations defined in the List interface "contract".'}),"\n",(0,i.jsx)(t.h3,{id:"complexity-of-operations",children:"Complexity of Operations"}),"\n",(0,i.jsx)(t.p,{children:"The complexity of operations as implemented in the ArrayList are as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Operation"}),(0,i.jsx)(t.th,{children:"Complexity"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"add()"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"O(n)"})," or O(1)"]}),(0,i.jsx)(t.td,{children:"We have to shift all the elements to the right in order to insert the current element, unless we are appending to the end"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"remove()"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"O(n)"})," or O(1)"]}),(0,i.jsx)(t.td,{children:"We have to shift all the elements to the left unless we are removing from the end of the list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"contains()"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"O(n)"})}),(0,i.jsx)(t.td,{children:"Iterating through the entire list to compare and find the element"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"size()"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"O(1)"})}),(0,i.jsx)(t.td,{children:"Return the size of the list from the tracking variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"get()"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"O(1)"})}),(0,i.jsx)(t.td,{children:"Get the element at a specific index"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"set()"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"O(1)"})}),(0,i.jsx)(t.td,{children:"Set the element at a specific index"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"isEmpty()"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"O(1)"})}),(0,i.jsx)(t.td,{children:"Check if the list is empty by checking the size variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"clear()"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"O(1)"})}),(0,i.jsx)(t.td,{children:"Clear the list by setting the size variable to 0 and the array to a new array"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);