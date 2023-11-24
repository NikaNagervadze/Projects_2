document.getElementById('showDialogButton').addEventListener('click', function() {
    var userConfirmation = window.confirm("ეთანხმებით ამ ოპერაციას?");

    if (userConfirmation) {
        alert("მომხმარებელმა დააკლიკა ok-ს, მონაცემი ჭეშმარიტია");
    } else {
        alert("მომხმარებელმა დაკლიკა გაუქმებას, მონნეცემი უარყოფითა");
    }
});