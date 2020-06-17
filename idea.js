function clea(){ 
    document.getElementById('tx').value = '';
}

function sends() {
    var op_in = document.getElementById('option').value;//讀取option
    var tx_in = document.getElementById('tx').value; //讀取textarea
    var block_out = document.createElement("div"); // 製造整個訊息框
    var tx_out = document.createElement("div"); //製造文字訊息
    
    if(tx_in == ''){
        alert("請輸入點子！");
        return 0;
    }
    
        block_out.appendChild(tx_out);//訊息框
        block_out.setAttribute('id','ideas'); //設定msg的id
        tx_out.innerHTML="為了改善"+op_in+"，"+tx_in; 
    

    clea();
        
    document.getElementById("idea").appendChild(block_out); //總體延長
    
    
}

