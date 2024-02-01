let res=0;
function method (oper,...rest)
{
    
    if(oper=='sum')
    {
        
        for(let i=0;i<rest.length;i++)
        {
            res+=rest[i];
        }
    }
    else if(oper=='minus')
    {
        for(let i=0;i<rest.length;i++)
        {
            res-=rest[i];
        }
    }
    else if(oper=='mult')
    {
        res=1;
        for(let i=0;i<rest.length;i++)
        {
            res*=rest[i];
        }
    }
    else if(oper=='division')
    {
        res=1;
        for(let i=0;i<rest.length;i++)
        {
            res/=rest[i];
        }
    }
console.log(`Result of ${oper} for ${rest} is ${res} `)
}
method('sum',4,2,6,4);