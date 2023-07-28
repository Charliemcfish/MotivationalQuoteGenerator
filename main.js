let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
'"It is better to fail in originality than to succeed in imitation." — Herman Melville',
'"The road to success and the road to failure are almost exactly the same." — Colin R. Davis',
'“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau',
'“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie',
'“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers',
'“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden',
'“I never dreamed about success. I worked for it.” —Estée Lauder',
'“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella',
'“Concentrate all your thoughts upon the work in hand. The suns rays do not burn until brought to a focus. “ — Alexander Graham Bell',
'“Either you run the day or the day runs you.” — Jim Rohn',
'“I’m a greater believer in luck, and I find the harder I work the more I have of it.” — Thomas Jefferson',
'“When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho',
'“Opportunity is missed by most people because it is dressed in overalls and looks like work.” — Thomas Edison',
'“Setting goals is the first step in turning the invisible into the visible.” — Tony Robbins',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
})