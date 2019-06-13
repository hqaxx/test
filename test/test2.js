 console.log(document.readyState);
window.onload=function(){
    var div=document.getElementById('New');
    console.log(div.className);
    console.log(div.getAttribute("id"));
    console.log(div.getAttribute("data-myName"));
    console.log(div.style);//返回的是一个对象
    console.log(div.getAttribute("style"));//返回的是一个css文本
    div.setAttribute("id","Old");
    console.log(div.id);
    div.setAttribute("name","haha");
    console.log(div.getAttribute("name"));
    div.myColor="red";
    console.log(div.getAttribute("myColor"));
    console.log(div.attributes["id"].value);
    div.attributes['id'].value='New';
    console.log(div.id);
    var oldAttr=div.attributes.removeNamedItem('id');
    console.log(oldAttr);
    var oldAttr2=div.removeAttribute('id');
    console.log(oldAttr2);
    function outputAttributes(element){//遍历div内的特性。利用其attributes属性
        var pairs=new Array(),attrName,attrValue,i,len;
        for(i=0,len=element.attributes.length;i<len;i++){
            attrName=element.attributes[i].nodeName;
            attrValue=element.attributes[i].nodeValue;
            if(element.attributes[i].specified) {//确保只返回制定了的特性
                pairs.push(attrName + "=\"" + attrValue + "\"");
            }
        }
        return pairs.join(" ");
    }
    console.log(outputAttributes(div));
    var p=document.createElement('p');
    p.id='para';
    console.log(p.ownerDocument);
    document.body.appendChild(p);
    var text=div.firstChild;
    console.log(text);//文本结果是用双引号引起来的
    text.nodeValue="<strong>allla</strong>";
    console.log(text);
    var text1=document.createTextNode('这是一个段落');
    p.appendChild(text1);
    var text2=document.createTextNode('this is a paragraph');//同时添加两个文本节点，文本会自动拼接在一起
    p.appendChild(text2);
    console.log(document.doctype.name);
    var fragment=document.createDocumentFragment();
    var ul=document.getElementsByClassName('myList')[0];
    var li=null;
    for(var i=0;i<3;i++){
        li=document.createElement('li');
        li.appendChild(document.createTextNode("item"+(i+1)));
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    var attr=document.createAttribute('float');
    attr.value="right";
    ul.setAttributeNode(attr);
    console.log(ul.getAttributeNode('float').value);
    var div2=document.querySelector('div');
    console.log(div2);
    console.log(ul.querySelector('div'));
    console.log(document.querySelectorAll('div'));
    console.log(document.compatMode);
    console.log(document.charset);
    console.log(document.defaultCharset);

}