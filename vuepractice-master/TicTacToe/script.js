var moves=new Array();
moves[1]=0;
moves[2]=0;
moves[3]=0;
moves[4]=0;
moves[5]=0;
moves[6]=0;
moves[7]=0;
moves[8]=0;
moves[9]=0;
var turns=0;
function playerTurn(square)
{
	console.log("player selected"+square);
	if(turns >=9) return false;
	if(moves[square] ==0)
	{
		var target=document.getElementById("s"+square);
		target.innerHTML='<img src="images/x.png">';
		moves[square]='X';
		turns++;
		checkwin();
		computerTurn();
	}
}

function computerTurn()
{
	if(turns >=9) return false;
	if(moves[5]==0) 
	{
		guess=5;
	}
	else 
	{
	do 
	{
		var guess=Math.ceil(Math.random()*9 );
	}
	while(moves[guess]!=0);
	}
		var target=document.getElementById("s"+guess);
		target.innerHTML='<img src="images/o.png">';
		moves[guess]='O';
		turns++;
		checkwin();
	
}

function checkwin()
{
	if(moves[1]=='X' && moves[2]=='X' && moves[3]=='X')
	{
		turns=10;
		alert("You win");
	}
	else if (moves[1]=='X' && moves[4]=='X' && moves[7]=='X')
	{
		turns=10;
		alert("You win");
	}
	else if (moves[1]=='X' && moves[5]=='X' && moves[9]=='X')
	{
		turns=10;
		alert("You win");
	}
	else if (moves[2]=='X' && moves[5]=='X' && moves[8]=='X')
	{
		turns=10;
		alert("You win");
	}
	else if (moves[3]=='X' && moves[6]=='X' && moves[9]=='X')
	{
		turns=10;
		alert("You win");
	}
	else if (moves[7]=='X' && moves[8]=='X' && moves[9]=='X')
	{
		turns=10;
		alert("You win");
	}
	else if (moves[3]=='X' && moves[5]=='X' && moves[7]=='X')
	{
		turns=10;
		alert("You win");
	}
	else if (moves[4]=='X' && moves[5]=='X' && moves[6]=='X')
	{
		turns=10;
		alert("You win");
	}
}