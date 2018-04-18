
var proj = app.project;
var renderSet = "av_export";

var comp;
var file;
var dossier;
var exportComp;
var openA;
var openB;
var fileA;
var fileB;
var nomBtn;
var nom;
var openX;
var fileX;
var ratio;

var widthComp;
var heightComp;
var timeComp ;
var seq;
var fpsComp;

//var widthCompExport= 1920;
//var heightCompExport=1080;
//var timeCompExport =12;

var compTxt;

var openClass;
var fileClass;
var nomComp;

var nomInvite;
var ligne;
var textLigne= new Array;
var textMot = new Array;
var Mot= new Array;
var txtInit= new Array;
var txtWrite;

var widthComp;
var heightComp;
var timeComp ;
var seq;
var fpsComp;

//----------- NEW FILE ------------------------
//var fileOpn = new File("./AvantApres/_init.ffx");
var fileSet = File("./AvantApres/_setting");




//-------------------------------------------------------
(function (){
  for (var i=1; i<=proj.numItems; i++){
      if (proj.item(i).name === "AVANT-APRES" && proj.item(i) instanceof CompItem){
            exportComp= proj.item(i);
            break;
        }else if (i === proj.numItems) {
            //exportComp= proj.items.addComp("AVANT-APRES", widthCompExport,heightCompExport,1,timeCompExport,fpsComp);
            exportComp= null;
            break;
        };

  };
  for (var i=1; i <= proj.numItems; i++){
      if (proj.item(i).name === "Images" && proj.item(i) instanceof FolderItem){
          dossier = proj.item(i);
          break;
      }else if (i === proj.numItems) {
          dossier = proj.items.addFolder("Images");
          break;
      };
  };
})();


//----------------------------------------------------------

setRead();

function setRead (){
  //if (fileOpn!=null && fileSet!=null){
  if (fileSet!=null){

    // var myFileN = fileOpn.open("r","","");
    // if(myFileN){
    //   var lign =1;
    //   while(!fileOpn.eof){
    //    nomInvite =fileOpn.readln(lign);
    //     if(lign==1){
    //       break;
    //     };
    //   }
    // }else{
    //   alert("Pfff!!! Null");
    // }
    //-----------

    var myFileS = fileSet.open('r',"","");
    if(myFileS){
      ligne =1;
      while(!fileSet.eof){
        textLigne[ligne] = fileSet.readln(ligne);
        textMot[ligne] =textLigne[ligne].split("=");
        ligne++;
      };
      fileSet.close();
    };
    widthComp = parseInt(textMot[1][1]);
    heightComp = parseInt(textMot[2][1]);
    fpsComp = parseInt(textMot[3][1]);
    seq = textMot[4][1].split('.')[1];
    timeComp = parseFloat(textMot[4][1].split(".")[0]+"."+parseInt(seq*(100/fpsComp)));



  }else{
    alert("Fichier de réglage absent !");
  }
}
//--------------------------------------------------------------

function setwriteA(){

  setWriter(1, this.text);

}
function setwriteB(){
  setWriter(2, this.text);

}
function setwriteC(){
  setWriter(3, this.text);

}

function setwriteD(){
  setWriter(4, this.text);

}

//---------------------------------------


function setWriter(rang, field){
  setRead();
  var A_txt= textLigne[1]
  var B_txt= textLigne[2];
  var C_txt= textLigne[3];
  var D_txt= textLigne[4];

  switch (rang) {
    case 1:
      A_txt = textMot[rang][0]+"="+field;
      break;
    case 2:
      B_txt = textMot[rang][0]+"="+field;
      break;
    case 3:
      C_txt = textMot[rang][0]+"="+field;
      break;
    case 4:
      D_txt = textMot[rang][0]+"="+field;
      break;

  }

  txtInit = [A_txt,B_txt,C_txt,D_txt];

  if (fileSet!=null){
    fileSet.open('w',"","");
    fileSet.encoding= 'UTF8';
    for (var i=0; i<txtInit.length;i++){
      fileSet.writeln(txtInit[i])
    }

    fileSet.close();

  } else {
    alert("aucun fichier");
  }

}
//--------------------------------------------



