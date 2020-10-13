const header = $('<header></header>');
$(header).toggleClass('header');
const h1 = $('<h1></h1>').text('TO DO');
$(h1).toggleClass('h1');
const inputItem = $('<input></input>');
$(inputItem).attr( 'type',"text");
$(inputItem).attr('placeholder',"new item" );
$(inputItem).toggleClass('input');
const addButton = $('<button></button>').text('Add item');
$(addButton).toggleClass('addBtn');
$(header).append(h1,inputItem,addButton);
const todoList = $('<ol></ol>')
$(todoList).toggleClass('ol');
$('#root').append(header,todoList);
$(addButton).on('click',function (){
    const text = $(inputItem).val();
    console.log(text);
    if(text){
        const li = $('<li></li>');
        $(li).toggleClass('li');
        const delButton = $('<button></button>').text('\u00D7');
        $(delButton).toggleClass('close');
        $(delButton).on('click',function (){
            $(li).remove();
        });
        $(li).append(text,delButton);
        $(todoList).append(li);
    } else {
        alert('Enter to do')
    }
    $(inputItem).val('');
});