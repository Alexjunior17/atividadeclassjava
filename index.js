function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefonenum").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefonenum").value=tel
     tel=document.getElementById("telefonenum").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefonenum").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefonenum").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefonenum").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefonenum").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            localStorage.setItem("tellocal", tel_formatado)
        }


    


function mascara_cep()
        { 
            var cep = document.getElementById("cepnum").value
            console.log(cep)
            cep=cep.slice(0,10) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(cep)
          document.getElementById("cepnum").value=cep
          cep=document.getElementById("cepnum").value.slice(0,10)
            console.log(cep)
            
            var cep_formatado = document.getElementById("cepnum").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("cepnum").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("cepnum").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }
            localStorage.setItem("ceplocal", cep_formatado)
        }       

        function mascara_cpf()
        {
             //limitador
         var cpf = document.getElementById("cpfnum").value
         console.log(cpf)
       cpf=cpf.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
         console.log(cpf)
       document.getElementById("cpfnum").value=cpf
  cpf=document.getElementById("cpfnum").value.slice(0,10)
         console.log(cpf)
        
         //máscara
         var cpf_formatado = document.getElementById("cpfnum").value
         if (cpf_formatado[3]!=".")
         {
             if(cpf_formatado[3]!=undefined)
             {
                 document.getElementById("cpfnum").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
             }
         }

         if (cpf_formatado[7]!=".")
         {
             if(cpf_formatado[7]!=undefined)
             {
                 document.getElementById("cpfnum").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
             }
         }

         if (cpf_formatado[11]!="-")
         {
             if(cpf_formatado[11]!=undefined)
             {
                 document.getElementById("cpfnum").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
             }
         }
         localStorage.setItem("cpflocal", cpf_formatado)
        }





        function mascara_cnpj()
        {
             //limitador
         var cnpj = document.getElementById("cnpjnum").value
         console.log(cnpj)
         cnpj=cnpj.slice(0,18) //(pode limitar a quantidade de char na entrada pelo java script)
         console.log(cnpj)
       document.getElementById("cnpjnum").value=cnpj
       cnpj=document.getElementById("cnpjnum").value.slice(0,10)
         console.log(cnpj)
        
         //máscara
         var cnpj_formatado = document.getElementById("cnpjnum").value
         if (cnpj_formatado[2]!=".")
         {
             if(cnpj_formatado[2]!=undefined)
             {
                 document.getElementById("cnpjnum").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2];
             }
         }

         if (cnpj_formatado[6]!=".")
         {
             if(cnpj_formatado[6]!=undefined)
             {
                 document.getElementById("cnpjnum").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6]
             }
         }

         if (cnpj_formatado[10]!="/")
         {
             if(cnpj_formatado[10]!=undefined)
             {
                 document.getElementById("cnpjnum").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10]
             }
         }
         if (cnpj_formatado[15]!="-")
         {
             if(cnpj_formatado[15]!=undefined)
             {
                 document.getElementById("cnpjnum").value=cnpj_formatado.slice(0,15)+"-"+cnpj_formatado[15]
             }
         }
         localStorage.setItem("cnpjlocal", cnpj_formatado)

        }



        function mascara_codigo()
        {
             //limitador
         var codigo = document.getElementById("codigonum").value
         console.log(codigo)
         codigo=codigo.slice(0,20) //(pode limitar a quantidade de char na entrada pelo java script)
         console.log(codigo)
       document.getElementById("codigonum").value=codigo
       codigo=document.getElementById("codigonum").value.slice(0,10)
         console.log(codigo)
        
         //máscara
         var codigo_formatado = document.getElementById("codigonum").value
         if (codigo_formatado[2]!="_")
         {
             if(codigo_formatado[2]!=undefined)
             {
                 document.getElementById("codigonum").value=codigo_formatado.slice(0,2)+"_"+codigo_formatado[2];
             }
         }

         if (codigo_formatado[5]!="/")
         {
             if(codigo_formatado[5]!=undefined)
             {
                 document.getElementById("codigonum").value=codigo_formatado.slice(0,5)+"/"+codigo_formatado[5]
             }
         }

         if (codigo_formatado[6]!="/")
         {
             if(codigo_formatado[6]!=undefined)
             {
                 document.getElementById("codigonum").value=codigo_formatado.slice(0,6)+"/"+codigo_formatado[6]
             }
         }
         if (codigo_formatado[10]!="-")
         {
             if(codigo_formatado[10]!=undefined)
             {
                 document.getElementById("codigonum").value=codigo_formatado.slice(0,10)+"-"+codigo_formatado[10]
             }
         }
         if (codigo_formatado[14]!=".")
         {
             if(codigo_formatado[14]!=undefined)
             {
                 document.getElementById("codigonum").value=codigo_formatado.slice(0,14)+"."+codigo_formatado[14]
             }
         }
         if (codigo_formatado[16]!=".")
         {
             if(codigo_formatado[16]!=undefined)
             {
                 document.getElementById("codigonum").value=codigo_formatado.slice(0,16)+"."+codigo_formatado[16]
             }
      
             
         }
         localStorage.setItem("codigolocal", codigo_formatado)

        }
         function salvarnome()
         {
            var nome = document.getElementById("nometxt").value
            localStorage.setItem("nomelocal", nome)
         }

         function salvarendereco()
         {
            var endereco = document.getElementById("enderecotxt").value
            localStorage.setItem("enderecolocal", endereco)
         }

       
