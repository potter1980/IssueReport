/**
 * Created by Elias on 2015-04-07.
 */
$(document).ready(function(){

    $("#1").click(function(){

        $('#issueList').fadeToggle('fast');
        //clearTable();
        //printIssueList(listOverAreas);
    });

    $("#2").click(function(){

        $('#issueList').fadeToggle('fast');

        clearTable();
        printIssueList(listOverIssues);


    });

    $("#falhagen").click(function(){
        clearTable();
        printIssueList(listOverAreas);
    });

    $('tr.header').click(function(){
            $(this).siblings('.child-'+this.id).toggle('fast');
        });

    $("tr[class^=child-]").hide().children('tr');

    function printIssueList(list){
        tr = $("<tr></tr>");
        td = $("<td></td>").text("Issue").attr("colspan", "2");
        tr.append(td);
        $(".infoLista").append(tr);
        tr = $("<tr></tr>");
        td = $("<td></td>").text("Category");
        tr.append(td);
        td = $("<td></td>").text("Address");
        tr.append(td);
        $(".infoLista").append(tr);

        for (i=0; i<list.length; i++){
            if(i%2===0) {
                tr = $("<tr></tr>");
            }
            td = $("<td></td>").text(list[i]);
            tr.append(td);
            $(".infoLista").append(tr);
        }
    }
    function clearTable(){
        while ($(".infoLista tr").length > 0) {
            $(".infoLista tr:last").remove();
        }
    }


    var tr, td;
    var listOverIssues = ["Belysning", "Fålhagen", "Gator", "Stenhagen", "Soptunnor", "Kåbo", "Vatten", "Ekeby"];
    var listOverAreas = ["Belysning", "Fålhagen", "Gator", "Stenhagen", "Soptunnor", "Kåbo", "Vatten", "Ekeby", "Bajs", "Bajs"];
});




