

const sameAs =(field,getValues) => (value) =>{
    debugger
    const compareTo = getValues()[field];
    return compareTo === value;
}

export default sameAs