const folio=[
    {
        img:'Img/boss.png',
        name:'Josiah',
        post:'The boss',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam aspernatur assumenda corporis, eius eveniet excepturi impedit laboriosam molestias nam neque reprehenderit saepe sint, ut! Dolor, sed',

    },
    {
        img:'Img/manager.png',
        name:'Joy',
        post:'Manager',
        text:'Corporis deserunt distinctio dolorem earum eos et ex porro repellendus sequi voluptate. A adipisci atque commodi placeat quo recusandae tempore. Dignissimos dolorum incidunt, laudantium magni obcaecati pariatur ',

    },
    {
        img:'Img/cool.jpeg',
        name:'Peace',
        post:'C.T.O',
        text:'consectetur adipisicing elit. Magnam ratione repellat vitae. Alias aliquam maiores maxime numquam odit officiis vero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, officia.Lorem ipsum dolor sit amet, ',

    },
    {
        img:'Img/analyst.jpeg',
        name:'Japhet',
        post:'Analyst',
        text:'adipisicing elit. Inventore, labore, veniam. Alias cum deserunt ex magnam maiores odio quaerat quasi sed tenetur unde? Ipsam qui rerum temporibus? At, consectetur possimus.Lorem ipsum dolor sit amet, consectetur ',

    },
];
const image=document.getElementById('image');
const names= document.getElementById('name');
const title=document.getElementById('title');
const texts=document.getElementById('text');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
window.addEventListener('DOMContentLoaded',()=>{
    details(count)
})
let count=0;
function details(number) {
    const items=folio[number];
    image.src=items.img;
    names.textContent=items.name;
    title.textContent=items.post;
    texts.textContent=items.text;
}
next.addEventListener('click',()=>{
    count++;

    if(count > folio.length-1){
        count=0;
    }
    details(count);
})
prev.addEventListener('click',()=>{
    count--;

    if(count <0){
        count=folio.length-1;
    }
    details(count);
})