//--------------------------------------------

function writter(){
  // if (fileOpn!=null) {
  //   fileOpn.open("e","","");
  //   fileOpn.encoding= 'UTF8';
  //   fileOpn.writeln(this.text);
  //   fileOpn.close();
  // } else {
  //   alert("aucun fichier");
  // }
  nomInvite =this.text;
};



function readTxt(){
//  $.evalFile("/c/Program Files/Adobe/Adobe After Effects CC 2017/Support Files/Scripts/ScriptUI Panels/AvantApres/AV_App.txt");
  //var fileEval= eval("text2");
//eval("text2");

//setRead();


var code1 =
"var nom = \""+nomInvite+"\";\
eval(\"@JSXBIN@ES@2.0@MyBbyBn0ABJAnAXzBhQBfEXzFjTjQjMjJjUCfjzDjOjPjNDfRBFeBhAff0DzAEByB\")";
//nom.split(\" \")[0];
var code2 =
"var nom = \""+nomInvite+"\";\
eval(\"@JSXBIN@ES@2.0@MyBbyBn0ACJAnASzEjEjBjUjBByBEXzFjTjQjMjJjUCfjzDjOjPjNDfRBFeBhAffnftOBbyCn0ABJCnAFe0ACzChdhdEXzGjMjFjOjHjUjIFfVBfyBnndBODbyEn0ABJEnAXzBhRGfVBfyBACEXFfVBfyBnndCOFbyGn0ABJGnACzBhLHCHXGfVBfyBnneBhAXzBhSIfVBfyBnnACEXFfVBfyBnndDOHbyIn0ABJInACHCHCHCHXGfVBfyBnneBhAXIfVBfyBnnnneBhAXzBhTJfVBfyBnnACEXFfVBfyBnndEnABB40BiAABAzAKByB\")";

  for(var i=1; i<=proj.numItems; i++){
    if (proj.item(i).name==="NOM_invite" && proj.item(i) instanceof CompItem) {
      compTxt = proj.item(i);
      compTxt.openInViewer();
      compTxt.layer(2).text.sourceText.expression= code1;
      compTxt.layer(3).text.sourceText.expression= code2;
      break;
    }else if(i==proj.numItems){
      alert("La compositon \"NOM_invite\" n'esiste pas !");
    }
  }

};

//-------------------------------------------------


//--------------------------------------
function compName(){
  nomBtn= this.text;
  nom;
  openX;
  fileX;
  if (nomBtn ==="Image AVANT"){
    nom = "AVANT_image";
    openX = openA;
    fileX = fileA;
  }else if (nomBtn ==="Image APRES") {
    nom = "APRES_image";
    openX =openB;
    fileX =fileB;
  };

  opener(openX, fileX,nom);
}
//-----------------------------

//-----------------------------------
function opener(openClass, fileClass,nom){

  openClass = proj.importFileWithDialog();

  if(openClass.length ===1){
    fileClass= openClass[0];
  }else if(openClass.length >= 2){
    fileClass= openClass[openClass.length-1];
  };
  ratio = fileClass.height/heightComp;



  for (var i=1; i<=proj.numItems; i++){
      if (proj.item(i).name === nom && proj.item(i) instanceof CompItem){
                comp = proj.item(i);
                //comp.duration = 2;
              break;
          }else if (i === proj.numItems) {
            comp = proj.items.addComp(nom, widthComp,heightComp,1,timeComp,fpsComp);
            break;
        };
  }


    fileClass.parentFolder = dossier;

layerComp(fileClass,comp);
}
//------------------------------------------------------

