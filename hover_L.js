$(document).ready(function(){

    $(".rubrik").click(function(){

        $('.widgetsMain').fadeToggle('fast');
    });

    $("#2").click(function(){

        $('#issueList').fadeToggle('fast');


        printIssueList(listOverIssues);


    });