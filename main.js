var projets = ['EURUA','Ferielle_Bachir','Hyphe_Messali_Felix','Imane-Rezika-analyse'
    ,'JupiteretChafea','LIASD','Mariette_et_Helenya','Projet_Ariane_Aissatou'];
var fichiers = ['.html','.md','.json','.gexf','-2.gexf','-3.gexf'];

/*
for (let index = 0; index < projets.length; index++) {
    const p = projets[index];
    console.log(p);            
}
*/

var titreProjet = d3.select('body').select('h2').data(projets).enter().append('div');
titreProjet.append('h2').html(p=>p);
titreProjet.append('div').html(p=>{
    let html = '';
    fichiers.forEach(f=>{        
        let pathSource = "data/"+p+f, 
            pathWeb = "https://samszo.github.io/M2GSI_22-23/data/"+p+f,
            pathHTML = "https://samszo.github.io/M2GSI_22-23/pages/"+p+f;
        if(f=='.html'){
            html += `<a target="_blank" href="${pathHTML}">${pathHTML}</a><br/><br/>`;
        }else{
            html += `<a target="_blank" href="${pathSource}">${pathSource}</a> <a target="_blank" href="${pathWeb}">${pathWeb}</a> <br/>`;
        }
    })
    return html;
})
