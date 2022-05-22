# Lab 5 - obsługa gestów użytkownika 

<br>

## Ekran pierwszy

Pierwszy ekran zawiera domyślny widok z oficjalnego tutoriala ScrollView na stronie react-native. Widok ten charakteryzuje się tym:
- Jeden View,
- Tekst do lewej strony,
- Domyślny flexbow

![obraz](https://user-images.githubusercontent.com/56678518/169711740-72bd5dac-1050-4b90-b88f-082ee2bf3b86.png)

## Ekran drugi

Drugi ekran jest zmodyfikowaną wersją pierwszego ekranu, natomiast za pomocą flexbox'a stworzony został następujący widok:
- Dwukolumnowy layout,
- Zawsze pokazujący się scrollbar,
- automatyczne zatrzymanie się scrolla, po "oderwaniu" palca od ekranu. Na pierwszym ekranie, po "oderwaniu" palca od ekranu, scroll stopniowo spowalniał, do momentu, kiedy się zatrzymał.

![obraz](https://user-images.githubusercontent.com/56678518/169711762-1365fae4-ecd4-4e6e-a37e-3f1a6fb8d065.png)

## Ekran trzeci

Ekran trzeci składa się z dwóch przycisków:
- Pierwszy po kliknięciu uruchamia skrypt, który zmienia BGColor przycisku na losowo wygenerowany,
- Drugi przycisk przenosi nas do nowego widoku, w którym możemy zobaczyć:
  - Przycisk pozwalający nam na cofnięcie się na poprzednią stronę (stronę z dwoma przyciskami)
  - Oraz wygenerowany WebView z przypadkowo wybraną stroną ;)

#### Widok strony z dwoma przyciskami

![obraz](https://user-images.githubusercontent.com/56678518/169713363-7585aeca-fe53-44cc-a5ca-27a35c69a01c.png)

#### Widok strony z WebView

![obraz](https://user-images.githubusercontent.com/56678518/169713375-17de975f-0281-49d2-8079-eba2799abd85.png)

## Ekran czwarty

Czwarty ekran zawiera 2 obiekty Swipeable
- Pierwszy po przeciągnięciu w lewo pokaże nam 2 przyciski, a po przeciągnięciu w prawo pokaże nam kontener o kolorze jasnoniebieskim
- Drugi działa tak samo jak pierwszy, lecz czynności są odwrócone kierunkami, a zamiast 2 przycisków pojawi się ich 6

![obraz](https://user-images.githubusercontent.com/56678518/169713462-29df0341-ad4c-4e08-93ab-1668be61d819.png)

![obraz](https://user-images.githubusercontent.com/56678518/169713473-6fb25e93-d7e5-4d11-a206-74d1fd8962f2.png)