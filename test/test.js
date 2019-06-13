window.onload=function() {
    var p=document.getElementById('b');
    if(p.nodeType==1) {
        console.log("元素");
        console.log(p.nodeName);
        console.log(p.nodeValue);
    }
    var firstChild=p.childNodes[0];
    var secongdChild=p.childNodes.item(1);
    var count=p.childNodes.length;
    console.log(firstChild.nodeName);
    console.log(secongdChild.nodeType);
    console.log(count);
    if(firstChild.nextSibling===secongdChild&&firstChild.parentNode===p){
        console.log("yes");
    }else{
        console.log("no");
    }
    if(p.firstChild===firstChild){
        console.log("yee!!");
    }
    console.log(p.hasChildNodes());
    console.log(p.ownerDocument);
    var h1=document.createElement('h1');
   var h1con=document.createTextNode("123");
   h1.appendChild(h1con);
   // p.appendChild(h1);
    p.insertBefore(h1,firstChild);
    var returnNode=p.replaceChild(h1,secongdChild);//被替换的节点已经在文档中没有了位置，但仍然停留在文档当中
    console.log(returnNode);
    console.log(p.lastChild.nodeName);
    var removeNode=p.removeChild(p.firstChild);
    console.log(removeNode);
    var myList=document.getElementsByTagName('ul');
    var deepList=myList.cloneNode(true);
    console.log(deepList.childNodes.length);
    var shadowList=myList.cloneNode(false);
    console.log(shadowList.childNodes.length);
}

