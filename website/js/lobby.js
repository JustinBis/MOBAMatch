/*
 * When the options pane icon is clicked, roll the pane up or down
 */
$('#optionsButton').click(function() {
	// If the pane is hidden
	if ( $('#optionsPane').hasClass('optionsUp') )
	{
		// Show it by setting the down class
		$('#optionsPane').removeClass('optionsUp').addClass('optionsDown');
		// Set the icon to be the roll up icon
		$('#optionsPulldownIcon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
	// Else the pane is visible
	else
	{
		// Roll it up by setting the up class
		$('#optionsPane').removeClass('optionsDown').addClass('optionsUp');
		// Set the icon to be the roll down icon
		$('#optionsPulldownIcon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	}
});