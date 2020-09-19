window.onload = function() {
    
    const estados = ['Selecione','Acre','Alagoas','Amapá','Bahia','Ceará','Espírito Santo','Goias','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal'];
    const todosEstados = document.getElementById('estados');
    const limpar = document.getElementById('limpar');
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
        let cpf = document.getElementById('cpf').value;
        let endereco = document.getElementById('endereco').value;      
        let casa = document.getElementById('casa');  
        let estados = document.getElementById('estados');       
        var estSelect = estados.options[estados.selectedIndex].text;
        let atividades = document.getElementById('atividades').value;
        let cargo = document.getElementById('cargo').value;
        let descCargo = document.getElementById('descCargo').value;  
        let dtInicio = document.getElementById('dtInicio').value;
        let complemento = ""
      
        if(casa.checked === true){            
            complemento = "Casa";
        }else{
            complemento = "Apartamento";
        }
        let curriculo = document.getElementById('curriculo');
        curriculo.innerHTML="<p>Nome: "+nome+"</p>";
        curriculo.innerHTML+="<p>Email: "+email+"</p>";
        curriculo.innerHTML+="<p>CPF: "+cpf+"</p>";
        curriculo.innerHTML+="<p>Endereço: "+endereco+"</p>";
        curriculo.innerHTML+="<p>Complemento: "+complemento+"</p>";
        curriculo.innerHTML+="<p>Estado: "+estSelect+"</p>";
        curriculo.innerHTML+="<p>Atividades: "+atividades+"</p>";
        curriculo.innerHTML+="<p>Cargo: "+cargo+"</p>";
        curriculo.innerHTML+="<p>Descrição do Cargo: "+descCargo+"</p>";
        curriculo.innerHTML+="<p>Data Incicio: "+dtInicio+"</p>";  
     
         
   

        
    }); 

       
}


    limpar.addEventListener('click', function limpaCurriculo (event){
        event.preventDefault();
        let nome = document.getElementById('nome').value="";
        let email = document.getElementById('email').value="";
        let cpf = document.getElementById('cpf').value="";
        let endereco = document.getElementById('endereco').value=""; 
        let estados = document.getElementById('estados').selectedIndex=0;       
        let atividades = document.getElementById('atividades').value="";
        let cargo = document.getElementById('cargo').value="";
        let descCargo = document.getElementById('descCargo').value="";  
        let dtInicio = document.getElementById('dtInicio').value="";
            if(casa.checked === true){            
                casa.checked = false
            }else{
                apto.checked = false;
            }
        let complemento = "";
        let curriculo = document.getElementById('curriculo');
        curriculo.innerHTML="<p>Nome: "+nome+"</p>";
        curriculo.innerHTML+="<p>Email: "+email+"</p>";
        curriculo.innerHTML+="<p>CPF: "+cpf+"</p>";
        curriculo.innerHTML+="<p>Endereço: "+endereco+"</p>";
        curriculo.innerHTML+="<p>Complemento: "+complemento+"</p>";       
        curriculo.innerHTML+="<p>Atividades: "+atividades+"</p>";
        curriculo.innerHTML+="<p>Cargo: "+cargo+"</p>";
        curriculo.innerHTML+="<p>Descrição do Cargo: "+descCargo+"</p>";
        curriculo.innerHTML+="<p>Data Incicio: "+dtInicio+"</p>"; 

    });