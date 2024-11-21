"use strict";(self.webpackChunkpoly_docs=self.webpackChunkpoly_docs||[]).push([[5511],{1106:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"log1810/mst","title":"Minimum Spanning Tree","description":"Definitions","source":"@site/docs/log1810/mst.md","sourceDirName":"log1810","slug":"/log1810/mst","permalink":"/poly-docs/fr/docs/log1810/mst","draft":false,"unlisted":false,"editUrl":"https://github.com/polykarma/poly-docs/docs/log1810/mst.md","tags":[],"version":"current","lastUpdatedBy":"polykarma","lastUpdatedAt":1732169617000,"frontMatter":{"title":"Minimum Spanning Tree"},"sidebar":"sidebar","previous":{"title":"Tree Traversal","permalink":"/poly-docs/fr/docs/log1810/traversal"}}');var a=n(4848),l=n(8453);const t={title:"Minimum Spanning Tree"},r="Minimum Spanning Tree - MST",m={},o=[{value:"Definitions",id:"definitions",level:2},{value:"Goal",id:"goal",level:2},{value:"Prim&#39;s Algorithm",id:"prims-algorithm",level:2},{value:"Goal",id:"goal-1",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Kruskal&#39;s Algorithm",id:"kruskals-algorithm",level:2},{value:"Goal",id:"goal-2",level:3},{value:"Complexity",id:"complexity-1",level:3}];function h(e){const s={annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"minimum-spanning-tree---mst",children:"Minimum Spanning Tree - MST"})}),"\n",(0,a.jsx)(s.h2,{id:"definitions",children:"Definitions"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Spanning tree: Acyclical connected subgraph that contains all the nodes of the graph."}),"\n",(0,a.jsx)(s.li,{children:"Weight of a tree: sum of the weights of all the contained edges."}),"\n",(0,a.jsx)(s.li,{children:"MST: a spanning tree wherein we have the minimum weight possible"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"goal",children:"Goal"}),"\n",(0,a.jsx)(s.p,{children:"Create a subgraph containing all the nodes with the smallest weights possible. It's to minimize the total weight unlike dijkstra which aims to minimize the distance to a target."}),"\n",(0,a.jsx)(s.h2,{id:"prims-algorithm",children:"Prim's Algorithm"}),"\n",(0,a.jsx)(s.h3,{id:"goal-1",children:"Goal"}),"\n",(0,a.jsx)(s.p,{children:"Prim's algorithm works by expanding the MST one node at a time, by way of the smallest weighted edge."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Start with one given node. Mark it as visited."}),"\n",(0,a.jsx)(s.li,{children:"Look at the visited nodes' univsited neighbours, select the edge with the smallest weight and mark that node as visited."}),"\n",(0,a.jsx)(s.li,{children:"Repeat step two until all the nodes are marked as visited."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"complexity",children:"Complexity"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"log"}),(0,a.jsx)(s.mo,{children:"\u2061"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m \\log n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(s.span,{className:"mop",children:["lo",(0,a.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", where m is the number of edges and n is the number of nodes"]}),"\n",(0,a.jsx)(s.h2,{id:"kruskals-algorithm",children:"Kruskal's Algorithm"}),"\n",(0,a.jsx)(s.h3,{id:"goal-2",children:"Goal"}),"\n",(0,a.jsx)(s.p,{children:"Keep filling up the sorted edges until you reach an MST."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Start by sorting all the edges by ascending weightage."}),"\n",(0,a.jsx)(s.li,{children:"Go down the list adding the edges as long as we don't achieve a cycle."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"complexity-1",children:"Complexity"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"log"}),(0,a.jsx)(s.mo,{children:"\u2061"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m \\log m)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(s.span,{className:"mop",children:["lo",(0,a.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", where m is the number of edges"]})]})}function c(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>r});var i=n(6540);const a={},l=i.createContext(a);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);