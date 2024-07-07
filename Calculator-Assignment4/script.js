let input= document.getElementById('data')

function display(val)
{
	input.value += val

}

function clr(){
	input.value = ""
}

function Calculate(){
	try {
		input.value = eval(input.value)	
	} catch(e) {
		input.value=" Syntax Error ! "
		}
	
	}


function Del(){
	input.value = input.value.slice(0,-1)
}