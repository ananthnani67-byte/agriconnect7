#include <stdio.h>
#include <conio.h>

void main()
{
    int i, j, bt[10], t, n, wt[10], tt[10];
    int wl = 0, tl = 0;
    float aw, at;

    clrscr();

    printf("Enter no. of processes:\n");
    scanf("%d", &n);

    printf("Enter the burst time of processes:\n");

    for(i = 0; i < n; i++)
    {
        scanf("%d", &bt[i]);
    }

    /* Sorting burst times */
    for(i = 0; i < n; i++)
    {
        for(j = i + 1; j < n; j++)
        {
            if(bt[i] > bt[j])