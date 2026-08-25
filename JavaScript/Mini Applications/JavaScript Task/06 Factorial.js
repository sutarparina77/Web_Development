let No = 0, Temp = 0, Fact = 0;

console.log(" Enter any positive integer: ");

function Factorial(No)
{
    if(No <= 0)
    {
        console.log(" Invalid Number. ");
    }

    for(Fact = 1, Temp = No; Temp > 1; Temp--)
    {
        Fact = Fact * Temp;
    }

    console.log("Factorial of " + No + "is :" + Fact);
}
