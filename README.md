# Lab 6 - obsługa obrazów + tryb offline 

<br>

## Ekran pierwszy

Pierwsze dwa ekrany zawierać będą po jednym obrazie oraz `slider`. 
Pierwszy ekran wyświetla obraz z wykorzystaniem `uri`.

![obraz](https://user-images.githubusercontent.com/56678518/172073065-ae13a3fd-2e3f-42bb-9a12-05c0c4d10380.png)


## Ekran drugi

Drugi ekran jest zmodyfikowaną wersją pierwszego ekranu, wykorzystuje on sposób wyświetlania obrazu `request`.
Oba obrazy są tej samej rozdzielczości, co pokazuje działanie skalowania slidera. 
Slider na obu ekranach "przymocowany" jest do dołu zdjęcia.

![obraz](https://user-images.githubusercontent.com/56678518/172073093-19cfe7dd-2742-48ba-b2f8-088dd30f7251.png)

## Ekran trzeci

Trzeci ekran zawiera lazyload obrazu z wykorzystaniem biblioteki: `react-native-elements`. Biblioteka ta rozszerza
dotychczasowe komponenty react native. Pozwala do zdjęcia dodać `Placeholder` w postaci innego komponentu dzięki czemu powstaje 
efekt lazyload'a.

Widok przed załadowaniem się obrazu:

![obraz](https://user-images.githubusercontent.com/56678518/172073231-e12a70c3-1850-4c40-b6fa-5578f59b7f1f.png)

Widok po załadowaniu się komponentów:<br>
Zdjęcie jest dość rozpikselowane, ponieważ umieszczenie całego zdjęcia 4k nie było możliwe, przez co musiałem wykorzystać skalowanie
Dodatkowo, dodane zostały ikony z biblioteki <b>FontAwesome</b>.

![obraz](https://user-images.githubusercontent.com/56678518/172073293-35874b3f-0304-4da1-abcd-5d218d19e18f.png)

## Ekran czwarty

Ekran czwarty wykorzystuje bibliotekę: `@react-native-community/netinfo`, która jest kontynuacją już 
porzuconego komponentu `NetInfo` wbudowanego w React Native. Za pomocą tej biblioteki możemy sprawdzić:
- Typ połączenia,
- Czy istnieje połączenie,
- Czy nasze urządzenie jest w zasięgu sieci, do której jesteśmy aktualnie połączeni,
- Czy Wifi jest włączone,
- oraz szczegóły które różnią się w zależności od aktualnego połączenia.

![obraz](https://user-images.githubusercontent.com/56678518/172073377-c12b345d-3335-40c3-9628-fde66b6bfb7b.png)

## Ekran piąty

Ekran piąty zawiera `asynStorage`. Pola na tym ekranie służą jako:
- Pierwszy textbox - Wartość wpisywana do wybranego miejsca Storage,
- Drugi textbox - klucz wskazujący na miejsce Storage,
- Przycisk `Save` zapisujący wartość pierwszego textbox'a do wybranego miejsca Storage
- Trzeci textbox - Służy do wypisywania wartości po kluczu
- Przycisk `Read` - otwiera alert, który wyświetli wartość i klucz wybranego przez nas miejsca w Storage - miejsce wybrane w 
textbox'ie nr 3.

Widok domyślny:

![obraz](https://user-images.githubusercontent.com/56678518/172073919-8eb5a423-bd45-495c-8f91-4e1429d96a0f.png)

Ekran po zapisaniu i odczytaniu danych:

![obraz](https://user-images.githubusercontent.com/56678518/172073940-1ce2b98c-31bd-4c19-aeb6-72e1338f984d.png)

## Ekran szósty 

Ekran ten przedstawia zmianę stanów dwóch elementów: `<Icon>` i `<Text>` w zależności, czy urządzenie podłączone jest do 
internetu, czy nie. Wykorzystane do tego zostaną Ikony z ekranu 3 - z innej biblioteki ikon (Feather zamiast FontAwesome) oraz
detekcja sieci z ekranu 4. Do wyznaczania stanów poszczególnych elementów wykorzystane będą `ternary operation`.

Ekran przy połączeniu z internetem:

![obraz](https://user-images.githubusercontent.com/56678518/172074159-b223dc1e-95e8-4527-ba30-d0540a277ae5.png)

Ekran bez połączenia z internetem:<br>
Jak widać, zmienia się:
- Ikona,
- Tekst,
- Kolor ikony i tekstu,

![obraz](https://user-images.githubusercontent.com/56678518/172074248-c6d351d1-7d67-41e6-89d0-a7696eab187b.png)