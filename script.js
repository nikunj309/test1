$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('#taxForm').on('submit', function(e) {
        e.preventDefault();

        var grossIncome = parseFloat($('#grossIncome').val()) || 0;
        var extraIncome = parseFloat($('#extraIncome').val()) || 0;
        var deductions = parseFloat($('#deductions').val()) || 0;
        var ageGroup = $('#age').val();

        var totalIncome = grossIncome + extraIncome - deductions;
        var tax = 0;

        if (totalIncome > 800000) {
            var over8Lakhs = totalIncome - 800000;
            if (ageGroup === '<40') {
                tax = over8Lakhs * 0.3;
            } else if (ageGroup === '40-60') {
                tax = over8Lakhs * 0.4;
            } else if (ageGroup === '>=60') {
                tax = over8Lakhs * 0.1;
            }
        }

        $('#taxResult').text('Your tax is: ' + tax.toFixed(2));
        $('#resultModal').modal('show');
    });
});
