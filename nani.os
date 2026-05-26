#include <stdio.h>

int main()
{
    int pt[20];
    int phymem, fs, nf;
    int pgno, offset;
    int physical;
    int i;

    printf("\nMEMORY MANAGEMENT USING PAGING\n");

    printf("\nEnter size of physical memory: ");
    scanf("%d", &phymem);

    printf("Enter frame size (page size): ");
    scanf("%d", &fs);

    nf = phymem / fs;

    printf("\nNumber of frames = %d\n", nf);

    printf("\nEnter