$(function () {
    $(document).on('click', '#nav-ul .dropdown-menu', function (e) {
        e.stopPropagation();
    });
    // popovers Initialization
    $('[data-toggle="popover"]').popover()

    $('.no-action-message').popover({ 
        html : true,
        placement: 'left',
        title: 'Approval',
        trigger: 'focus',
        content: function() {
          return $('#message_content').html();
        }
    });
    $('.action-message').popover({ 
        html : true,
        placement: 'left',
        title: 'Request',
        trigger: 'focus',
        content: function() {
          return $('#message_content2').html();
        }
    });
});