//-----------------------------------------------------
function layerComp(fileClass, comp){
//var fliper =
  comp.openInViewer();

  if (comp.layers.length >0){
      comp.layers[1].replaceSource(fileClass,true);
      layerPic(comp);
      //comp.layers[1].inPoint = 3;
  }else{
      comp.layers.add(fileClass);
      layerPic(comp);

      //comp.layers[1].inPoint = 3;
  };
  function layerPic(comp){
    comp.layer(1).name = comp.name.split("_")[0];
    var layer= comp.layer(1);
    var flip = "Flip image";
    var scale = "Echelle";
    var posX = "Position X";
    var posY ="Position Y";
    if(!layer.effect(flip)){
      layer.Effects.addProperty("ADBE Checkbox Control").name = flip;
      layer.Effects.addProperty("ADBE Slider Control").name = scale;
      layer.Effects.addProperty("ADBE Slider Control").name = posX;
      layer.Effects.addProperty("ADBE Slider Control").name = posY;
    }
    if (layer.effect(flip)){
      comp.layer(1).effect(flip)(1).setValue(0);
      comp.layer(1).effect(scale)(1).setValue(0);
      comp.layer(1).effect(posX)(1).setValue(0);
      comp.layer(1).effect(posY)(1).setValue(0);

      var codeSc =
      "var data ="+100/ratio+";\
      eval(\"@JSXBIN@ES@2.0@MyBbyBn0AGJAnASzHjQjBjSjBjNiTiDByBEEjzGjFjGjGjFjDjUCfRBFeHiFjDjIjFjMjMjFffRBFdBffnftJBnASzGjGjMjJjQjFjSDyBEEjCfRBFeKiGjMjJjQhAjJjNjBjHjFffRBFdBffnftODbyEn0ABJEnABjzEjGjMjJjQEfndBfACzChdhdFXzFjWjBjMjVjFGfVDfyBnndAbyGn0ABJGnABjEfndyBfJInASzBjYHyBCzBhLIjzEjEjBjUjBJfVBfyBnnnftJJnASzBjZKyBCIjJfVBfyBnnnftJKnAARCCzBhKLVHfyBjEfnnVKfyBfAEH4C0AiAK4D0AiAB40BiAD4B0AiAAEAzAMByB\")";

      var codePos =
      "eval(\"@JSXBIN@ES@2.0@MyBbyBn0AFJAnASzHjDjFjOjUjFjSiYByBCzBhPCXzFjXjJjEjUjIDfjzIjUjIjJjTiDjPjNjQEfnndCnftJBnASzHjDjFjOjUjFjSiZFyBCCXzGjIjFjJjHjIjUGfjEfnndCnftJCnASzBjYHyBCzBhLIVBfyBEEjzGjFjGjGjFjDjUJfRBFeKiQjPjTjJjUjJjPjOhAiYffRBFdBffnnnftJDnASzBjZKyBCIVFfyBEEjJfRBFeKiQjPjTjJjUjJjPjOhAiZffRBFdBffnnnftJEnAARCVHfyBVKfyBfAEH4C0AiAK4D0AiAB40BiAF4B0AiAAEAzALByB\")";

      comp.layer(1).transform.scale.expression = codeSc;
      comp.layer(1).transform.position.expression = codePos;
    }

    }
}
  //var dataScale = 100/ratio;


//------------------------------------------------------------


