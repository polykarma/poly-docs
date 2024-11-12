"use strict";(self.webpackChunkpoly_docs=self.webpackChunkpoly_docs||[]).push([[678],{3829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"inf2010/linkedlist","title":"LinkedList","description":"Goal","source":"@site/docs/inf2010/linkedlist.md","sourceDirName":"inf2010","slug":"/inf2010/linkedlist","permalink":"/poly-docs/fr/docs/inf2010/linkedlist","draft":false,"unlisted":false,"editUrl":"https://github.com/polykarma/poly-docs/docs/inf2010/linkedlist.md","tags":[],"version":"current","frontMatter":{"title":"LinkedList"},"sidebar":"sidebar","previous":{"title":"ArrayList","permalink":"/poly-docs/fr/docs/inf2010/arraylist"},"next":{"title":"Iterator","permalink":"/poly-docs/fr/docs/inf2010/iterator"}}');var i=t(4848),s=t(8453);const l={title:"LinkedList"},o="LinkedList",d={},h=[{value:"Goal",id:"goal",level:2},{value:"Mechanics",id:"mechanics",level:2},{value:"Traversal",id:"traversal",level:2},{value:"Rerouting References",id:"rerouting-references",level:2},{value:"What happens if we remove the head or tail node?",id:"what-happens-if-we-remove-the-head-or-tail-node",level:3},{value:"Interface",id:"interface",level:2},{value:"Complexity of Operations",id:"complexity-of-operations",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"linkedlist",children:"LinkedList"})}),"\n",(0,i.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Explore how a dynamic list can be implemented using a linked structure"})}),"\n",(0,i.jsx)(n.h2,{id:"mechanics",children:"Mechanics"}),"\n",(0,i.jsx)(n.p,{children:"A linked list is a linear data structure where each node contains a reference to the next node in the list. This allows for dynamic resizing of the list as the nodes can be added or removed without the need to resize the list like in an array."}),"\n",(0,i.jsx)(n.p,{children:"This also means our efforts must be concentrated on the traversal of the list (as other operations are fairly straightforward) as well as the management of the references between the nodes."}),"\n",(0,i.jsx)(n.p,{children:"The first node is called the head and the last node is called the tail. The tail node points to null to indicate the end of the list."}),"\n",(0,i.jsx)(n.h2,{id:"traversal",children:"Traversal"}),"\n",(0,i.jsx)(n.p,{children:"Traversing a linked list is done by starting at the head node and following the references to the next node until we reach the end of the list (when the reference is null)."}),"\n",(0,i.jsx)(n.p,{children:"Example of traversing a linked list:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Node<T> current = head;\nwhile (current != null) {\n    // Do something with the current node\n    current = current.getNext();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rerouting-references",children:"Rerouting References"}),"\n",(0,i.jsx)(n.p,{children:"When adding or removing a node from a linked list, we have to reroute the references between the nodes to maintain the integrity of the list."}),"\n",(0,i.jsx)(n.p,{children:"For example let us take the following list:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1 -> 2 -> 4 -> null\nhead: 1\ntail: 4\n"})}),"\n",(0,i.jsx)(n.p,{children:"If we want to insert the value 3 between 2 and 4, we have to reroute the references as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new node with the value 3"}),"\n",(0,i.jsx)(n.li,{children:"Set the next reference of 3 to 4 (but now we have two references to 4)"}),"\n",(0,i.jsx)(n.li,{children:"Set the next reference of 2 to 3"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1 -> 2 -> 3 -> 4 -> null\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let us now remove the value 3 from the list to demonstrate rerouting references when removing a node:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set the next reference of 2 to 4"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1 -> 2 -> 4 -> null\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now if we are dealing with a doubly linked list, our process gets a little more complicated as we have to manage the references in both directions, as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1 <-> 2 <-> 4 -> null\nhead: 1\ntail: 4\n"})}),"\n",(0,i.jsx)(n.p,{children:"If we want to insert the value 3 between 2 and 4, we have to reroute the references as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new node with the value 3"}),"\n",(0,i.jsx)(n.li,{children:"Set the next reference of 3 to 4"}),"\n",(0,i.jsx)(n.li,{children:"Set the previous reference of 3 to 2"}),"\n",(0,i.jsx)(n.li,{children:"Set the next reference of 2 to 3"}),"\n",(0,i.jsx)(n.li,{children:"Set the previous reference of 4 to 3"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1 <-> 2 <-> 3 <-> 4 -> null\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let us now remove the value 3 from the list to demonstrate rerouting references when removing a node:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set the next reference of 2 to 4"}),"\n",(0,i.jsx)(n.li,{children:"Set the previous reference of 4 to 2"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1 <-> 2 <-> 4 -> null\n"})}),"\n",(0,i.jsx)(n.p,{children:"As you can notice we are never actually deleting the node from memory, we are just rerouting the references to exclude it from the list. The garbage collector will take care of the rest in java."}),"\n",(0,i.jsx)(n.p,{children:"You'll also notice that unlike the array implementation, we don't have to shift any elements around when adding or removing nodes from the list. This is because we are just rerouting the references between the nodes. We really don't care about the physical location of the nodes in memory, just the logical sequence of the nodes. We also really don't care about the size of the list, as we just play around with the references between the nodes."}),"\n",(0,i.jsx)(n.h3,{id:"what-happens-if-we-remove-the-head-or-tail-node",children:"What happens if we remove the head or tail node?"}),"\n",(0,i.jsx)(n.p,{children:"If we remove the head node, we have to set the head reference to the next node in the list. If we remove the tail node, we have to set the tail reference to the previous node in the list."}),"\n",(0,i.jsx)(n.p,{children:"For example, if we remove the head node from the list:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set the head reference to the next node in the list"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2 -> 4 -> null\nhead: 2\ntail: 4\n"})}),"\n",(0,i.jsx)(n.p,{children:"If we remove the tail node from the list:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set the tail reference to the previous node in the list"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2 -> null\nhead: 2\ntail: 2\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.p,{children:'LinkedList implements the List interface, meaning that it provides the operations defined in the List interface "contract".'}),"\n",(0,i.jsx)(n.h2,{id:"complexity-of-operations",children:"Complexity of Operations"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Operation"}),(0,i.jsx)(n.th,{children:"Complexity"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"add()"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"O(n)"})," or O(1)"]}),(0,i.jsx)(n.td,{children:"We have to traverse the list to find the index to insert the element, unless we are appending to the end"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"remove()"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"O(n)"})," or O(1)"]}),(0,i.jsx)(n.td,{children:"We have to traverse the list to find the element to remove, unless we are removing from the end of the list"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"contains()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"O(n)"})}),(0,i.jsx)(n.td,{children:"Iterating through the entire list to compare and find the element"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"size()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"O(1)"})}),(0,i.jsx)(n.td,{children:"Return the size of the list from the tracking variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"get()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"O(n)"})}),(0,i.jsx)(n.td,{children:"Traverse the list to find the element at a specific index"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"set()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"O(n)"})}),(0,i.jsx)(n.td,{children:"Traverse the list to find the element at a specific index and set it"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isEmpty()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"O(1)"})}),(0,i.jsx)(n.td,{children:"Check if the list is empty by checking the size variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"clear()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"O(1)"})}),(0,i.jsx)(n.td,{children:"Clear the list by setting the size variable to 0 and the head to null"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);