"use strict";(self.webpackChunkpoly_docs=self.webpackChunkpoly_docs||[]).push([[1910],{29:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"inf2010/iterator","title":"Iterator","description":"Goal","source":"@site/docs/inf2010/iterator.md","sourceDirName":"inf2010","slug":"/inf2010/iterator","permalink":"/poly-docs/docs/inf2010/iterator","draft":false,"unlisted":false,"editUrl":"https://github.com/polykarma/poly-docs/docs/inf2010/iterator.md","tags":[],"version":"current","lastUpdatedBy":"polykarma","lastUpdatedAt":1731633106000,"frontMatter":{"title":"Iterator"},"sidebar":"sidebar","previous":{"title":"LinkedList","permalink":"/poly-docs/docs/inf2010/linkedlist"},"next":{"title":"Stacks","permalink":"/poly-docs/docs/inf2010/stacks"}}');var r=n(4848),o=n(8453);const s={title:"Iterator"},a="Iterator",l={},c=[{value:"Goal",id:"goal",level:2},{value:"Description",id:"description",level:2},{value:"Interface",id:"interface",level:2},{value:"LinkedList with vs without Iterator",id:"linkedlist-with-vs-without-iterator",level:2}];function d(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"iterator",children:"Iterator"})}),"\n",(0,r.jsx)(t.h2,{id:"goal",children:"Goal"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"To provide a way to access the elements of a Collection sequentially"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"The iterator design pattern allows us to access the elements of a collection object sequentially without exposing its underlying representation. We can then implement a custom traversal technique for each collection."}),"\n",(0,r.jsx)(t.p,{children:"For example, we can use an iterator to traverse a list with a for-each loop as well as a tree structure."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.p,{children:"The iterator interface is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public interface Iterator<T> {\n    boolean hasNext();\n    T next();\n    void remove();\n}\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hasNext()"}),": Returns true if there are more elements in the collection by checking the current position of the iterator."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"next()"}),": Returns the next element in the collection and advances the iterator."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"remove()"}),": Removes the last element returned by the iterator from the collection."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This allows us to use the iterator in a while-loop:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"Iterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String s = it.next();\n    System.out.println(s);\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"or a for-each loop:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"for (String s : list) {\n    System.out.println(s);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"linkedlist-with-vs-without-iterator",children:"LinkedList with vs without Iterator"}),"\n",(0,r.jsx)(t.p,{children:"Without an implementation of an iterator, a linkedlist must be traversed node-by-node with a traversal in order to find the right index, then to remove the node must perform a second pass in order to find the node again to remove. This is quadratic time."}),"\n",(0,r.jsx)(t.p,{children:"We can optimize this by keeping track of the node during the traversal itself with the iterator. In this case we stay in linear time."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);