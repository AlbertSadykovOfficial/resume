how_scripts = document.getElementsByTagName('body')[0].getElementsByTagName('script').length;
for(i=0; i < how_scripts; i++)
{
    document.getElementsByTagName('body')[0].getElementsByTagName('script')[0].remove();
}