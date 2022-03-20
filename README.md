# Lab 1 - kalkulator

### Aplikacja stworzona przy pomocy Expo CLI - React Native 
#### Testowana przy pomocy aplikacji Expo i na serwerze deweloperskim przy pomocy `nmp run web`

Uruchamianie serwera na localhoscie: <br>
Jak widać, po uruchomieniu serwera dostajemy automatycznie kod QR do aplikacji mobilnej Expo

![obraz](https://user-images.githubusercontent.com/56678518/159186139-f19981a3-b791-4f0b-9f72-2715477b8fec.png)

Widok aplikacji z użyciem narzędzia deweloperskiego: 

![obraz](https://user-images.githubusercontent.com/56678518/159185946-11e054f4-4453-4863-a96b-a67642856265.png)

Aplikacja posiada jedynie 2 state'y - oba wykorzysywane są do wyświetlania wyników/przechowywania aktualnego kroku.

- resultText - przechowuje aktualną listę operacji - górna wartość,
- calculationText - przechowuje "dynamicznie" obliczany wynik.

![obraz](https://user-images.githubusercontent.com/56678518/159186242-934d60e2-dcbd-4b8e-9d36-73c7fefb589b.png)

Funkcja buttonPressed wywołana zostaje przy kliknięciu dowolnego przycisku:
- Jeśli znak to ' = ', to wynik zostaje podsumowany
- Jeśli inny znak, to zostaje dopisany do stringa, który później będzie obliczany

![obraz](https://user-images.githubusercontent.com/56678518/159186340-670e803a-ce20-4545-83fc-6b99c65c0c02.png)

calculateResult oblicza dane wyrażenie i wypisuje wynik

![obraz](https://user-images.githubusercontent.com/56678518/159186482-c7cc81d2-4fef-4633-ba99-5b7512bb85fe.png)

operate opiera się na switchu, który sprawdza wciśniętą operację i:
- Jeśli ' DEL ' to zostaje usunięty z listy ostatni znak,
- Jeśli ' C ' to usunięte zostaje cały ciąg
- Jeśli '+ \ - \ * \  /' to sprawdzone zostaje czy ostatni znak nie jest już operacją i
  - jeśli ostatni znak jest operacją - pomijamy wciśnięcie
  - jeśli ostatni znak jest cyfrą - dodajemy znak

![obraz](https://user-images.githubusercontent.com/56678518/159186545-c0af16b2-e95c-4098-a9a3-8ed3e6664c3b.png)





