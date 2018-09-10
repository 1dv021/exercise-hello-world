# Hello, World!

- A-nivå
- [GitBook](https://coursepress.gitbook.io/1dv021/ovningsuppgifter/del-1/a-niva/hello-world)
- [Lösningsförslag](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/hello-world)

> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbook.io/1dv021/guider/att-komma-igang-med-en-ovningsuppgift) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

## Uppgift

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `hello.js` och komplettera funktionen `sayHello`, så att funktionen returnerar strängen `Hello, World!`.

## ...och glöm inte!

### Spara på GitHub

Gjort ändringar i koden och sparat dem på GitHub? Kanske behöver du skapa en .gitignore-fil med inställningar för Node.js, utvecklingsverktyg och operativsystem? Glöm inte att följa guiden [Arbetsgång med en övningsuppgift](https://coursepress.gitbook.io/1dv021/guider/arbetsgang-med-en-ovningsuppgift/). Använd `git commit` och `git push` regelbundet!

### Kör applikation, tester och kontroll så kodstandarden följs

#### npm install

Innan du kan köra applikationen, eller dess test, måste du exekvera kommandot `npm install` i terminalfönstret för att installera de paket applikationen är beroende av.

```bash
npm install
```

Exempelutskrift:

```
npm notice created a lockfile as package-lock.json. You should commit this file.
added 232 packages from 606 contributors and audited 451 packages in 18.235s
found 0 vulnerabilities
```

#### npm start

För att köra applikationen skriver du kommandot `npm start` i terminalfönstret.

```bash
npm start
```

Exempelutskrift:

```
> exercise-hello-world@1.1.0 start example-path/1dv021/example-username-exercises/hello-world
> node app.js
 
Hello, World!
```

#### npm test

För att köra applikationens tester skriver du kommandot `npm test` i terminalfönstret.

```bash
npm test
```

Exempelutskrift:

```
> exercise-hello-world@1.1.0 start example-path/1dv021/example-username-exercises/hello-world
> node app.js

Test the function sayHello
√ sayHello(); should return 'Hello, World!'

1 passing (8ms)
```

Exempelutskrift vid fel enligt tester (den förväntade strängen returneras inte av funktionen `sayHello`).

```
> exercise-hello-world@1.1.0 start example-path/1dv021/example-username-exercises/hello-world
> node app.js

  Test the function sayHello
    1) should return 'Hello, World!'

  0 passing (9ms)
  1 failing

  1) Test the function sayHello should return 'Hello, World!':

      AssertionError: expected 'Hi, there!' to deeply equal 'Hello, World!'
      + expected - actual

      -Hi, there!
      +Hello, World!

      at Context.it (test\hello.test.js:15:33)

npm ERR! Test failed. See above for more details.
```

#### npm run lint

För att kontrollera att koden följer kodstandarden skriver du kommandot `npm run lint` i terminalfönstret.

```bash
npm run lint
```

Skulle du till exempel indenterat koden fel och råkat skriva ett semikolon på fel plats kan du få följande utskrift.

```
> exercise-hello-world@1.1.0 start example-path/1dv021/example-username-exercises/hello-world
> node app.js

  standard: Use JavaScript Standard Style (https://standardjs.com)
  standard: Run `standard --fix` to automatically fix some problems.

example-path/1dv021/example-username-exercises/hello-world/src/hello.js
17:5 error Expected indentation of 2 spaces but found 4
17:27 error Extra semicolon

✖ 2 problems
npm ERR! Test failed. See above for more details.</span>
```

#### npm run all

Vill du kontrollera att koden följer kodstandarden och köra testerna med ett kommando skriver du `npm run all`. _OBS!_ Följer inte koden kodstandarden avbryts skriptet och testerna kommer inte att köras.

## Tips

Genom att köra testet som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften:

- [funktionsuttryck](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)