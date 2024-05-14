//1lorem text
const text=[
    'The first American cookies that showed up in cook books had creative names like Jumbles, Plunkets and Cry Babies which gave no clue to what was inside the cookie. As the expansion of technology grew in the United States, new ingredients started to show up in cookie recipes. For instance with the railroad, more people could purchase fruits and nuts like coconuts and oranges. Even cereal started showing up in cookie recipes after the Kellogg brothers invented cornflakes in the late 1800s. Then when electric refrigerators became available in the 1930s, icebox cookies also became popular Animal Crackers originally came from England to the United States and were first just called “Animals”. Then in the late 1800s, manufacturers in the United States began making them. Then with the rise of P.T. Barnum and his circus, “Animals” became “Animal Crackers” and that is when you started to see the still familiar square box with a circus cage on it and a handle for easy carryibut they started out as a hardtack biscuit for the Australian army. Because of their longer shelf life, these biscuits were used as a substitute for bread"',
     'The Chocolate Chip Cookie actually was invented by mistake by Ruth Graves Wakefield in 1937 in Massachusetts. She ran the Toll House Restaurant and would often bake cookies for her guests. On the day in question, she was making “Butter Drop Do” cookies when she realized she had run out of baker’s chocolate. She used a bar of semisweet chocolate instead expecting it to melt into the dough but instead the pieces of chocolate kept their shape. And that was the first bath of chocolate chip cookies. She originally called the cookies, “The Toll House Crunch Cookie',
     'in 1939, Betty Crocker mentioned the cookie on her radio series on “Famous Foods From Famous Eating Places” and soon people everywhere were asking for the chocolate chip cookie. Ruth eventually made an agreement with the Nestle company that allowed them to print the recipe on the back wrapper of their Semi-Sweet Chocolate Bar and the rest is history.',
     'This is just some of the popular types of cookies around the world. How is cookie dough made? There are so many different fun recipes. At DoDo’s Edible Cookie Dough & Ice Cream, we love all types of cookie dough and make it our mission to find creative combinations for our customers to enjoy. For the best edible cookie dough near me, choose us. If you are interested in joining our edible cookie dough shop franchise or even just more of the history of the cookie, give us a call or send us a message today.',
     'The chocolate chip cookie is one of the most beloved sweet treats for people of all ages in India. Cookie Manufacturers in India would agree that this cookie is one of their best sellers throughout the country. It is, therefore, tough to believe that the chocolate chip cookie, one of the world’s most popular sweet snacks, was created by chance.',
     'Ruth Graves Wakefield and her husband, Kenneth, were running the Toll House Inn on Route 18 near Whitman, Massachusetts when they invented the chocolate chip cookie in 1930. Mrs. Wakefield, a dietitian and food professor, cooked all of the food for the inn’s guests and had earned an outstanding local reputation for her extensive dessert menu. It’s frequently stated that necessity is the mother of innovation, and this story is no exception.',
'The original recipe calls for simple, no-frills ingredients, including nuts of your choice. Wakefield is also responsible for Nestle breaking down its classic chocolate bar into smaller pieces (160 in total), making the chocolate easier to work with. These are commonly referred to as “morsels”. Over the years, cookie and biscuit manufacturers in India and other parts world have recreated the chocolate chip cookie in a variety of ways: crispy, soft, thick, thin, with or without nuts.',
'The first chocolate chip cookie was around the size of a quarter. It was crispy and could be consumed in a single bite. Today, the world’s largest chocolate chip cookie, weighing 40,000 pounds and with a 101 ft diameter, has been created in North Carolina in 2003! ',
' The recipe for the chocolate chip cookie, formerly known as the “Toll House Crunch Cookie,” was published in a Boston newspaper and immediately became one of America’s favourites. While “Butter Drop Do Cookies” were the original name given to them, Wakefield rechristened them as “Chocolate Chip Cookies” in the trademark yellow pages of her first published cookbook, entitled ‘Toll House Tried and True Recipes’ in 1936',
'The creator of the cookie was given a lifelong supply of chocolate in exchange for her recipe. In 1939, the now-ubiquitous teardrop-shaped chocolate chip was finally created after developing on Wakefield’s recipe. Cookie manufacturers in India have given their own twist to this tasty treat.  '    
]

const form=document.querySelector(".lorem-form");
const amount=document.getElementById("amount");
const result=document.querySelector('.lorem-text');
form.addEventListener("submit",function(e){
    e.preventDefault();
    const value=parseInt(amount.value);
    console.log(value);
const random=Math.floor(Math.random() * text.length);
//empty
//-1
//>9
if(isNaN(value) || value < 0 || value > 9 ){
    result.innerHTML=`<p class="result">${text[random]}</p>`;
}
else{
    let tempText = text.slice(0,value);
    tempText=tempText
    .map(function (item){
        return `<p class ="result">${item}</p>`;
    })
    .join("")
    result.innerHTML = tempText;
}

})
















