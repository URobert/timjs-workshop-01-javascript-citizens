var usersObjs = [];

$(document).ready(() => {
    init();
    addUser('George', 23);
    addUser('Adriana', 13);
    addUser('Mihai', 19);
    addUser("Mishu",13);
});

function init() {
    $('form').on('submit', e => e.preventDefault());

    $('#new-user').on('submit', e => newUser());
    
    $('#count-users').on('click', e => countUsers());
    
    $('#sort-by-age').on('click', e => sortUsers());
    
    $('#level-up').on('click', e => levelUp());
}


function newUser() {
    var name = $('#name').val(),
        age  = $('#age').val();

    if (!name || !age) {
        return alert('Both Name & Age are required');
    }

    $('#age').val('');
    $('#name').val('').focus();

    addUser(name, age);
}


function addUser(name, age) {

    // create a user object & store it
    usersObjs.push({name,age});
    console.log(usersObjs);
    

    var content = '<strong>'+name+'</strong> ('+age+')';

    $('<li class="list-group-item"></li>')
        .html(content)
        .appendTo( $('ol') );
}

function countUsers(){
    
    var youngValue = $('#min-age').val();
    var filtered = usersObjs.filter(function (element){
        return parseInt(element.age) > parseInt(youngValue); 
        });
    console.log(filtered.length);
    }

function sortUsers(){
    var test = [];
    for (var user = 0; user < usersObjs.length ;user += 1){
        test.push(usersObjs[user].name);
    }
    test.sort();
    console.log( "sorted users:" ,test);

}

function levelUp(){
    for (var i = 0; i < usersObjs.length; i +=1 ){
        usersObjs[i].age += 1;
    }
    console.log(usersObjs);
}