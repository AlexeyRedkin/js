function objMap(obj, func) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => 
        [k, v === Object(v) ? objMap(v, func) : func(v)]
      )
    );
  }
  
  // To square each value you can call it like this:
  let mappedObj = objMap(obj, (x) => x * x);
  