function openXport(){


  var projPathData = proj.file.fsName.split(proj.file.name)[0];
  var projPath;
  if (projPathData.indexOf(":")>=0){
    var lowD = projPathData.split(":")[0].toLowerCase();
    var RestPath = projPathData.split(":")[1];
    projPath ="/"+lowD+"/"+RestPath.replace(/\\/g,"/").replace("////g","");
  }else{
    projPath ="/"+projPathData.replace(/\\/g,"/").replace("////g","");
  };

  var folderRender = new Folder(projPath+"Rendu_AV") ;
  if (!folderRender.exists) {
    folderRender.create()
    };

  if(this.text=="Ouvrir" ){
    if(exportComp!=null){

      exportComp.openInViewer();
    }else{
      alert("La compositon \"AVANT-APRES\" est absente !");
    };
  }

  if(this.text=="Composer"){
    if(exportComp!=null){

        exportComp.openInViewer();

        var compNam;
        function takeComp(compo){
          for (var i=1; i<=proj.numItems;i++){
            if (proj.item(i).name===compo && proj.item(i) instanceof CompItem){
              compNam = proj.item(i);
              break;
            }
          }
          return compNam;
        }
        //exportComp.layers.add(takeComp("AVANT_image"));

        exportComp.layers[4].replaceSource(takeComp("AVANT_image"),true);
        exportComp.layers[7].replaceSource(takeComp("APRES_image"),true);
        exportComp.layers[10].replaceSource(takeComp("AVANT_image"),true);
      }else{
        alert("La compositon \"AVANT-APRES\" est absente !");
      };
      //exportComp.layers.add(takeComp("APRES_image")).startTime=timeComp;
    }

  if(this.text == "Rendu"){


    //alert(folderRender.absoluteURI+"/"+nomInvite.split(' ')[0]+"_AvantAprès.mov");
    if(exportComp!=null && exportComp.layers.length>0){
      if(nomInvite != "Entrer nom" && nomInvite !=""){
        var rq_item = proj.renderQueue.items.add(exportComp);
        var myRSTemplates = rq_item.outputModule(1).templates;
        var foundTemplate = false;

        for (var i=0; i<= myRSTemplates.length; i++){
          if (myRSTemplates[i] == renderSet){
            foundTemplate =true;
            break;
          }
        }
        if(foundTemplate){
          rq_item.outputModule(1).applyTemplate(renderSet);
          var nomB= "BAMBA HAMED"
          rq_item.outputModule(1).file = File(folderRender.absoluteURI+"/"+nomInvite.split(' ')[0]+"_AvantAprès.mov");
          rq_item.render = true;
          proj.renderQueue.render();

        }else{
          alert('Le module d\'exportation \"av_export" est absent !');
        }

      }else{
        alert('Appliquer le nom de l\'INVITE');
      }
    }else{
      alert("Aucun calque dans la compositon \"AVANT-APRES\" !");
    };
  }

}
//---------------------------------------------------

//-----------------------------------------------------





