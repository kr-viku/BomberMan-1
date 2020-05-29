function startGame(){
let score=0;
let root=document.getElementById("root");
let points=document.getElementById("points");
let startGame=document.getElementById("start");
let congo=document.getElementById("congo");
let loss=document.getElementById("loss");
let bombIndex=Array.from({length:10}, () => Math.floor(Math.random()*81));
console.log(bombIndex);
let visited=[];
let gameover=false;

for(let i=0;i<9;i++)
{
    let row=document.createElement("div");
    row.style.height="20px";
    // row.style.width="200px";
    for(let j=0;j<9;j++)
    {
        let currentindex=i*9+j;
        let col=document.createElement("div");
        col.style.height="20px";
        col.style.width="20px";
        col.style.background="white";
        col.style.display="inline-block";
        col.style.border="1px solid black";
        col.setAttribute("id",currentindex);
        console.log(col);
        col.addEventListener("click",()=>{
            if(!bombIndex.includes(currentindex) && !gameover && !visited.includes(currentindex))
            {
                visited.push(currentindex);
                score++;
                points.innerHTML="Your Score: "+score;
                col.style.background="green";
            }
            else{
                
                for(let k=0;k<10;k++)
                {
                    gameover=true;
                    let bomb=bombIndex[k];
                    let bombNode=document.getElementById(bomb);
                    bombNode.style.background="red";
                    // bombNode.innerHTML="💣";
                }
                if(score<72)
                {
                    loss.style.display="block";
                }
                else{
                    congo.style.display="block";
                }
                startGame.style.display="block";
                
            }
        })
        row.appendChild(col);
    }
    root.appendChild(row);
}

startGame.addEventListener("click",()=>{
    location.reload();
})

}

function genearteRandomNumArray()
{
    let set=new Set();
    for(let i=0;i<set.size!=10;i++)
    {
        set.add(Math.ceil(81*Math.random()))
    }
    return set;
}

startGame();