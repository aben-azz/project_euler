//Newton Approximation
let sqrt = (N )=>
{
    let n, p, low, high;
    if( 2n > N )
        return( N );
    low  = 0n;
    high = N;
    while( high > low + 1n )
    {
        n = (high + low) / 2n;
        p = n * n;
        if( N < p )
            high = n;
        else if( N > p )
            low = n;
        else
            break;
    }
    return( N == p ? n : low );
}
