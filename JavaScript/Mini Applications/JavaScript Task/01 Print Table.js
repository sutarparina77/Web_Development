
function Print_Table(No)
{
    for(let i = 0; i <= 10; i++)
    {
        for(let j = 2; j <= 10; j++)
        {
            console.log(No + "X" + i + "=" + (No * i));
        }
    }
}
let Num = 5;
Print_Table(Num);



