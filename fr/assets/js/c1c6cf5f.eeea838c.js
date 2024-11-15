"use strict";(self.webpackChunkpoly_docs=self.webpackChunkpoly_docs||[]).push([[8038],{1875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"inf2010/interface","title":"Interface vs Data Structure","description":"Interface","source":"@site/docs/inf2010/interface.md","sourceDirName":"inf2010","slug":"/inf2010/interface","permalink":"/poly-docs/fr/docs/inf2010/interface","draft":false,"unlisted":false,"editUrl":"https://github.com/polykarma/poly-docs/docs/inf2010/interface.md","tags":[],"version":"current","lastUpdatedBy":"polykarma","lastUpdatedAt":1731656769000,"frontMatter":{"title":"Interface vs Data Structure"},"sidebar":"sidebar","previous":{"title":"Introduction","permalink":"/poly-docs/fr/docs/inf2010/"},"next":{"title":"Lists","permalink":"/poly-docs/fr/docs/inf2010/list"}}');var r=n(4848),i=n(8453);const s={title:"Interface vs Data Structure"},o="Interface vs Data Structure",c={},l=[{value:"Interface",id:"interface",level:2},{value:"Data Structure",id:"data-structure",level:2}];function d(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"interface-vs-data-structure",children:"Interface vs Data Structure"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.p,{children:"An interface can be thought of as a contract on the different ways to interact with a data structure without worrying too much about the implementation details."}),"\n",(0,r.jsx)(t.p,{children:"It's like a blueprint of the operations you can perform on a data structure."}),"\n",(0,r.jsxs)(t.p,{children:["It answers the question: ",(0,r.jsx)(t.em,{children:"What can I do with this data structure?"})]}),"\n",(0,r.jsx)(t.p,{children:"For example, the following is a simple interface for a Node:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public interface NodeInterface<T extends Comparable<T>> extends Serializable, Cloneable {\n    T getValue();\n    void setValue(T value);\n    Node<T> getNext();\n    void setNext(Node<T> next);\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"This interface defines the operations that can be performed on a Node. It doesn't specify how the operations are implemented, just what operations are available."}),"\n",(0,r.jsx)(t.p,{children:"The operations available are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"getValue()"}),": Get the value of the node"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"setValue(T value)"}),": Set the value of the node"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"getNext()"}),": Get the next node"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"setNext(Node<T> next)"}),": Set the next node"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["As we can see we are completely decoupled from the type this Node can carry. With the power of generics, we can create a Node that can carry any type of data. The ",(0,r.jsx)(t.code,{children:"T"})," in the interface is a placeholder for the type of data that the Node will carry."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,r.jsx)(t.p,{children:"A data structure, on the other hand, is a concrete implementation of a data structure. It's the actual mechanics of how the data is stored and manipulated in order to fulfill the contract of the interface."}),"\n",(0,r.jsxs)(t.p,{children:["It answers the question: ",(0,r.jsx)(t.em,{children:"How can I do this operation on this data structure?"})]}),"\n",(0,r.jsxs)(t.p,{children:["For example, the following is a simple implementation of a Node that implements the ",(0,r.jsx)(t.code,{children:"Node"})," interface:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public class MyNodeImplementation<T> implements Node<T> {\n    private T value;\n    private Node<T> next;\n\n    public NodeImpl(T value) {\n        this.value = value;\n        this.next = null;\n    }\n\n    @Override\n    public T getValue() {\n        return this.value;\n    }\n\n    @Override\n    public void setValue(T value) {\n        this.value = value;\n    }\n\n    @Override\n    public Node<T> getNext() {\n        return this.next;\n    }\n\n    @Override\n    public void setNext(Node<T> next) {\n        this.next = next;\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"This implementation provides the actual mechanics of how the operations defined in the interface are carried out. It specifies how the value is stored, how the next node is linked, and how the operations are performed."}),"\n",(0,r.jsx)(t.p,{children:"This was a very simple example, but the same principle applies to more complex data structures like lists, trees, graphs, etc."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);