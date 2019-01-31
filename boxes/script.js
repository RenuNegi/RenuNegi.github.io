$(document).ready(function () {
    // Register click handler
    $('body').on('click', '.box button', function (e) {
        var targetColor = e.currentTarget.value;

        if (!targetColor) {
            // reset button clicked
            $('.box-target').each(function (i, box) {
                // add original class to the box
                var originalClass = $(box).find('button').get(0).value;
                $(box).removeClass('red blue green').addClass(originalClass);
            })
        }
        else {
            // primary color button clicked
            $('.box-target').removeClass('red blue green').addClass(targetColor);
        }
    });
});