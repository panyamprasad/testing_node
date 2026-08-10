function removeDupliates(arr){
    const unique = {};

    for(let val of arr){
        unique[val] = unique[val] ? unique[val] + 1 : 1;
    }

    return [...new Set(arr)].sort((a,b) => unique[b] - unique[a])
}


console.log(removeDupliates([1,2,1,2,3,2,3,4,3,4,5,4,5]))