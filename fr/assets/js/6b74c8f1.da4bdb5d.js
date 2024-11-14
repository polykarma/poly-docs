"use strict";(self.webpackChunkpoly_docs=self.webpackChunkpoly_docs||[]).push([[3252],{4619:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"inf2010/queues","title":"Queues","description":"Goal","source":"@site/docs/inf2010/queues.md","sourceDirName":"inf2010","slug":"/inf2010/queues","permalink":"/poly-docs/fr/docs/inf2010/queues","draft":false,"unlisted":false,"editUrl":"https://github.com/polykarma/poly-docs/docs/inf2010/queues.md","tags":[],"version":"current","frontMatter":{"title":"Queues"},"sidebar":"sidebar","previous":{"title":"Stacks","permalink":"/poly-docs/fr/docs/inf2010/stacks"},"next":{"title":"HashTable","permalink":"/poly-docs/fr/docs/inf2010/hashtable"}}');var i=s(4848),l=s(8453);const r={title:"Queues"},o="Queue",d={},c=[{value:"Goal",id:"goal",level:2},{value:"Mechanics",id:"mechanics",level:2},{value:"Analogy",id:"analogy",level:2},{value:"Complexity of Operations",id:"complexity-of-operations",level:2},{value:"Use Cases",id:"use-cases",level:2}];function a(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"queue",children:"Queue"})}),"\n",(0,i.jsx)(t.h2,{id:"goal",children:"Goal"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"What if we need a List with a very specific access policy?"})}),"\n",(0,i.jsx)(t.h2,{id:"mechanics",children:"Mechanics"}),"\n",(0,i.jsx)(t.p,{children:"Once again a queue is an implementation of a List, but with a FIFO policy. This means that the first element that is added to the queue is the first one to be removed."}),"\n",(0,i.jsx)(t.h2,{id:"analogy",children:"Analogy"}),"\n",(0,i.jsx)(t.p,{children:"A queue can be visualized as a line of people waiting to buy tickets. The first person in line is the first person to be served."}),"\n",(0,i.jsx)(t.h2,{id:"complexity-of-operations",children:"Complexity of Operations"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Operation"}),(0,i.jsx)(t.th,{children:"Complexity"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enqueue()"})}),(0,i.jsx)(t.td,{children:"O(1)"}),(0,i.jsx)(t.td,{children:"Adds an element to the back of the queue"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dequeue()"})}),(0,i.jsx)(t.td,{children:"O(1)"}),(0,i.jsx)(t.td,{children:"Removes and returns the element at the front of the queue"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"peek()"})}),(0,i.jsx)(t.td,{children:"O(1)"}),(0,i.jsx)(t.td,{children:"Returns the element at the front of the queue without removing it"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(t.p,{children:"Queues are used in many applications such as:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Task scheduling in operating systems."}),"\n",(0,i.jsx)(t.li,{children:"Kafka streams in distributed systems."}),"\n",(0,i.jsx)(t.li,{children:"CI/CD pipelines in software development."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(6540);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);