//---------------------UI -----------------------------------------

  function createUI(thisObj){

         var myPanel =  thisObj ;


         res = "group{orientation:'column', alignment:['fill','fill'],alignChildren:['center','top'],\
                    picL: IconButton{type:'image',bounds:{x:10, y:10, width:360, height:72}},\
                    myTabbedPanel: Panel{type:'tabbedpanel', text:'',\
                        myTab1: Panel{type:'tab', text:'AVANT-APRES',\
                            myText: Panel{orientation:'row',\
                                staticName: StaticText { text:'Nom:' },\
                                editName: EditText {text:'Entrer nom', characters: 30 },\
                            },\
                            btnApply: Button{text :'Appliquer', alignment:'center',bounds:{x:0, y:0, width:150, height:25}},\
                            imageInvite: Panel{orientation: 'column',alignment:['fill','fill'],\
                                labelInvite: Group{orientation: 'column',\
                                    staticName: StaticText { text:'select image INVITE' },\
                                },\
                                picInvite: Group{orientation: 'row',alignment:['fill','fill'],\
                                    btnAvant: Button{text:'Image AVANT',bounds:{x:0, y:0, width:150, height:40}},\
                                    btnApres: Button{text:'Image APRES',bounds:{x:0, y:0, width:150, height:40}},\
                                },\
                            },\
                            endBtn: Group{orientation: 'row',alignment:['fill','fill'],alignChildren:'right',\
                                btnCompOpen: Button{text:'Ouvrir',alignment:'right', margins:[0,0,0,0],bounds:{x:0, y:0, width:60, height:30}},\
                                btnComp: Button{text:'Composer',alignment:'right', margins:[0,0,100,0],bounds:{x:100, y:0, width:90, height:30}},\
                                RenderBox: Group{orientation: 'row',alignment:['fill','fill'],alignment:'right',\
                                    RenderBtn: Button{text:'Rendu',alignment:'right',margins:[100,0,0,0],bounds:{x:100, y:0, width:120, height:30}},\
                                },\
                            },\
                        },\
                        myTab2: Panel{type:'tab', text:'Réglage',\
                            SetGrp: Group{orientation: 'column',alignment:['fill','fill'],alignment:'center',\
                                widthUI: Group{orientation: 'row',alignment:['fill','fill'],alignment:'left',margins:[0,40,0,0],\
                                    widthLabel: StaticText{text:'Largeur'},\
                                    widthTxt: EditText {text:"+textMot[1][1]+", characters: 10 },\
                                },\
                                heightUI: Group{orientation: 'row',alignment:['fill','fill'],alignment:'right',\
                                    heightLabel: StaticText{text:'Hauteur'},\
                                    heightTxt: EditText {text:"+textMot[2][1]+", characters: 10 },\
                                },\
                                fpsUI: Group{orientation: 'row',alignment:['fill','fill'],alignment:'right',\
                                    fpsLabel: StaticText{text:'FPS'},\
                                    fpsTxt: EditText {text:"+textMot[3][1]+", characters: 10 },\
                                },\
                                timeCompUI: Group{orientation: 'row',alignment:['fill','fill'],alignment:'right',\
                                    timeCompLabel: StaticText{text:'Temps'},\
                                    timeCompTxt: EditText {text:"+textMot[4][1]+", characters: 10 },\
                                },\
                            },\
                        },\
                    },\
                }";
         //var sourcePic = File('./AvantApres/splash/splash.jpg');
         var myPic = new File('./AvantApres/_ssl.ffx');
         var myBin;
         myPic.encoding="BINARY";
         myPic.open("r","","");

         myBin = myPic.read().replace("(new String(", "").replace(/\)\)$/, "");

         //myPanel.grp.icon.image = myBin;


         //myPanel.size = [660, 72];

         //var pic = myPanel.add("image", {x:10, y:10, width:360, height:72}, myBin);
         myPanel.grp = myPanel.add(res);
         myPanel.grp.picL.image = myBin;
         myPanel.grp.maximunSize = myPanel.grp.size;

        myPanel.grp.myTabbedPanel.margins =[0,10,5,10];
        myPanel.grp.myTabbedPanel.myTab1.imageInvite.margins =[15,10,0,20];
        myPanel.grp.myTabbedPanel.myTab1.endBtn.margins =[17,0,0,0];
        myPanel.grp.myTabbedPanel.myTab1.endBtn.RenderBox.margins =[60,0,0,0];

         //Defaults
         myPanel.grp.myTabbedPanel.myTab1.myText.editName.onChanging = writter;
         myPanel.grp.myTabbedPanel.myTab1.btnApply.onClick = readTxt;

         myPanel.grp.myTabbedPanel.myTab1.imageInvite.picInvite.btnAvant.onClick = compName;
         myPanel.grp.myTabbedPanel.myTab1.imageInvite.picInvite.btnApres.onClick = compName;

         //myPanel.grp.myTabbedPanel.myTab1.enBtn.picInvite.btnApres.onClick = compName;
         myPanel.grp.myTabbedPanel.myTab1.endBtn.btnCompOpen.onClick = openXport;
         myPanel.grp.myTabbedPanel.myTab1.endBtn.btnComp.onClick = openXport;
         myPanel.grp.myTabbedPanel.myTab1.endBtn.RenderBox.RenderBtn.onClick = openXport;

         //--------------TAB 2 ---------------
         myPanel.grp.myTabbedPanel.myTab2.SetGrp.widthUI.widthTxt.onChanging = setwriteA;
         myPanel.grp.myTabbedPanel.myTab2.SetGrp.heightUI.heightTxt.onChanging = setwriteB;
         myPanel.grp.myTabbedPanel.myTab2.SetGrp.fpsUI.fpsTxt.onChanging = setwriteC;
         myPanel.grp.myTabbedPanel.myTab2.SetGrp.timeCompUI.timeCompTxt.onChanging = setwriteD;

         myPanel.layout.layout(true);

         return myPanel;

   }
   createUI(this);




//
// function selectFold(){
//   var myFolder = Folder.selectDialog ("Select a folder");
//   if(myFolder != null){
//     if(myFolder instanceof Folder){// <-- This is not really needed
//     alert("path: " + myFolder.path);
//     alert("fsName: " + myFolder.fsName);
//     alert("fullName: " + myFolder.fullName);
//     alert("name: " + myFolder.name);
//     }
// }
// }
