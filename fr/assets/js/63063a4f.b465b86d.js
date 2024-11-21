"use strict";(self.webpackChunkpoly_docs=self.webpackChunkpoly_docs||[]).push([[1262],{9985:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"log1810/traversal","title":"Tree Traversal","description":"Tree traversal is the process of systematically visiting every node in a tree.","source":"@site/docs/log1810/traversal.md","sourceDirName":"log1810","slug":"/log1810/traversal","permalink":"/poly-docs/fr/docs/log1810/traversal","draft":false,"unlisted":false,"editUrl":"https://github.com/polykarma/poly-docs/docs/log1810/traversal.md","tags":[],"version":"current","lastUpdatedBy":"polykarma","lastUpdatedAt":1732169617000,"frontMatter":{"title":"Tree Traversal"},"sidebar":"sidebar","previous":{"title":"Trees","permalink":"/poly-docs/fr/docs/log1810/trees"},"next":{"title":"Minimum Spanning Tree","permalink":"/poly-docs/fr/docs/log1810/mst"}}');var i=n(4848),t=n(8453);const o={title:"Tree Traversal"},l="Tree Traversal",a={},d=[{value:"Pre-order (Prefix) Traversal",id:"pre-order-prefix-traversal",level:2},{value:"Code Example:",id:"code-example",level:3},{value:"In-order (Infix) Traversal",id:"in-order-infix-traversal",level:2},{value:"Code Example:",id:"code-example-1",level:3},{value:"Post-order (Postfix) Traversal",id:"post-order-postfix-traversal",level:2},{value:"Code Example:",id:"code-example-2",level:3},{value:"Connection Between Traversals and Notations",id:"connection-between-traversals-and-notations",level:2},{value:"Why Prefix and Postfix Notations Are Cool",id:"why-prefix-and-postfix-notations-are-cool",level:3},{value:"Evaluating Polish and Reverse Polish Notation",id:"evaluating-polish-and-reverse-polish-notation",level:2},{value:"Polish Notation (Prefix)",id:"polish-notation-prefix",level:3},{value:"Reverse Polish Notation (Postfix)",id:"reverse-polish-notation-postfix",level:3}];function h(e){const r={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"tree-traversal",children:"Tree Traversal"})}),"\n",(0,i.jsx)(r.p,{children:"Tree traversal is the process of systematically visiting every node in a tree."}),"\n",(0,i.jsx)(r.p,{children:"Depending on the order in which nodes are visited, there are different types of traversals."}),"\n",(0,i.jsx)(r.h2,{id:"pre-order-prefix-traversal",children:"Pre-order (Prefix) Traversal"}),"\n",(0,i.jsxs)(r.p,{children:["In a ",(0,i.jsx)(r.strong,{children:"pre-order traversal"}),", the current node is visited ",(0,i.jsx)(r.strong,{children:"before"})," its children. The traversal order is:"]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Visit the current node."}),"\n",(0,i.jsx)(r.li,{children:"Traverse the left subtree."}),"\n",(0,i.jsx)(r.li,{children:"Traverse the right subtree."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"code-example",children:"Code Example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"void prefix(Node n) {\n    if (n != null) {\n        visit(n);\n        prefix(n.left);\n        prefix(n.right);\n    }\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"in-order-infix-traversal",children:"In-order (Infix) Traversal"}),"\n",(0,i.jsxs)(r.p,{children:["In an ",(0,i.jsx)(r.strong,{children:"in-order traversal"}),", the current node is visited ",(0,i.jsx)(r.strong,{children:"in between"})," its left and right subtrees. For a binary tree, the traversal order is:"]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Traverse the left subtree."}),"\n",(0,i.jsx)(r.li,{children:"Visit the current node."}),"\n",(0,i.jsx)(r.li,{children:"Traverse the right subtree."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"code-example-1",children:"Code Example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"void infix(Node n) {\n    if (n != null) {\n        infix(n.left);\n        visit(n);\n        infix(n.right);\n    }\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"post-order-postfix-traversal",children:"Post-order (Postfix) Traversal"}),"\n",(0,i.jsxs)(r.p,{children:["In a ",(0,i.jsx)(r.strong,{children:"post-order traversal"}),", the current node is visited ",(0,i.jsx)(r.strong,{children:"after"})," all its children. The traversal order is:"]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Traverse the left subtree."}),"\n",(0,i.jsx)(r.li,{children:"Traverse the right subtree."}),"\n",(0,i.jsx)(r.li,{children:"Visit the current node."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"code-example-2",children:"Code Example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"void postfix(Node n) {\n    if (n != null) {\n        postfix(n.left);\n        postfix(n.right);\n        visit(n);\n    }\n}\n"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h1,{id:"syntax-trees",children:"Syntax Trees"}),"\n",(0,i.jsx)(r.p,{children:"Syntax trees are rooted tree structures used to represent expressions, particularly in compilers and mathematical computations. For example, they help parse expressions with delimiters, following principles like BODMAS."}),"\n",(0,i.jsx)(r.h2,{id:"connection-between-traversals-and-notations",children:"Connection Between Traversals and Notations"}),"\n",(0,i.jsx)(r.p,{children:"Different tree traversals correspond to different expression notations:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Pre-order Traversal \u2192 Prefix Notation (Polish Notation)"}),(0,i.jsx)(r.br,{}),"\n","Example: ",(0,i.jsx)(r.code,{children:"+ 2 * 3 4"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"In-order Traversal \u2192 Infix Notation"}),(0,i.jsx)(r.br,{}),"\n","Example: ",(0,i.jsx)(r.code,{children:"2 + 3 * 4"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Post-order Traversal \u2192 Postfix Notation (Reverse Polish Notation)"}),(0,i.jsx)(r.br,{}),"\n","Example: ",(0,i.jsx)(r.code,{children:"2 3 4 * +"})]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"why-prefix-and-postfix-notations-are-cool",children:"Why Prefix and Postfix Notations Are Cool"}),"\n",(0,i.jsxs)(r.p,{children:["Non-infix notations (prefix and postfix) are ",(0,i.jsx)(r.strong,{children:"bracket-free"})," because their structure is inherently unambiguous."]}),"\n",(0,i.jsx)(r.p,{children:"We can use simple stack data structures in order to compute them!"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"evaluating-polish-and-reverse-polish-notation",children:"Evaluating Polish and Reverse Polish Notation"}),"\n",(0,i.jsx)(r.h3,{id:"polish-notation-prefix",children:"Polish Notation (Prefix)"}),"\n",(0,i.jsx)(r.p,{children:"To evaluate a prefix expression:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Start reading ",(0,i.jsx)(r.strong,{children:"right-to-left (RtL)"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Parse until you find an operator (delimiter)."}),"\n",(0,i.jsx)(r.li,{children:"Combine the operator with the two previous operands."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"reverse-polish-notation-postfix",children:"Reverse Polish Notation (Postfix)"}),"\n",(0,i.jsx)(r.p,{children:"To evaluate a postfix expression:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Start reading ",(0,i.jsx)(r.strong,{children:"left-to-right (LtR)"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Parse until you find an operator (delimiter)."}),"\n",(0,i.jsx)(r.li,{children:"Combine the operator with the two preceding operands."}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.p,{children:"By understanding these traversals and their connection to expression parsing, you gain a powerful toolset for compilers, interpreters, and even calculators!"})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var s=n(6540);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);