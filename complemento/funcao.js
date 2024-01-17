$(function() {
    exibirMenu();
});

function exibirMenu() {
    $.ajax({
        url: "menu.xml",
        success: function(xml) {
            $(xml).find("mn").each(function() {
                var link = '<a href=' + $(this).attr("link") + ' ><img src="imagens/' + $(this).text() + '.png" alt="' + $(this).text() + '"></a>';

                $("#menu").append(link);
            });

        },
        error: function() {
            alert(" Alguns arquivos não foram carregados com sucesso, recarregue e tente novamente.");
        }
    });
}

$(function() {
    $('#01').click(function() {
        $("main").show();
    });

    $('#02').click(function() {
        $("main").hide();
    })
});

$(function() {
    mostrarprodutos();

});

function mostrarprodutos() {
    $.getJSON("complemento/pratos.json", function(retorno) {
        var total = retorno.pratos.length;


        for (var i = 0; i < total; i++) {
            var restau = retorno.pratos[i].restaurante;
            var product = retorno.pratos[i].produt;
            var valores = retorno.pratos[i].valor;
            var dives = "<div><h3>" + restau + "</h3> <br><p id=prato" + (i + 1) + " > " + product + " </p><p> R$ <span id=val" + (i + 1) + "> " +
                valores + "</span></p><button id=btn" + (i + 1) + "> Adicionar</button><br></div>";
            $('main#cardapio').append(dives);
        }


        $(function() {
            $("#btn1").click(addcarrinho1);
            $("#btn2").click(addcarrinho2);
            $("#btn3").click(addcarrinho3);
            $("#btn4").click(addcarrinho4);
            $("#btn5").click(addcarrinho5);
            $("#btn6").click(addcarrinho6);
        });

        function addcarrinho1() {
            localStorage.setItem($("#prato1").html(), $("#val1").html());
            alert($("#prato1").html() + 'foi adicionado');
        };


        function addcarrinho2() {
            localStorage.setItem($("#prato2").html(), $("#val2").html());
            alert($("#prato2").html() + 'foi adicionado');
        }

        function addcarrinho3() {
            localStorage.setItem($("#prato3").html(), $("#val3").html());
            alert($("#prato3").html() + 'foi adicionado');
        }

        function addcarrinho4() {
            localStorage.setItem($("#prato4").html(), $("#val4").html());
            alert($("#prato4").html() + 'foi adicionado');
        }


        function addcarrinho5() {
            localStorage.setItem($("#prato5").html(), $("#val5").html());
            alert($("#prato5").html() + 'foi adicionado');
        }

        function addcarrinho6() {
            localStorage.setItem($("#prato6").html(), $("#val6").html());
            alert($("#prato6").html() + 'foi adicionado');
        }



    })
};






$(function() {
    mostrarcarrinho();
});

function mostrarcarrinho() {



    if (localStorage.length > 0) {

        let titu = "<tr><th>Prato</th><th>Valor</th></tr>"
        $('table#tb').append(titu);

        var result = 0;

        for (l = 0; l < localStorage.length; l++) {
            var nome = localStorage.key(l);
            var preco = localStorage.getItem(nome);
            var precoformated = parseFloat(preco);
            var result = result + precoformated;
            let compras = '<tr> <td>' + nome + '</td><td> R$: ' + precoformated + '</td></tr>';
            $('table#tb').append(compras);

        }


        const total1 = '<tr><td colspan="2" id="tot"><b>Total: R$ ' + result.toFixed(2) + '</b></td></tr>'
        $('table#tb').append(total1);




        $("#reset").click(function() {
            apagartd();
        });


        function apagartd() {
            if (localStorage.length > 0) {
                localStorage.clear();
            } else {
                alert("Nenhum registro encontrado");
            }
            limpar();
        }

        function limpar() {
            $("#tb").remove();

        }

    }

};