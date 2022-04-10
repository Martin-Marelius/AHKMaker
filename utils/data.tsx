

let photos: any[];

fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then((out) => {
        console.log(out)
    })
    .catch(err => {  
        throw err  
      });

export { photos }