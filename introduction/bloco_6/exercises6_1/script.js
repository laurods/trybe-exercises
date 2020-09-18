window.onload = function() {
    const estados = ['Selecione','Acre','Alagoas','Amapá','Bahia','Ceará','Espírito Santo','Goias','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal'];
    const todosEstados = document.getElementById('estados');
    function createOptions(){        
        for (let index =0; index < estados.length; index+=1){
            let estado = document.createElement('option');
            estado.innerHTML=estados[index];
            todosEstados.appendChild(estado);           
        }
    }
    createOptions();
    const confirmar = document.getElementById('confirmar');

    confirmar.addEventListener('click', function confirmarDados(event){
        event.preventDefault();
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let curriculo = document.getElementById('curriculo');
        curriculo.innerHTML="<p>Nome: "+nome+"</p>";
        curriculo.innerHTML+="<p>Email: "+email+"</p>";

        
    });    
}