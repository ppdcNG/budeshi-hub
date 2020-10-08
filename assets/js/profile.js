$(function () {
    $("#addOrgNext").click(function (e) {
        e.preventDefault();
        $("#orgForm").css('display', 'none');
        $("#verifyOrgForm").css('display', 'block');
    });

    $("#verifyOrgBackBtn").click(function (e) {
        e.preventDefault();
        $("#verifyOrgForm").css('display', 'none');
        $("#orgForm").css('display', 'block');
    });

});