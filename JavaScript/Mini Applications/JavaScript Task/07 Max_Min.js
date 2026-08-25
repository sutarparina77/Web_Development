let Arr = [45, 78, 56, 89, 43], Max = 0, Min = 0, i = 0;

for(i = 0; i < Arr.length; i++)
{
    if(Max < Arr[i] || i === 1)
    {
        Max = Arr[i];
    }
}
console.log("Maximum Number : ", Max);

for(i = 0; i < Arr.length; i++)
{
    if(Min > Arr[i] || i === 1)
    {
        Min = Arr[i];
    }
}
console.log("Minimum Number : ", Min);
