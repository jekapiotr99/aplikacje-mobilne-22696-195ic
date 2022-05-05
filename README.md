# Lab 4 - obsługa danych wprowadzanych przez użytkownika + modale 

<br>

## Ekran pierwszy

Ekran ten zawiera 5 TextInput'ów, które wyróżniają się następującymi cechami:
  - Domyślny TextInput zawiera podstawowe propsy
  - TextInput numeryczny zawiera props: `keyboardType="numeric"` co sprawia, że korzystamy z klawiatury numerycznej
  - TextInput duże litery zawiera props: `autoCapitalize="characters"`, który sprawia, że wpisywane przez nas litery są duże,
  - TextInput Clear Text on Focus, sprawia, że po wybraniu tego pola nasz Text się kasuje
  - TextInput z kolorowym placeholderem zawiera props: `placeholderTextColor='rgb(255, 0, 255)'` który pozwala nam na zmianę koloru placeholdera.

![obraz](https://user-images.githubusercontent.com/56678518/166981507-792e369d-944a-40e3-83f6-ce42294b9ab2.png)

## Ekran drugi

Ekran ten zawiera 3 komponenty `Picker`, które pozwalają nam wybrać jedną z 2 dostępnych opcji. Pickery zawsze będą posiadały tę samą wartość, więc zmiana jednego z nich powoduję zmiane we wszystkich komponentach

![obraz](https://user-images.githubusercontent.com/56678518/166982213-9a4d1dd7-297a-4c9d-bd5e-d5224fcbd0cf.png)

## Ekran trzeci

Początkowym stanem komponentu `Switch` jest stan wyłączony. Przełączenie komponentu zmieni jego stan oraz kolor, a z czym wiąże się pokazanie dodatkowego komponentu `Modal`.

#### Widok stanu wyłączonego:

![obraz](https://user-images.githubusercontent.com/56678518/166982488-188bcede-a891-4c3a-a433-df7828ed899b.png)

#### Widok stanu włączonego:

Stan włączony pokaże nam `Modal` z liczbą pseudolosową z zakresu 0 - 1000, oraz przycisk pozwalający na zamknięcie `Modal`. Zamknięcie `Modal` nie wiąże się ze zresetowaniem stanu `Switch`.

![obraz](https://user-images.githubusercontent.com/56678518/166982694-7d38d741-2cc3-4530-9076-19cb8d947eb6.png)

## Ekran czwarty

Ta zakładka wykorzystuje narzędzia Datetimepicker z biblioteki `'@react-native-community/datetimepicker'`. 

![obraz](https://user-images.githubusercontent.com/56678518/166982941-3d1f7615-1e46-4e1d-a423-61fbf649f628.png)

Przycisk dzień pozwoli nam na wybranie daty - dzień/miesiąc/rok.

![obraz](https://user-images.githubusercontent.com/56678518/166983129-418b3810-ccfe-400f-b9bf-5ca32ca6231f.png)

Przycisk godzina pozwoli nam na wybranie czasu - godziny/minut

![obraz](https://user-images.githubusercontent.com/56678518/166983169-bc161448-e8d2-427c-94b6-0ce70adeeea3.png)

Przycisk pokaż datę wyświetli nam ustawioną przez nas datę. Podstawowo, na obu tych przyciskach ustawiona jest data i godzina lokalna urządzenia.

![obraz](https://user-images.githubusercontent.com/56678518/166983205-613a7b3c-08a5-49cd-9f7c-ef51598cf331.png)


## Ekran piąty

Ekran ten wykorzystuje gotowe komponenty ekranu trzeciego i dodaje `ToastAndroid` zwany również jako `Snackbar`.

Po zamknięciu modalu z opóźnieniem sekundowym pojawi się `Snackbar` z komunikatem: "Toast Text".

![obraz](https://user-images.githubusercontent.com/56678518/166983905-fb01c440-70fb-41e1-9732-3b9582715e6e.png)