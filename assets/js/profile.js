$(function () {
    $("#addOrgNext").click(function () {
        $("#newOrgForm").css('display', 'none');
        $("#verifyOrgForm").css('display', 'block');
    });

    $("#verifyOrgBackBtn").click(function (e) {
        e.preventDefault();
        $("#verifyOrgForm").css('display', 'none');
        $("#newOrgForm").css('display', 'block');
    });

});