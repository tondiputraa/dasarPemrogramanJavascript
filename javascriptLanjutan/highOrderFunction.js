function repeatLog(n,action){
    for(let i=0;i<n;i++){
        action(i+1);
    }
    action('Terimakasih');
}

// repeatLog(10,console.log);
repeatLog(3,alert);