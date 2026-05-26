#include <stdio.h>

void main()
{
    int i, j, bt[10], n, wt[10], tt[10];
    int wl = 0, tl = 0;
    float aw, at;

    printf("Enter no. of processes:\n");
    scanf("%d", &n);

    printf("Enter the burst time of processes:\n");

    for(i = 0; i < n; i++)
    {
        scanf("%d", &bt[i]);
    }

    wt[0] = 0;
    tt[0] = bt[0];

    for(i = 0; i < n - 1; i++)
    {
        wt[i + 1] = bt