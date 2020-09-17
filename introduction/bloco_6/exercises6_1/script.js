window.onload = function() {
    const estados = ['Acre','Alagoas','Amapá','Bahia','Ceará','Espírito Santo','Goias','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal'];
    const todosEstados = document.getElementById('estados');
    function createOptions(){        
        for (let index =0; index < estados.length; index+=1){
            let estado = document.createElement('option');
            estado.innerHTML=estados[index];
            todosEstados.appendChild(estado);           
        }
    }
    createOptions();
    

    /*
    estados = [
        {nome:'Acre',uf: 'AC'},
        {nome:'Alagoas',uf:'AL'},
        {nome:'Amapá',uf:'AP'},
        {nome:'Amapá',uf:'AM'},
        {nome:'Bahia',uf:'BA'},
        {nome:'Ceará', uf:'CE'},
        {nome:'Espírito Santo',uf:'ES'},
        {nome:'Goias', uf:'GO'},
        {nome:'Maranhão',uf:'MA'},
        {nome:'Mato Grosso',uf:'MT'},
        {nome:'Mato Grosso do Sul',uf:'MS'},        
        {nome:'Minas Gerais',uf:'MG' },
        {nome:'Pará',uf:'PA'},
        {nome:'Paraíba',uf:'PB'},
        {nome:'Paraná',uf:'PR'},
        {nome:'Pernambuco', uf:'PE' },
        {nome:'Piauí',uf:'PI' },
        {nome:'Rio de Janeiro',uf:'RJ'},
        {nome:'Rio Grande do Norte',uf:'RN'},
        {nome:'Rio Grande do Sul',uf:'RS'},
        {nome:'Rondônia', uf:'RO'},
        {nome:'Roraima', uf:'RR'},
        {nome:'Santa Catarina', uf:'SC'},
        {nome:'São Paulo', uf:'SP'},
        {nome:'Sergipe', uf:'SE'},
        {nome:'Tocantins', uf:'TO'},
        {nome:'Distrito Federal', uf:'DF'}
    ]
    */

}