function convert()
{
	
stack={
	top:-1,
	capacity:cap
	array:[],
	output:[],
	precedence: {'+':1, '-':1, '*':2, '/':2, '^':3}
}

function isEmpty()
{
	if(stack.top==-1)
		return true;
	else
		return false;
}

function peek()
{
	return stack.array[-1];
}

function pop()
{
	if(!stack.isEmpty())
	{
		stack.top=-1;
		return stack.array.pop();
	}
	else{
		return "$";
	}
}

function push(op)
{
	stack.top+=1
	stack.array.appendChild(op);
}

function isOperand(ch)
{
	return ch.value.match(/^[0-9a-zA-Z]+$/);
}

function notGreater(i)
{
	try{
		var a=stack.precedence[i];
		var b=stack.precedence[stack.peek()];
		if(a<=b)
			return true;
		else
			return false;
	}
	catch{
		return false;
	}
}

function infix_con(exp)
{
	for i in exp
	{
		if(stack.isOperand()
		{
			stack.output.appendChild(i);
		}
		else
			if(i=='(')
			{
				stack.push(i);
			}
			else
				if(i==')')
				{
					while(!stack.isEmpty()&&stack.peek()!='(')
					{
						a=stack.pop();
						stack.output.appendChild(a);
					}
					if(!stack.isEmpty() && stack.peek()!='(')
					{
						return -1;
					}
					else{
						stack.pop()
					}
				}
			else{
				while(!stack.isEmpty() && notGreater(i))
				{
					stack.output.appendChild(stack.pop())
				}
				stack.push(i)
			}
	}
			
			while(!stack.isEmpty())
			{
				stack.output.appendChild(stack.pop())
			}
			console.log(stack.output);
	
	}
}
}