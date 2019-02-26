(function(){
    var firstTab = document.getElementById('firstTab');
    console.log(firstTab);

    var secondTab = document.getElementById('secondTab');
    console.log(secondTab);

    var firstLi = document.getElementById('firstLi');
    var secondLi = document.getElementById('secondLi');

    var firstDiv = document.getElementById('tab-1');
    var secondDiv = document.getElementById('tab-2');

    secondTab.addEventListener('click', (e) => {

        if(firstLi.classList.contains('active')){

	   firstLi.classList.remove('active');
           secondLi.classList.add('active');

	   firstDiv.classList.remove('active');
           secondDiv.classList.add('active');
        }
    });

    firstTab.addEventListener('click', (e) => {
	if(secondLi.classList.contains('active')){

	   secondLi.classList.remove('active');
           firstLi.classList.add('active');

	   secondDiv.classList.remove('active');
           firstDiv.classList.add('active');
        }
    });

}());



