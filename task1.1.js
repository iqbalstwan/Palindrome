function palindrome(teks){

    let j = teks.length
    for (let i=0; i < j; i++){
      if (teks[i]!= teks[j-1-i]){
        return console.log("bukan palindrome")
      }
    }
    return console.log("palindrome")
  }
  
  palindrome ("kakak")
  
  //===============================================
  
  const str ="saya belajar javascript";
  let a = str.split(" ");
  let hasil = '' ;
  
  for(let i=a.length-1; i>=0;i--){
    hasil += (a[i] + " ")
    // console.log(a[i])
  }
  console.log (hasil)