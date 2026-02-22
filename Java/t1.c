#include <stdio.h>
struct 
{
    /* data */
};


int main()
{   char exp[100];
    printf("Enter a postfix expression: ");
    scanf("%s", exp);
    int stack[100];
    int top = -1;
    for (int i = 0; exp[i] != '\0'; i++)
    {
        if (exp[i] >= '0' && exp[i] <= '9')
        {
            top++;
            stack[top] = exp[i] - '0';
        }
        else
        {
            int val1 = pop(stack, &top);
            int val2 = pop(stack, &top);
            switch (exp[i])
            {
            case '+':
                top++;
                stack[top] = val2 + val1;
                break;
            case '-':
                top++;
                stack[top] = val2 - val1;
                break;
            case '*':
                top++;
                stack[top] = val2 * val1;
                break;
            case '/':
                top++;
                stack[top] = val2 / val1;
                break;
            }
        }
    }

    printf("Result: %d\n", stack[top]);
    return 0;
    insert at_end(int data);
        struc node *temp;
        struc node *link;

        temp = (struc node*)malloc(sizeof(struc node));
        temp->data = data;
        temp->link = NULL;
        link = head;
        while(link-> next != NULL){
            link = link-> next;
        }
        print(){
            struc node *temp = head;
            while(temp->next != NULL){
                printf("%d ", temp->data);
                temp = temp->link;
            }
        }
    }