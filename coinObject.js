const body = document.body
const conteudo = document.createElement('div')
body.appendChild(conteudo)
conteudo.id = 'conteudo'
const coin = {
    state: 0,
  
    flip: function (state) {
      this.state = state
      this.state = Math.floor(Math.random() * 2);
      return this.state
    },
  
    toString: function () {
        if(this.state === 0){
            return 'Heads'
        }else{
            return 'Tails'
        }
    },
  
    toHTML: function () {
      const conteudo = document.getElementById('conteudo')
      if(this.state === 0){
        const image = document.createElement("img");
        image.src = "./imagens/4724348_1.jpg"
        image.alt = "Heads"
        image.style.width = "50px";
        image.style.height = "50px";
        conteudo.appendChild(image)
        return image;
      }else{
        const image = document.createElement("img");
        image.src = "./imagens/f1c9ee90320383409b44abe2eecf60fa.jpg"
        image.alt = "Tails"
        image.style.width = "50px";
        image.style.height = "50px";
        conteudo.appendChild(image)
        return image;
      }
    },
};

function display20Flips() {
  const results = [];
  for(i=0; i<20; i++){
    (function (i){
      setTimeout(function(){
      coin.flip()
      results.push(coin.toString())
      conteudo.innerText += " " + coin.toString()
      if(i === 19){
        console.log(results)
        return results
      }
      },1000*i)
    })(i)
  }
}
//display20Flips()

function display20Images() {
  const results = [];
  for(i=0; i<20; i++){
    (function (i){
      setTimeout(function(){
      coin.flip()
      results.push(coin.toHTML())
      if(i === 19){
        console.log(results)
        return results
      }
      },1000*i)
    })(i)
  }
}
//display20Images()