## Lab 2 - flexbox + navigation
<br>


### Widok podstawowy aplikacji:
<br>

Jak widać na obrazku poniżej, widok nawigacji został rozwiązany na dole aplikacji. Wszystkie zakładki widoczne są cały czas, z czego aktulanie przyglądana zakładka wyróżniona jest kolorem oraz wypełnieniem okręgu.

Na pierwszej stronie `Spread Operations` wykorzystany został flexbox z wykorzystaniem `flex-direction: column`, co pozwoliło ustawić wszystkie elementy podrzędne w kolumnie, gdzie szerokość każdego elementu dostosowuje się do szerokości strony(telefonu). 


![obraz](https://user-images.githubusercontent.com/56678518/161445955-2c6c4e8a-c49f-4dbb-a852-341ac64d3acf.png)

Widok nr.2 - Rest pareameters

Na tej "podstronie" wykorzystany został niestandardowy element `<ScollView>` który pozwala na 
wprowadzenie większej ilości elementów na stronę, co zarówno pozwoli nam na scrollowanie po stronie. Zostały również zaimportowane zdjęcia za pomocą znacznika `<Image>`. 

Flex wykorzystany na tej stronie to `flex-direction: row`, który będzie próbował tego samego co z parametrem column, lecz wszystko odbędzie się po osi poziomej. Również wykorzystana został parametr `flex-wrap: wrap` który pozwoli nam na przeniesienie elementów do kolejnego wiersza, kiedy te, będą wychodzić poza zarysy strony(telefonu).


![obraz](https://user-images.githubusercontent.com/56678518/161446170-394206d4-949c-4143-a582-398e99af082c.png)


Widok nr.3 - useState hooks

Na tej "podstronie" wykorzystany został flex ze stwierdzeniami wielkości kontenerów:
- pierwszy - 1
- drugi - 2
- trzeci - 5,
  
co daje nam łącznie 8, czyli przez co będzie dzielona strona.

![obraz](https://user-images.githubusercontent.com/56678518/161446366-4db4bac4-c949-4815-841c-725523378529.png)



## Sekcja kodu: 

Sekcja nawigacyjna wraz z zaimportowanym komponentem bottom-tabs:

![obraz](https://user-images.githubusercontent.com/56678518/161446989-2294e97b-371f-4441-8ad3-f222beb84e97.png)


Importy potrzebne do działania routerów/nawigacji:

![obraz](https://user-images.githubusercontent.com/56678518/161447091-8a19dbed-e90d-427c-b345-f1f5cfb6f5e0.png)
