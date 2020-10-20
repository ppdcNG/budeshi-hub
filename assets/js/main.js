$(function () {
  $(document).on('click', '#nav-ul .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  // popovers Initialization
  $('[data-toggle="popover"]').popover()

  $('.no-action-message').popover({
    html: true,
    placement: 'left',
    title: 'Approval',
    trigger: 'focus',
    content: function () {
      return $('#message_content').html();
    }
  });
  $('.action-message').popover({
    html: true,
    placement: 'left',
    title: 'Affiliation Request',
    trigger: 'focus',
    content: function () {
      return $('#message_content2').html();
    }
  });

  // add community report button click 
  $("#community-report-btn").click(function () {
    $("#nav-community-tab").trigger('click');
    $("#communityForm").trigger('reset');
  });

  // add stakeholder report button click 
  $("#stakeholder-report-btn").click(function () {
    $("#nav-stakeholder-tab").trigger('click');
    $("#stakeholderForm").trigger('reset');
  });

  // populate dropdown with states 
  let statesDropdown = $(".state");

  statesDropdown.empty();
  statesDropdown.append('<option selected="true" disabled>Choose State</option>');
  statesDropdown.prop('selectedIndex', 0);

  for (let s in states) {
    let state = states[s];
    let val = state.substr(0, 3).toLowerCase();

    statesDropdown.append(`<option value='${val}'>${state}</option>`);
  }

  $("#publish-affiliate-btn").click(function() {
    $("#choose-org").toggle();
    $("#publish-without-affiliate").toggle();
  });

  $("#publish-without-affiliate").click(function() {
    $("#affiliate-org").toggle();
    $("#confirm-publish").toggle();
  })

  $("#organisations").change(function() {
    $("#affiliate-org").toggle();
    $("#choose-org").toggle();
    $("#confirm-publish").toggle();
  });

  // publish modal on close 
  $('#publishModal').on('hidden.bs.modal', function () {
    $("#affiliate-org").css("display", "block");
    $("#publish-without-affiliate").css("display", "inline");
    $("#choose-org").css("display", "none");
    $("#confirm-publish").css("display", "none");
  });


}); // jQuery end