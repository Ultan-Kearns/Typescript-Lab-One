
countString("ultan ");
countStringNoSpace("Test 1");
combinedStringCount("ultan  ",true);
combinedStringCount("ultan  ",false);
function countString(x:string)
{
    console.log("Size of string with spaces " + x.length);
}
function countStringNoSpace(x:string)
{
    let size:number = 0;
    for(let i:number = 0; i < x.length; i++)
    {   
        if(x[i] != " ")
        {
            size++;
        }
    }
    console.log("Size of string with no spaces is " + size)
}
function combinedStringCount(x:string,y:boolean)
{
    if(y == true)
    {
        let size:number = 0;
        for(let i:number = 0; i < x.length; i++)
        {   
            if(x[i] != " ")
            {
                size++;
            }
        }
        console.log("Size of combined string with no spaces is " + size)
    }
    else
    {
        console.log("Size of combined string with spaces " + x.length);
    }
}