let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Love For All, Hatred For None." – Khalifatul Masih III',
    '"Change the world by being yourself." – Amy Poehler',
    '"Every moment is a fresh beginning." – T.S Eliot',
    '"Never regret anything that made you smile." – Mark Twain',
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill',
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
    '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
    '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai',
];

btn.addEventListener('click', function () {
    var randomQuote = quotes[Math.floor(Math.random() * (12 - 1)) + 1]
    output.innerHTML = randomQuote;
})